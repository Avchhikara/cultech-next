import React from "react";
import { FormGroup, Input, Label, Col } from "reactstrap";

const Form = props => {
  const { name, onTeamNameChange, team_name } = props;
  return (
    <React.Fragment>
      <FormGroup row>
        <Label for="event" sm={3} md={2}>
          Event name
        </Label>
        <Col sm={9} md={10}>
          <Input
            type="text"
            name="event"
            id="event"
            value={name}
            disabled={true}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="name" sm={3} md={2}>
          Team name
        </Label>
        <Col sm={9} md={10}>
          <Input
            autoFocus={true}
            type="text"
            name="name"
            id="name"
            value={team_name}
            onChange={onTeamNameChange}
          />
        </Col>
      </FormGroup>
    </React.Fragment>
  );
};

export default Form;
