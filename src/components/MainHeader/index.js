import React from "react";
import { Button, Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MainHeader = () => {
 
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">ChompHub</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#browse">Browse</Nav.Link>
          <NavDropdown title="Community" id="basic-nav-dropdown">
            <NavDropdown.Item href="#forums">Forums</NavDropdown.Item>
            <NavDropdown.Item href="#chat">Chat</NavDropdown.Item>
            <NavDropdown.Item href="#journals">Journals</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#artwork">Artwork</Nav.Link>
          <Nav.Link href="#upload">Upload</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control type="text" placeholder="Search" className="mr-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav className="ms-auto">
          <Nav.Link href="#login">Login</Nav.Link>
          <Nav.Link href="#signup">Sign Up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default MainHeader;
