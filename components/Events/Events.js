import React, { useState } from "react";

import { Row, Col } from "reactstrap";

import Event from "./Event";

const Events = ({ team, individual }) => {
  return (
    <Row>
      <Col sm="12">
        <h4>Events</h4>
      </Col>
      {individual.map((indi, index) => (
        <Col sm="12" md="6" lg="6" key={index}>
          <Event {...indi} />
        </Col>
      ))}

      {team.map((t, i) => (
        <Col sm="12" md="6" lg="6" key={i}>
          <Event {...t} />
        </Col>
      ))}
    </Row>
  );
};

export default Events;
