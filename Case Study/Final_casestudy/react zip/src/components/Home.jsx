import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";



const Home = () => {
  return (
  <div>
    <Navbar expand="lg" variant="light" bg="info">
        <Container>
        <Navbar.Brand href="#"><h1> FlipKart✨</h1></Navbar.Brand>
          <Navbar.Brand href="#">Category </Navbar.Brand>
          <Navbar.Brand href="#">Brand </Navbar.Brand>
          <Navbar.Brand href="#">Gender </Navbar.Brand>
          <Navbar.Brand href="#">Best sellers</Navbar.Brand>
          <Navbar.Brand href="#">Gift Card</Navbar.Brand>
          <Navbar.Brand href="#">Blog,Videos& More</Navbar.Brand>
          
          <Navbar.Brand href="/products"><button class="btn btn-warning">Products </button> </Navbar.Brand>
          <Navbar.Brand href="/cart"><button class="btn btn-dark">Cart🛒 </button> </Navbar.Brand>
      
          <Navbar.Brand href="/" class="btn btn-success"><h4> Logout</h4></Navbar.Brand>

        </Container>
      </Navbar>

      

<br/>

  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">

  <div class="carousel-indicators">

    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg" class="d-block w-100" alt="Slide3"/>
     
    </div>
    <div class="carousel-item">
      <img src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" class="d-block w-100" alt="Slide2"/>
    </div>
    <div class="carousel-item">
    <img src="https://m.media-amazon.com/images/I/71dbxIcDioL._SX3000_.jpg" class="d-block w-100" alt="Slide1"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>

  
  );
};

export default Home;

