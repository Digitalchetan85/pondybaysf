import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAsyncProducts, getAllProducts } from "../../Store/Products/ProductSlice";

const AllProducts = () => {
  const products = useSelector(getAllProducts);
  // console.log(products)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, [dispatch]);

  return (
    <div id="fishdata" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
      <Container>
        <h2 className="pb-2 text-center text-primary">Best Selling Seafoods</h2>
        <Row className="g-3">
          {products.map((item) => (
            <Col md={3} key={item.id}>
              <Card
                className="m-1 text-center shadow link"
                as={Link}
                to={item.CardURL}
              >
                <Card.Img
                  variant="top"
                  src={item.imgURL}
                  alt={item.alt}
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title>{item.productTitle}</Card.Title>
                  <div className="d-flex justify-content-center">
                    <div>
                      <Card.Text className="text-decoration-line-through">
                        ₹ {item.price}
                      </Card.Text>
                    </div>
                    <div>
                      <Card.Text className="ps-3">₹ {item.price1}</Card.Text>
                    </div>
                  </div>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllProducts;
