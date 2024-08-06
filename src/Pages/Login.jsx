import React, { useState } from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import '../App.css'
import { Link } from 'react-router-dom';

const Login = () => {
  let [user, setUser] = useState({ email: "", password: "" });
  let [errors, setErrors] = useState({});
  let validation = (user) => {
    let formerr = {};
    let pattern =
      /^([a-zA-Z0-9_\!\@\#\$\%\^\&\*\-\.]+)\@([a-zA-Z_0-9]+)\.([a-zA-Z]{3})$/;
    if (user.email == "") {
      formerr.emailerr = "Email is required";
    } else if (!pattern.test(user.email)) {
      formerr.emailerr = "Invalid email";
    }
    if (user.password == "") {
      formerr.password = "Password is required";
    }
  return formerr
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    let myErrors = validation(user);
    if (Object.keys(myErrors).length == 0) {
      setErrors({});
      alert(JSON.stringify(user));
    } else setErrors(myErrors);
  };
  return (
    <Container className="shadow p-3 mt-5">
      <h1>Login</h1>
      <Row>
        <Col xs={6}>
          <Image src="/src/assets/Login.png" fluid />
        </Col>
        <Col xs={6}>
          <Form onSubmit={handleSubmit} className='l-form'>
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
            <Button variant="warning" type="submit">
              Login
            </Button>
          </Form>
          <p className="mt-3">
            Create new account? <Link to="/signup">Register</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Login
