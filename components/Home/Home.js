import { Row, Col, Card, CardBody, Button, CardTitle } from "reactstrap";
import Router from "next/router";

import Rules from "./Rules";
import CarouselComp from "./Carousel";
// import Details from "./Details";
import About from "./About";
import Sponsors from "./Sponsors";

const Home = props => {
  return (
    <div className="homepage">
      <section className="homepage-top row">
        <Col md="6 mb-4">
          <h1 className="display-4 text-success text-center">CulTech 2020</h1>
          <div className="lead text-center">
            Come and witness the ir-resist-able{" "}
            <em>
              organised by{" "}
              <img
                src="https://res.cloudinary.com/mrmagician/image/upload/v1583833007/intechlogo_wq6bve.jpg"
                alt="intec logo"
                className="img-fluid organised-by-img"
              />
            </em>
          </div>
          <div className="text-center">
            <Button
              color="success"
              size="lg"
              outline
              onClick={() => {
                Router.push("/events");
              }}
            >
              Enroll here
            </Button>
          </div>
        </Col>
        <Col md="6">
          <CarouselComp />
        </Col>
      </section>
      <About />
      <Sponsors />
      <Row className="mt-4" id="more">
        <Col sm={10} className="m-auto">
          <h4 className="text-success">Rules common to all</h4>
          <Rules />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col sm={10} className="m-auto mt-3 "></Col>
      </Row>
    </div>
  );
};
export default Home;
