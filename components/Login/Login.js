import React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";

import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert
} from "reactstrap";

import { validateEmail } from "./../../utils/validate";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      response: {
        status: 0,
        message: ""
      },
      logging_in: false
    };
  }

  handleSubmit = e => {
    //   First, disabling the logging button
    this.setState({ logging_in: true });

    const { email, password } = this.state;
    if (!validateEmail(email)) {
      this.setState({
        response: {
          message: "Email you have entered is not valid",
          status: 404
        }
      });
      this.resetResponse();
    } else if (!password) {
      this.setState({
        response: {
          message: "Please enter a password",
          status: 404
        }
      });
      this.resetResponse();
    } else {
      //   Making a fetch request here
    }

    // And then doing other stuff
    this.setState({ logging_in: false });
    e.preventDefault();
  };

  onEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  resetResponse = () => {
    var self = this;
    setTimeout(() => self.setState({ response: {} }), 5000);
  };

  render() {
    const { logging_in } = this.state;
    const { message, status } = this.state.response;
    return (
      <Row>
        <Col sm="8" md="9" lg="6" className="m-auto">
          <Card>
            <CardBody>
              <h4 className="text-center mb-3">
                <span className="text-success">Login</span> Form
              </h4>
              {message && (
                <Alert color={status === 200 ? "success" : "danger"}>
                  {message}
                </Alert>
              )}
              <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                  <Label for="email" sm={3}>
                    Email
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="email"
                      id="email"
                      required
                      onChange={this.onEmailChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="password" sm={3}>
                    Password
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="password"
                      id="password"
                      required
                      onChange={this.onPasswordChange}
                    />
                  </Col>
                </FormGroup>
                <Col sm={12} className="text-center mt-3">
                  <Button color="success" disabled={logging_in}>
                    {logging_in ? "Logging.." : "Login"}
                  </Button>
                </Col>
              </Form>
              <div className="text-right mt-4">
                New user?{" "}
                <Link href="/register">
                  <a>Register yourself</a>
                </Link>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Login;
