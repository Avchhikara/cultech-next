import { Card, Container, Row, Col, CardBody } from "reactstrap";

const prize = [
  {
    title: "1st Prize",
    subtitle: "300/- rs",
    desc: "certificate"
  },
  {
    title: "2nd Prize",
    subtitle: "200/- rs",
    desc: "certificate"
  },
  {
    title: "3rd Prize",
    subtitle: "100/- rs",
    desc: "certificate"
  }
];

const Prize = props => {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <h3 className="text-success mt-4">Prizes to be won</h3>
        </Col>

        {prize.map((p, i) => {
          return (
            <Col key={i} sm={2} className="m-auto">
              <Card className="text-center">
                <CardBody>
                  <h4>{p.title}</h4>
                  <h5>{p.subtitle}</h5>
                  <p> + {p.desc}</p>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Prize;
