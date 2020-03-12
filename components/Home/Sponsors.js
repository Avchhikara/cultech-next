import React from "react";

import { Card, CardImg, Col, Row } from "reactstrap";

const spons = [
  "https://res.cloudinary.com/mrmagician/image/upload/v1584022820/food_card_t0lhzv.jpg"
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
            <Col md={4} key={index} className="m-auto mt-4">
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
