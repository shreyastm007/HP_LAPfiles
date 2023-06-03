import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = () => {
  return (
    <>
      <div style={{ display: "block", width: 1500, padding: 30 }}>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://img6.hkrtcdn.com/14609/bnr_1460845_o.png"
              alt="Subscribe"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://img7.hkrtcdn.com/21460/bnr_2145916_o.jpg"
              alt="Vitamin Range"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://img5.hkrtcdn.com/21102/bnr_2110134_o.jpg"
              alt="Pro Check"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://img3.hkrtcdn.com/21464/bnr_2146322_o.jpg"
              alt="MuscleBlaze"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselComponent;
