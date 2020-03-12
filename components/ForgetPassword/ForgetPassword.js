import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Alert
} from "reactstrap";

import { validateEmail } from "./../../utils/validate";

const ForgetPassword = props => {
  const handleSubmit = e => {
    e.preventDefault();
    if (validateEmail(email)) {
      // Here it will make the request to backend
    } else {
      setResponse({
        message: email + " is not a valid email id",
        status: 400
      });
      resetResponse();
    }
  };

  const resetResponse = (time = 3000) => {
    setTimeout(() => {
      setResponse({});
    }, time);
  };

  const [response, setResponse] = useState({
    message: "",
    status: 0
  });

  const [requesting, setRequesting] = useState(false);
  const [email, setEmail] = useState("");

  const { message, status } = response;

  return (
    <Row>
      <Col sm="8" md="9" lg="6" className="m-auto">
        <Card>
          <CardBody>
            <h4 className="text-center mb-3">
              <span className="text-success">Forget</span> Password
            </h4>
            {message && (
              <Alert color={status === 200 ? "success" : "danger"}>
                {message}
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <FormGroup row>
                <Label for="email" sm={3}>
                  Email
                </Label>
                <Col sm={9}>
                  <Input
                    type="email"
                    id="email"
                    required
                    onChange={e => setEmail(e.target.value)}
                    autoFocus
                  />
                </Col>
              </FormGroup>

              <Col sm={12} className="text-center mt-3">
                <Button color="success" disabled={requesting}>
                  {requesting ? "Requesting..." : "Request Reset Link"}
                </Button>
              </Col>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ForgetPassword;
