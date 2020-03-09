import React from "react";

import { Row, Col, Alert } from "reactstrap";

import fetch from "isomorphic-unfetch";

import { isLogged } from "./../../utils/auth";
import Event from "./Event";
import { base_url } from "../../utils/constants";

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events || [],
      response: {
        message: "",
        status: 0
      }
    };
  }

  filterEvents = event_id => {
    const { events } = this.state;
    const new_events = events.filter(event => event.id != event_id);
    this.setState({ events: new_events });
  };

  onEnroll = async event_id => {
    // make a fetch request

    try {
      const { token } = this.props;
      const res = await fetch(base_url + "/enroll", {
        method: "POST",
        body: JSON.stringify({
          token,
          event_id
        }),
        headers: {
          "content-type": "application/json"
        }
      });

      const data = await res.json();
      if (res.status !== 200)
        this.showErr(data.message + ". Please refresh the page");
      this.showMsg("You are successfully enrolled!");
      // Filtering the events
      this.filterEvents(event_id);
    } catch (err) {
      this.showErr(
        err.message ||
          "Unknown error has occurred, please contact us if the problem persist!"
      );
    }
  };

  showMsg = message => {
    this.setState({
      response: {
        message,
        status: 200
      }
    });
    this.resetResp(1000);
  };

  showErr = message => {
    this.setState({
      response: {
        message,
        status: 400
      }
    });
    this.resetResp();
  };

  resetResp = (time = 3000) => {
    var self = this;
    setTimeout(() => {
      self.setState({ response: {} });
    }, time);
  };

  render() {
    const { events, response } = this.state;
    const { message, status } = response;
    return (
      <Row>
        <Col sm="12">
          <h4>Events</h4>
        </Col>
        <Col sm="12">
          {message && (
            <Alert color={status === 200 ? "success" : "danger"}>
              {message}
            </Alert>
          )}
        </Col>
        {events.length ? (
          events.map((event, index) => (
            <Col sm="12" md="6" lg="6" key={index}>
              <Event
                {...event}
                isLogged={isLogged()}
                onEnroll={this.onEnroll}
              />
            </Col>
          ))
        ) : (
          <Col sm="12">
            <Alert color="dark">No more events are available right now!</Alert>
          </Col>
        )}
      </Row>
    );
  }
}

export default Events;
