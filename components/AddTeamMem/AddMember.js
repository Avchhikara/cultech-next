import { useState } from "react";

import { FormGroup, Input, Button, Col } from "reactstrap";

const AddMember = ({ onRollChange, rollno, onAdd }) => {
  return (
    <React.Fragment>
      <h5>Add Member</h5>
      <FormGroup row>
        <Col sm={10}>
          <Input
            type="number"
            size="sm"
            autoFocus
            value={rollno}
            onChange={onRollChange}
            placeholder="Roll no. of future member"
          />
        </Col>
        <Col sm={2}>
          <Button color="success" outline size="sm" block onClick={onAdd}>
            Add
          </Button>
        </Col>
      </FormGroup>
    </React.Fragment>
  );
};

export default AddMember;
