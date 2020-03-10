import React from "react";
import fetch from "isomorphic-unfetch";
import Router from "next/router";

import {
  Spinner,
  Alert,
  Row,
  Col,
  Card,
  Button,
  CardBody,
  CardTitle
} from "reactstrap";

import NonTeamEvent from "./NonTeamEvent";
import TeamEvent from "./TeamEvent";

import { base_url } from "./../../utils/constants";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enrollments: [],
      gettingEnrollments: true
    };
  }

  componentDidMount() {
    const { enrollments } = this.state;
    if (!enrollments.length) {
      this.getEnrollments();
    }
  }

  filterEnrollments = enrollment_id => {
    const { enrollments } = this.state;
    const new_enrollments = enrollments.filter(
      en => en.enrollment_id !== enrollment_id
    );
    if (new_enrollments.length !== enrollments)
      this.setState({ enrollments: new_enrollments });
  };

  handleUnEnroll = async (enrollment_id, event_id) => {
    // console.log("Unenroll");
    const { token } = this.props;
    try {
      const res = await fetch(base_url + "/unenroll", {
        method: "POST",
        body: JSON.stringify({
          token,
          event_id,
          enrollment_id
        }),
        headers: {
          "content-type": "application/json"
        }
      });

      const data = await res.json();
      if (res.status !== 200) throw Error("Error in unenrolling");
      // this.filterEnrollments(enrollment_id);
      this.getEnrollments();
    } catch (err) {
      this.setState({ gettingEnrollments: true });
      this.setState({ gettingEnrollments: false });
    }
  };

  getEnrollments = async () => {
    // Getting the enrollments
    let { token } = this.props;
    this.setState({ gettingEnrollments: true });

    try {
      const res = await fetch(base_url + "/dashboard", {
        method: "POST",
        body: JSON.stringify({
          token
        }),
        headers: {
          "content-type": "application/json"
        },
        timeout: 1000
      });
      const { data } = await res.json();
      const { team_enrollments, indi_enrollments } = data;
      this.setState({
        enrollments: [...team_enrollments, ...indi_enrollments],
        gettingEnrollments: false
      });
    } catch (err) {
      this.setState({
        gettingEnrollments: false
      });
    }
  };

  getRenderBody = () => {
    const { enrollments, gettingEnrollments } = this.state;
    if (!enrollments.length && gettingEnrollments) {
      return <Spinner size="sm" color="success" className="text-center" />;
    } else if (!(enrollments.length || gettingEnrollments)) {
      return <Alert color="dark">You are not enrolled in any events!</Alert>;
    }

    // Returning the enrollments array
    return enrollments.map((enrollment, index) => {
      if (enrollment.team_size === 1) {
        return (
          <NonTeamEvent
            {...enrollment}
            onUnenroll={this.handleUnEnroll}
            key={index}
          />
        );
      }
      return (
        <TeamEvent
          {...enrollment}
          key={index}
          onUnenroll={this.handleUnEnroll}
        />
      );
    });

    // console.log(enrollments);
  };

  handleDeleteTeam = team_id => {
    //   Always show an alert to user
    console.log("Delete team");
  };

  render() {
    return (
      <Row>
        <Col sm="12">
          <h4>Enrollments</h4>
        </Col>
        <Col sm={10} className="m-auto">
          {this.getRenderBody()}
        </Col>
        <Col sm={10} className="m-auto mt-3">
          <Card color="light">
            <CardBody>
              <CardTitle>Want to enroll in more events?</CardTitle>
              <Button
                color="success"
                size="sm"
                outline
                onClick={() => {
                  Router.push("/events");
                }}
              >
                Click here
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Dashboard;
