import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarComponent = () => {
  return (
    <>
      
        <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#"><u>Category </u></Navbar.Brand>
          <Navbar.Brand href="#"><u>Brand </u></Navbar.Brand>
          <Navbar.Brand href="#"><u>Gender </u></Navbar.Brand>
          <Navbar.Brand href="#"><u>Goal </u></Navbar.Brand>
          <Navbar.Brand href="#"><u>Best sellers</u></Navbar.Brand>
          <Navbar.Brand href="#"><u>Details</u></Navbar.Brand>
          <Navbar.Brand href="#"><u>Gift Card</u></Navbar.Brand>
          <Navbar.Brand href="#"><u>Blog,Videos& More</u></Navbar.Brand>
        </Container>
      </Navbar>
      
    </>
  );
};

export default NavbarComponent;
