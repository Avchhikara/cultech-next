import React from "react";

import { Jumbotron, Row, Col } from "reactstrap";

const Footer = props => {
  return (
    <div className="mt-4 footer">
      <Jumbotron className="text-center">
        <Row>
          <Col sm={6} className="mt-3">
            <h5>Reach us at</h5>
            ECE Department, <br />
            DCRUST Murthal, <br />
            Sonipat, Haryana, <br />
            India
          </Col>
          <Col sm={6} className="mt-3 quicklinks">
            <h5>Quick Links</h5>

            <a
              href="https://drive.google.com/file/d/1NrdVW60RJmUh7b1HD4DMl26uMWH4Z9hL/view?usp=sharing"
              target="_blank"
            >
              Brochure
            </a>
            <br />

            <a
              href="http://www.dcrustm.ac.in/departments/engineering/electronics-and-communications-engineering"
              target="_blank"
            >
              ECE department
            </a>
          </Col>
        </Row>
        <hr />
        <div className="copy pb-3">
          &copy; ECE Department | DCRUST Murthal - 2020
        </div>
      </Jumbotron>
    </div>
  );
};

export default Footer;
