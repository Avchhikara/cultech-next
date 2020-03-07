import React from "react";

import { Col, FormGroup, Label, Input } from "reactstrap";

const Form1 = ({
  onEmailChange,
  onPasswordChange,
  onNameChange,
  onRollChange,
  name,
  email,
  password,
  rollno
}) => {
  return (
    <React.Fragment>
      <div className="text-center mb-2">Step 1 of 2</div>
      <FormGroup row>
        <Label for="name" sm={3}>
          Name
        </Label>
        <Col sm={9}>
          <Input
            type="text"
            id="name"
            required
            onChange={onNameChange}
            value={name}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="roll" sm={3}>
          Roll Number
        </Label>
        <Col sm={9}>
          <Input
            type="number"
            id="roll"
            required
            onChange={onRollChange}
            value={rollno}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="email" sm={3}>
          Email
        </Label>
        <Col sm={9}>
          <Input
            type="email"
            id="email"
            required
            onChange={onEmailChange}
            value={email}
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="password" sm={3}>
          Password
        </Label>
        <Col sm={9}>
          <Input
            type="password"
            id="password"
            required
            onChange={onPasswordChange}
            value={password}
          />
        </Col>
      </FormGroup>
    </React.Fragment>
  );
};

export default Form1;
