import React from "react";
import fetch from "isomorphic-unfetch";
import { Row, Col, Button, Alert } from "reactstrap";
import Router from "next/router";

import Form from "./CreateTeamForm";
import { base_url } from "./../../utils/constants";

class CreateTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event_id: -1,
      team_name: "",
      response: {
        message: "",
        status: 0
      },
      creating: false
    };
  }

  componentDidMount() {
    const { event } = this.props;
    const event_id = event[0];
    this.setState({ event_id });
  }

  handleTeamName = e => {
    this.setState({ team_name: e.target.value });
  };

  validateName = (team_name = "") => team_name.length <= 5;

  createTeam = async () => {
    const { team_name } = this.state;
    this.setState({ creating: true });
    if (!this.validateName(team_name)) {
      // Now, making the fetch request
      const { event_id } = this.state;
      const token = this.props.token;
      try {
        const res = await fetch(base_url + "/create-team", {
          method: "POST",
          body: JSON.stringify({
            team_name,
            event_id,
            token
          }),
          headers: {
            "content-type": "application/json"
          }
        });
        const json = res.json();
        if (res.status == 200) {
          this.setState({
            response: {
              status: 200,
              message: json.message
            }
          });
          // Everything is right
          Router.push("/dashboard");
        } else {
          throw Error(json.message);
        }
      } catch (err) {
        this.setErr(
          err.message ||
            "An error has occured, please contact us if the problem persists!"
        );
        this.setState({ creating: false });
      }
    } else {
      this.setErr("Team name should be more than 5 words");
      this.setState({ creating: false });
    }
  };

  setErr = (message = "") => {
    this.setState({
      response: {
        message,
        status: 400
      }
    });
    this.resetResponse();
  };

  resetResponse = () => {
    var self = this;
    setTimeout(() => {
      self.setState({
        response: {}
      });
    }, 3000);
  };

  render() {
    const { event } = this.props;
    const name = event[1];
    const { team_name, response, creating } = this.state;

    return (
      <Row>
        <Col sm={12}>
          <h4>Create team</h4>
        </Col>
        <Col sm={12} md={10} className="m-auto">
          {response.message && (
            <Alert color={response.status === 200 ? "success" : "danger"}>
              {response.message}
            </Alert>
          )}
          <Form
            name={name}
            onTeamNameChange={this.handleTeamName}
            team_name={team_name}
          />
        </Col>
        <Col sm={12} md={10} className="text-center">
          <Button
            color="success"
            outline
            size="sm"
            onClick={this.createTeam}
            disabled={creating}
          >
            {creating ? "Creating..." : "Create Team"}
          </Button>
        </Col>
      </Row>
    );
  }
}

export default CreateTeam;
