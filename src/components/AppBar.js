import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const AppBar = () => {
  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
          <Nav>
            <Nav.Link href="#home" className='fs-5 fw-bold'>Home</Nav.Link>
            <Nav.Link href="#About" className='fs-5 fw-bold'>About</Nav.Link>
            <Nav.Link href="#Resume" className='fs-5 fw-bold'>Resume</Nav.Link>
            <Nav.Link href="#portfolio" className='fs-5 fw-bold'>Portfolio</Nav.Link>
            <Nav.Link href="#contact" className='fs-5 fw-bold'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default AppBar