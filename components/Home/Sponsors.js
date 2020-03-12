import React from "react";

import { Card, CardImg, Col, Row } from "reactstrap";

const spons = [
  "https://res.cloudinary.com/mrmagician/image/upload/v1583988980/1_y4nokx.png",
  "https://res.cloudinary.com/mrmagician/image/upload/v1583988980/3_wmbwak.png",
  "https://res.cloudinary.com/mrmagician/image/upload/v1583988980/2_pybnsx.png"
];

const Sponsors = () => {
  return (
    <section id="supporters" className="mt-4">
      <div className="container">
        <div className="section-header">
          <h2>Sponsors</h2>
        </div>
        <Row>
          {spons.map((sp, index) => (
            <Col md={4} key={index} className="mt-4">
              <Card>
                <CardImg src={sp} alt="" />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Sponsors;
