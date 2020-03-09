import React from "react";
import fetch from "isomorphic-unfetch";

import { Row, Col, Table, Badge, Spinner, Alert } from "reactstrap";

import AddMember from "./AddMember";

import { base_url } from "./../../utils/constants";
import { validateRoll } from "./../../utils/validate";
import { Router } from "next/router";

class AddTeamMem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      response: {
        message: "",
        status: 0
      },
      fetching: false,
      leader: "0",
      team_name: "",
      rollno: ""
    };
  }

  componentDidMount() {
    if (!this.state.members.length) this.fetchTeamMembers();
  }

  fetchTeamMembers = async () => {
    const { token, team } = this.props;
    const [team_id, event_id] = team;
    this.setState({ fetching: true });
    try {
      const res = await fetch(base_url + "/get-team", {
        method: "POST",
        body: JSON.stringify({
          token,
          team_id
        }),
        headers: {
          "content-type": "application/json"
        }
      });
      const data = await res.json();
      if (res.status !== 200) throw Error(data.message);

      this.setState({
        members: data.members,
        leader: data.leader,
        team_name: data.team_name
      });
      // this.renderMembers();
    } catch (err) {
      this.setErr(
        err.message ||
          "Some error has occurred or you may not have the permission to view this team"
      );
      this.resetResponse();
    }
    this.setState({ fetching: false });
  };

  resetResponse = (timeout = 3000) => {
    var self = this;
    setTimeout(() => {
      self.setState({
        response: {
          message: "",
          status: 0
        }
      });
    }, timeout);
  };

  setErr = message => {
    this.setState({
      response: {
        message,
        status: 400
      }
    });
    this.resetResponse();
  };

  handleAddMember = async () => {
    const { token, team } = this.props;
    const [team_id, event_id] = team;
    const { rollno } = this.state;
    if (!validateRoll(rollno)) {
      this.setErr("Roll number should be of 11 characters");
    } else {
      try {
        const res = await fetch(base_url + "/add-team", {
          method: "POST",
          body: JSON.stringify({
            team_id,
            event_id,
            rollno,
            token
          }),
          headers: {
            "content-type": "application/json"
          }
        });
        const data = await res.json();
        if (res.status !== 200) throw Error(data.message);
        this.setMsg(data.message + ". Please referesh to view changes");
      } catch (err) {
        this.setErr(err.message || "Error in adding the person to team");
      }
    }
  };

  setMsg = message => {
    this.setState({
      response: {
        message,
        status: 200
      }
    });
    this.resetResponse();
  };

  handleRollnoChange = e => {
    this.setState({ rollno: e.target.value });
  };

  renderMembers = () => {
    const { members, fetching } = this.state;
    if (members.length && !fetching) {
      return (
        <Table size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Rollno</th>
            </tr>
          </thead>
          <tbody>
            {members.map((mem, index) => {
              return (
                <tr key={index}>
                  <td>
                    {mem.name}{" "}
                    {mem.leader === "1" && <Badge color="light">leader</Badge>}
                  </td>
                  <td>{mem.rollno}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      );
    } else if (members.length === 0 && fetching) {
      return <Spinner color="success" size="sm" />;
    }
  };

  renderName = () => {
    const { team_name } = this.state;
    if (team_name)
      return (
        <div className="mb-3">
          Team Name: <strong>{team_name}</strong>
        </div>
      );
  };

  render() {
    const { message, status } = this.state.response;
    const { leader, rollno } = this.state;
    // console.log(leader);
    return (
      <Row className="m-auto">
        <Col sm={12}>
          <h4>Your Team</h4>
        </Col>
        {message && (
          <Col sm={10}>
            <Alert color={status === 200 ? "success" : "danger"}>
              {message}
            </Alert>
          </Col>
        )}
        <Col sm={10} className="m-auto">
          {this.renderName()}
          <h5>Members</h5>
          {this.renderMembers()}
          {leader === "1" ? (
            <AddMember
              onAdd={this.handleAddMember}
              rollno={rollno}
              onRollChange={this.handleRollnoChange}
            />
          ) : (
            <div className="text-muted">
              You cannot add members as your are not the team leader
            </div>
          )}
        </Col>
      </Row>
    );
  }
}

export default AddTeamMem;
