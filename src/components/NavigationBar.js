import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" fixed="top">
      <Navbar.Brand href="/">MyApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <NavDropdown title="Function" id="basic-nav-dropdown">
              <NavDropdown.Item href="/productform">
                Product Form
              </NavDropdown.Item>
              <NavDropdown.Item href="/productlist">
                Product Table
              </NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
          {/* <Nav.Item><Nav.Link href="/myform">MyForm</Nav.Link></Nav.Item> */}
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <NavDropdown title="Sign in/Register" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Sign In</NavDropdown.Item>
              <NavDropdown.Item href="#">Register</NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
