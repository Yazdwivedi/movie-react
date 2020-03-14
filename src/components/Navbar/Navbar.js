import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const navbar = ( props ) => {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Crypton</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Movies</Nav.Link>
          <Nav.Link href="#features">Events</Nav.Link>
          <Nav.Link href="#pricing">Sports</Nav.Link>
        </Nav>
      </Navbar> 
    )
}

export default navbar;