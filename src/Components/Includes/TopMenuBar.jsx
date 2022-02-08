import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Image, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Images/logo.png";
import { useSelector } from "react-redux";
import axios from "axios";
import { state } from "../RegisterLogin/Login";

const TopMenuBar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <>
      <div id="top-header" className="bg-primary text-white p-1">
        <Container>
          <Row>
            <Col md={5} className="align-self-center">
              <div className="d-flex justify-content-center justify-content-md-start">
                <div className="text-md-start ">
                  <a
                    className="nav-link p-0 ps-2 pe-2"
                    href="mailto:pondybayseafood@gmail.com"
                  >
                    <i className="fas fa-envelope-open-text"></i>{" "}
                    pondybayseafood@gmail.com{" "}
                  </a>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <div className="text-center text-md-end">
                <a className="nav-link p-0 ps-2 pe-2" href="tel:09513636036">
                  <i className="fas fa-phone-volume"></i> +91 95136 36036
                </a>
              </div>
            </Col>

            {/* <Col md={6} className="align-self-center">
              <div className="d-flex justify-content-center justify-content-md-end">
                <div>
                  <Nav.Link className="p-0 ps-2 pe-2" as={Link} to="/">
                    My Account
                  </Nav.Link>
                </div>
                <div className="nav-link p-0 ps-2 pe-2">|</div>
                <div>
                  <Nav.Link className="p-0 ps-2 pe-2" as={Link} to="/">
                    All Products
                  </Nav.Link>
                </div>
                <div className="nav-link p-0 ps-2 pe-2">|</div>
                <div>
                  {state.isLoggedin ? (
                    <Nav.Link
                      className="p-0 ps-2 pe-2"
                    >
                      Logout
                    </Nav.Link>
                  ) : (
                    <Nav.Link className="p-0 ps-2 pe-2" as={Link} to="/login">
                      Login
                    </Nav.Link>
                  )}
                </div>
              </div>
            </Col> */}
          </Row>
        </Container>
      </div>
      <div className="sticky-top shadow" id="navbar">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="white"
          variant="light"
          id="navbar"
        >
          <Container>
            <Navbar.Brand>
              <Image src={Logo} className="img-fluid" alt="Logo" width="200" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto ms-auto">
                <Nav.Link as={Link} to="/pondybay">
                  HOME
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  ABOUT
                </Nav.Link>
                <Nav.Link as={Link} to="/products">
                  ALL PRODUCTS
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  CONTACT
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link eventKey={2} href="#memes">
                  SEARCH
                </Nav.Link>
                <Nav.Link className="position-relative" as={Link} to="/cart">
                  <i className="fas fa-shopping-cart text-primary"></i>
                  <span className="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-primary">
                    {cartTotalQuantity}
                  </span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default TopMenuBar;
