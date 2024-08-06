import React, { useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  let initialState = {
    username: "",
    email: "",
    password: "",
    cpassword: "",
    role: "user",
  };
  let [user, setUser] = useState({ ...initialState });
  let [errors, setErrors] = useState({});
  let validation = (user) => {
    let formerr = {};
    let pattern =
      /^([a-zA-Z0-9_\!\@\#\$\%\^\&\*\-\.]+)\@([a-zA-Z_0-9]+)\.([a-zA-Z]{3})$/;
    if (user.username == "") {
      formerr.unameerr = "Username is required";
    }
    if (user.email == "") {
      formerr.emailerr = "Email is required";
    } else if (!pattern.test(user.email)) {
      formerr.emailerr = "Invalid email";
    }

    if (user.password == "") {
      formerr.password = "Password is required";
    } 

    if (user.cpassword == "") {
      formerr.cpassword = "Password is required";
    } else if (user.password !== user.cpassword) {
      formerr.cpassword = "Password does not match";
    }
    return formerr;
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    let myErrors = validation(user)
    if(Object.keys(myErrors).length == 0){
      setErrors({})
      alert(JSON.stringify(user));
    }
    else
      setErrors(myErrors)

  };

  return (
    <Container className="shadow p-3 mt-5">
      <h1>SignUp</h1>
      <Row>
        <Col xs={6}>
          <Image src="/src/assets/Register.jpg" fluid />
        </Col>
        <Col xs={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="col-10 mb-3 ">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              ></Form.Control>
              {errors.unameerr && (
                <span className="text-danger">{errors.unameerr}</span>
              )}
            </Form.Group>
            <Form.Group className="col-10 mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email"
                name="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              ></Form.Control>
              {errors.emailerr && (
                <span className="text-danger">{errors.emailerr}</span>
              )}
            </Form.Group>
            <Form.Group className="col-10 mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              ></Form.Control>
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </Form.Group>
            <Form.Group className="col-10 mb-3">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                name="cpassword"
                value={user.cpassword}
                onChange={(e) => setUser({ ...user, cpassword: e.target.value })}
              ></Form.Control>
              {errors.cpassword && (
                <span className="text-danger">{errors.cpassword}</span>
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              SignUp
            </Button>
          </Form>
          <p className="mt-3">Already an user? <Link to='/login' >Login</Link></p>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
