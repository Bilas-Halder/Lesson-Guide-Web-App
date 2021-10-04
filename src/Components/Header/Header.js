import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <Navbar className="custom-navbar-color" bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="header-btn" to={"/home"}>Home</NavLink>
                        <NavLink className="header-btn" to={"/courses"}>Courses</NavLink>
                        <NavLink className="header-btn" to={"/about"}>About Us</NavLink>
                        <NavLink className="header-btn" to={"/signin"}>Sign In</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;