import React from "react";

import { Jumbotron, Row, Col } from "reactstrap";

const Footer = props => {
  return (
    <div className="mt-4 footer">
      <Jumbotron className="text-center">
        <Row>
          <Col sm={6} className="mt-3">
            <h5>About us</h5>
            ECE Department, <br />
            DCRUST Murthal, <br />
            Sonipat, Haryana, <br />
            India
          </Col>
          <Col sm={6} className="mt-3">
            <h5>Quick Links</h5>
            <ul>
              <li>
                <a
                  href="https://drive.google.com/file/d/1mITg1ifgbtuSSfnzvi_KULsBPDrgmFzY/view?usp=sharing"
                  target="_blank"
                >
                  Brochure
                </a>
              </li>
              <li>
                <a
                  href="http://www.dcrustm.ac.in/departments/engineering/electronics-and-communications-engineering"
                  target="_blank"
                >
                  ECE department
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        &copy; ECE Department | DCRUST Murtal - 2020
      </Jumbotron>
    </div>
  );
};

export default Footer;
