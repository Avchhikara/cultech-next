import { Card, CardTitle, Col, CardBody } from "reactstrap";

const TCoord = props => {
  return (
    <div className="row text-center m-auto">
      <Col sm={6} md={4} className="m-auto">
        <Card>
          <CardBody>
            <CardTitle>Dr. Prachi</CardTitle>
            Cultural Head
          </CardBody>
        </Card>
      </Col>
      <Col sm={6} md={4} className="m-auto">
        <Card>
          <CardBody>
            <CardTitle>Dr. Himanshi</CardTitle>
            Technical Head
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};
export default TCoord;
