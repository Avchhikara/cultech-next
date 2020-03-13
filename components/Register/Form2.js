import React from "react";

import { Col, FormGroup, Label, Input } from "reactstrap";

const Form2 = ({ onBranchChange, onYearChange, onPhoneChange, phone }) => {
  return (
    <React.Fragment>
      <div className="text-center mb-2">Step 2 of 2</div>
      <FormGroup row>
        <Label for="phone" sm={3}>
          Phone Number
        </Label>
        <Col sm={9}>
          <Input
            type="number"
            id="phone"
            required
            onChange={onPhoneChange}
            value={phone}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="branch" sm={3}>
          Branch
        </Label>
        <Col sm={9}>
          <Input
            type="text"
            id="branch"
            required
            onChange={onBranchChange}
          ></Input>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="year" sm={3}>
          Year
        </Label>
        <Col sm={9}>
          <Input type="select" id="year" required onChange={onYearChange}>
            <option value="0" defaultValue>
              Select Year
            </option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
            <option value="5">5th</option>
          </Input>
        </Col>
      </FormGroup>
    </React.Fragment>
  );
};

export default Form2;
