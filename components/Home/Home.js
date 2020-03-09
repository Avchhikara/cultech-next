import { Row, Col, Card, CardBody, Button, CardTitle } from "reactstrap";
import Router from "next/router";

import TCoord from "./TeacherCoordinators";
import SCoord from "./StudentCoordinators";
import Carousel from "./Carousel";

const Home = props => {
  return (
    <React.Fragment>
      <Row>
        <Col sm={10} className="m-auto">
          <h1 className="display-4 text-center">CulTech 2020</h1>
          <div className="lead text-center">
            Cultural and Technical Festival of ECE Department
          </div>
        </Col>
      </Row>
      <hr />
      <Row className="text-center mb-4">
        <h4 className="m-auto">Teacher Coordinators</h4>
      </Row>
      <TCoord />
      <hr />
      <Row className="mb-4">
        <h4 className="m-auto">Student Coordinators</h4>
      </Row>
      <SCoord />
      <Row className="mt-4">
        <Col sm={10} className="m-auto mt-3 ">
          <Card color="light">
            <CardBody>
              <CardTitle>Want to enroll in events?</CardTitle>
              <Button
                color="success"
                size="sm"
                outline
                onClick={() => {
                  Router.push("/events");
                }}
              >
                Click here
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default Home;
