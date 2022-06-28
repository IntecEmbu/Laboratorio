import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Modal from '../../Components/Modal'

function Index(props) {
  return (
    <div>
      <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">Intec</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Biblioteca</Nav.Link>
            <Nav.Link href="#">Laboratorio</Nav.Link>
            <Modal />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Index;