import { Row, Col, Container } from "reactstrap";

const About = () => {
  return (
    <section id="about" className="mt-4">
      <Container fluid>
        <Row>
          <Col lg="6">
            <h2>About the Event</h2>
            <p>
              Cultech is the Cultural and Technical fest organised by INTEC
              society annually. INTEC is the official society representing ECE
              department in DCRUST Murthal.
            </p>
          </Col>
          <Col lg="3">
            <h3>Where</h3>
            <p>ECE Department</p>
          </Col>
          <Col lg="3">
            <h3>When</h3>
            <p>
              Thusrday and Friday <br />
              19-20 March, 2020
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
