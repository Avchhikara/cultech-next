import React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { Spinner, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";

import Eve from "./Eve.js";
import { base_url } from "./../../utils/constants";

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: false,
      enrolled: false,
      getting: true
    };
  }

  componentDidMount() {
    this.fetchEvent();
  }

  fetchEvent = async () => {
    const { token, event_id } = this.props;
    const res = await fetch(base_url + "/event/", {
      method: "POST",
      body: JSON.stringify({
        event_id,
        token
      }),
      headers: {
        "content-type": "application/json"
      }
    });
    const data = await res.json();
    this.setState({
      enrolled: data.enrolled,
      event: data.data,
      getting: false
    });
    // console.log(data);
  };

  renderEvent = () => {
    const { event, enrolled, getting } = this.state;
    // console.log(event);
    if (!event && !getting) {
      return <div>No such event is present</div>;
    } else if (!event && getting) {
      return (
        <Col sm={10} className="text-center">
          <Spinner color="success" size="sm" />
        </Col>
      );
    } else {
      // Shwo the event
      return (
        <Col sm={10} className="m-auto">
          <Eve {...event} />
        </Col>
      );
    }
  };

  render() {
    return (
      <Row>
        <Col sm={12}>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link href="/">
                <span>Home</span>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href="/events">
                <span>Events</span>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Event Details</BreadcrumbItem>
          </Breadcrumb>
        </Col>
        <Col sm={12}>
          <h4>Event Details</h4>
        </Col>
        {this.renderEvent()}
      </Row>
    );
  }
}

export default Event;
