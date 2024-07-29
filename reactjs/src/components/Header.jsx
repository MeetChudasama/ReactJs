import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Là Eventoo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link><Link to= '/'>Home</Link></Nav.Link>  */} {/* this is the second way to open the page which we given to route and if we give only Link tag in boostraps class then it gonna change the style so we write it into the Nav.Link tag*/}
            <Nav.Link href="/about">About</Nav.Link>{/* in href /about is which we have given path to the route so when we click about then about page is gonna open and it applies on all the page */}
            <Nav.Link href="/products">Products</Nav.Link> {/* if we want this to work as link then we also use this 'as={Link} so there is no changes in the apearence.' */}
            <Nav.Link href="/employee">Employee</Nav.Link>
            <NavDropdown title="Form" id="basic-nav-dropdown">
              <NavDropdown.Item href="/form">RegularForm</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/useform">useForm</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default Header
