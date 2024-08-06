import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BsFillHouseFill } from 'react-icons/bs';
import { FaPenToSquare } from 'react-icons/fa6';
import { GrLogin } from 'react-icons/gr';
import { MdOutlineFilterList } from 'react-icons/md';
import { Link } from 'react-router-dom';
// import white from '../../src/assets/Bargain/white.png'

const Header = () => {
  // console.log(white);
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          {/* <img src={white} alt="" height={100} width={100} /> */}
          Bargain
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            <BsFillHouseFill /> Home
          </Nav.Link>
          <Nav.Link href="/products">
            <MdOutlineFilterList />
            Products
          </Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link as={Link} to="signup">
            {" "}
            <FaPenToSquare /> SignUp
          </Nav.Link>
          <Nav.Link as={Link} to="login">
            {" "}
            <GrLogin /> Login{" "}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header
