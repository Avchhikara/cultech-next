import React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";

import { Card, CardBody, Row, Col, Button, Alert } from "reactstrap";

import Form1 from "./Form1";
import Form2 from "./Form2";

import { base_url } from "./../../utils/constants";

import {
  validateEmail,
  validatePassword,
  validateRoll,
  validatePhone,
  validateBranch,
  validateYear
} from "./../../utils/validate";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      phone: "",
      branch: "",
      year: "",
      rollno: "",
      response: {
        status: 0,
        message: ""
      },
      registering: false,
      formNum: 1
    };
  }

  handleSubmit = async e => {
    this.setState({ registering: true });
    if (this.validateForm1() && this.validateForm2()) {
      const { name, email, password, rollno, phone, year, branch } = this.state;
      try {
        const res = await fetch(base_url + "/register", {
          method: "POST",
          body: JSON.stringify({
            name,
            email,
            password,
            rollno,
            phone,
            year,
            branch
          }),
          headers: {
            "content-type": "application/json"
          }
        });
        const data = await res.json();

        if (res.status === 200) this.setSuccess(data.message);
        else {
          this.setError(data.message);
        }
      } catch (err) {
        this.setError(err.message || "You seems to be offline");
      }
    }

    this.setState({ registering: false });
  };

  setSuccess = message => {
    this.setState({
      response: {
        message,
        status: 200
      }
    });
  };

  changeForm = (formNum = 2) => {
    if (formNum === 2 && this.validateForm1()) {
      this.setState({ formNum });
    } else if (this.state.formNum === 2) {
      this.setState({ formNum: 1 });
    }
  };

  validateForm1 = () => {
    const { email, password, name, rollno } = this.state;
    if (!(name && name.length > 3)) {
      this.setError("Name should be longer than 3 words");
    } else if (!validateRoll(rollno)) {
      this.setError("Roll number is invalid");
    } else if (!validateEmail(email)) {
      this.setError("Email you have entered is not valid");
    } else if (!(password && validatePassword(password))) {
      this.setError("Password should be of atleast 6 charachters");
    } else {
      return true;
    }
  };

  validateForm2 = () => {
    const { phone, branch, year } = this.state;
    if (!(phone && validatePhone(phone))) {
      this.setError("Phone number should be of 10 digits only");
    } else if (!(branch && validateBranch(branch))) {
      this.setError("Please select a branch");
    } else if (!(year && validateYear(year))) {
      this.setError("Please select a year");
    } else {
      return true;
    }
  };

  setError(message = "") {
    this.setState({
      response: {
        message,
        status: 404
      }
    });
    this.resetResponse();
  }

  onEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  onNameChange = e => {
    this.setState({ name: e.target.value });
  };

  onRollChange = e => {
    this.setState({ rollno: e.target.value });
  };

  onPhoneChange = e => {
    this.setState({ phone: e.target.value });
  };

  onBranchChange = e => {
    this.setState({ branch: e.target.value });
  };

  onYearChange = e => {
    this.setState({ year: e.target.value });
  };

  resetResponse = () => {
    var self = this;
    setTimeout(() => self.setState({ response: {} }), 5000);
  };

  render() {
    const {
      registering,
      formNum,
      name,
      email,
      rollno,
      phone,
      password
    } = this.state;
    const { message, status } = this.state.response;
    return (
      <Row>
        <Col sm="8" md="9" lg="6" className="m-auto">
          <Card>
            <CardBody>
              <h4 className="text-center mb-3">
                <span className="text-success">Register</span> Form
              </h4>
              {message && (
                <Alert color={status === 200 ? "success" : "danger"}>
                  {message}
                </Alert>
              )}

              {formNum === 1 ? (
                <Form1
                  onEmailChange={this.onEmailChange}
                  onPasswordChange={this.onPasswordChange}
                  onNameChange={this.onNameChange}
                  onRollChange={this.onRollChange}
                  name={name}
                  email={email}
                  rollno={rollno}
                  password={password}
                />
              ) : (
                <Form2
                  onBranchChange={this.onBranchChange}
                  onYearChange={this.onYearChange}
                  onPhoneChange={this.onPhoneChange}
                  phone={phone}
                />
              )}
              <Col sm={12} className="text-center mt-3">
                {formNum === 1 ? (
                  <Button color="success" onClick={() => this.changeForm(2)}>
                    Next {">"}
                  </Button>
                ) : (
                  <div className="text-center">
                    <Button
                      color="success"
                      onClick={() => this.changeForm(1)}
                      outline
                      disabled={registering}
                    >
                      {"<"} Back
                    </Button>
                    <Button
                      color="success"
                      disabled={registering}
                      onClick={this.handleSubmit}
                    >
                      {registering ? "Register..." : "Register"}
                    </Button>
                  </div>
                )}
              </Col>
              <div className="text-right mt-4">
                Already a user?{" "}
                <Link href="/login">
                  <a>Login here!</a>
                </Link>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Register;
