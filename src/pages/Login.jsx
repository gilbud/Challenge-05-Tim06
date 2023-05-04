import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import NavbarNoSearch from "../components/NavbarNoSearch";

function Login() {
  return (
    <>
      <NavbarNoSearch />
      <Container className="p-5 mt-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-light">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-light">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="warning" type="submit">
          Login
        </Button>
      </Container>
    </>
  );
}

export default Login;
