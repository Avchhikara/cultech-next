import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
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

import { validatePassword } from "./../../utils/validate";
import { base_url } from "./../../utils/constants";

const ForgetPassword = ({ token }) => {
  //   console.log(token);
  const handleSubmit = async e => {
    e.preventDefault();
    if (validatePassword(password)) {
      // Here it will make the request to backend
      setRequesting(true);
      try {
        const res = await fetch(base_url + "/reset-password", {
          method: "POST",
          body: JSON.stringify({
            password,
            token
          }),
          headers: {
            "content-type": "application/json"
          }
        });
        const data = await res.json();
        if (res.status !== 200)
          throw Error(
            data.message || "Unknwon error has occurred, please contact us!"
          );
        setResponse({
          message: data.message,
          status: 200
        });
      } catch (err) {
        setResponse({
          message: err.message,
          status: 400
        });
        resetResponse();
      }
      setRequesting(false);
    } else {
      setResponse({
        message: password + " is not a valid password",
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
  const [password, setPassword] = useState("");

  const { message, status } = response;

  return (
    <Row>
      <Col sm="8" md="9" lg="6" className="m-auto">
        <Card>
          <CardBody>
            <h4 className="text-center mb-3">
              <span className="text-success">Reset</span> Password
            </h4>
            {message && (
              <Alert color={status === 200 ? "success" : "danger"}>
                {message}
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <FormGroup row>
                <Label for="password" sm={3}>
                  New Password
                </Label>
                <Col sm={9}>
                  <Input
                    type="password"
                    id="password"
                    required
                    onChange={e => setPassword(e.target.value)}
                    autoFocus
                  />
                </Col>
              </FormGroup>

              <Col sm={12} className="text-center mt-3">
                <Button color="success" disabled={requesting}>
                  {requesting ? "Resetting..." : "Reset Password"}
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
