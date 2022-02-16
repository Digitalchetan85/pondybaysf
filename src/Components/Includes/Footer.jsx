import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterLogo from "../../Images/footer-logo.png";

const Footer = () => {
  return (
    <div>
      <div id="footer" className="pt-2 pb-2 pt-md-2 pb-md-2 bg-dark text-light">
        <Container>
          <Row>
            <Col md={3} className="align-self-center">
              <div className="text-center">
                <Image src={FooterLogo} alt="" className="img-fluid" />
                <address>
                  <p>
                    No.6, 2nd cross, (Next to Sangeetha Mobiles), Horamavu Main
                    Road, Bangalore - 560043
                  </p>
                </address>
              </div>
            </Col>
            <Col md={3}>
              <div className="">
                <h2 className="pt-2 pb-2 text-center">Quick Links</h2>
                <ul className="">
                  <li className="">
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>

                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3}>
              <h2 className="pt-2 pt-2 ">Home Delivery</h2>
              <a href="tel:09677773964">
              <i className="fa fa-phone mx-2 text-primary"></i>
                    </a>
                    <a href="tel:09677773964">
                    <i className="fab fa-whatsapp mx-2 text-primary"></i>
                    </a>
              
              <i className="fas fa-moped mx-2"></i>
            </Col>
            <Col md={3}>
              <h2 className="pt-2 pb-2 text-center text-md-start">
                Websites
              </h2>
              < a href="info@pondybaysf.com">
              <i className="fas fa-envelope mx-2"></i>
                 </a>
                 < a href="info@pondybaysf.com">
                 <i className="fa fa-globe mx-2"></i>
                 </a>
                 <h6>www.pondybaysf.com</h6>
                 <h6>info@pondybaysf.com</h6>
            </Col>
          </Row>
          <div className="border-top border-light">
            <Row>
              <Col md={12}>
                <p className="text-center text-light m-0 pt-2 pb-1">
                  Copy Rights reserved by Pondy Bay. Developed by{" "}
                  <a
                    href="https://shanthaswebz.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Shanthas Webz.
                  </a>
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
