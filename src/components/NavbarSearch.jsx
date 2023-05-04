import React from "react";
import { Container, Form, Button, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/StyleNavbar.css";

function Navbar1() {
  const navigate = useNavigate();

  const handleSearch = async (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value;
    navigate("/search", { state: { query } });
  };
  return (
    <Navbar bg="transparant navbar-expand-lg fixed-top p-2">
      <Container fluid>
        <div>
          <Navbar.Brand
            className="text-warning fs-2 Navbar-logo"
            as={Link}
            to={"/"}
          >
            Movielist
          </Navbar.Brand>
        </div>
        <div>
          <Form onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Search Film"
              name="query"
              className="Navbar-search"
            />
          </Form>
        </div>
        <div className="me-3">
          <Button
            variant="outline-warning"
            className="Navbar-button"
            as={Link}
            to={"/login"}
          >
            Login
          </Button>
          <Button
            variant="warning"
            className="Navbar-button"
            as={Link}
            to={"/register"}
          >
            Register
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
