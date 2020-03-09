import React from "react";

import { Jumbotron, Row, Col } from "reactstrap";

const Footer = props => {
  return (
    <div className="mt-4 footer">
      <Jumbotron className="text-center">
        <Row>
          <Col sm={6}>
            <h5>About us</h5>
            ECE Department, <br />
            DCRUST Murthal, <br />
            Sonipat, Haryana, <br />
            India
          </Col>
          <Col sm={6}>
            <h5>Quick Links</h5>
            <ul>
              <li>
                <a href="./../../public/cultech brouchre.pdf" download>
                  Brochure
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
