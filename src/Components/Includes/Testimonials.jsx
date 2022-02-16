import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap';
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import Image1 from "../images/slider/image-1.png";

const Testimonials = () => {
    const associations = [
        {
          id: 1,
          ImageUrl: Image1  ,
          alt: "",
        },
        // {
        //   id: 2,
        //   ImageUrl: Image2,
        //   alt: "",
        // },
        // {
        //   id: 3,
        //   ImageUrl: Image3,
        //   alt: "",
        // },
      ];
      const options = {
        rewind: true,
        dots: false,
        autoplay: true,
        responsive: {
          0: {
            items: 1,
            nav: true,
          },
          600: {
            items: 1,
            nav: false,
          },
          1000: {
            items: 2,
            nav: false,
            loop: false,
          },
        },
      };

  return (
    <div>
        <div id="testimonial-slider" className="pt-3 pb-3 pt-md-5 pb-md-5">
      <Container>
        <h2 className="pt-2 pb-2 text-center text-primary">Testimonials</h2>
        <OwlCarousel options={options}>
        {associations.map((item, index) => (
          <div className="mx-2" key={index}>
            <Row>
              <Col md={12}>
                <div className="text-center">
                  <Image
                    src={item.ImageUrl}
                    alt={item.alt}
                    className="img-fluid"
                  />
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </OwlCarousel>
      </Container>
    </div>
    </div>
  )
}

export default Testimonials