import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const AppNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" >
      <div className="container">
        <Navbar.Brand as={Link} to="/">My Favorite Videos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbarmodule-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/new-video">Create new video</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}
