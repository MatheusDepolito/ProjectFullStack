import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/"></Navbar.Brand>
        <Nav className="me-auto">
          <Link exact to="/home" className="nav-link">Home</Link>
          <Link to="/cadastrarEntregadores" className="nav-link">Comprar Vacina</Link>
          <Link to="/visualizarEntregadores" className="nav-link">Visualizar Vacinas Compradas</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
