import React, { useEffect, useState } from 'react';
import { Card, Row, Button, Container, Col, Form } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../Store/cartSlice';
// import { cartActions } from '../../Store/cart-slice';
import { getAllProducts } from '../../Store/Products/ProductSlice';

const AyalaFish = (props) => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const initialData = [
    {
      id: 1,
      title: "Cut & Cleaned Fish",
      price: 60,
      // imgURL: sampleFish,
      alt: "Samplefish",
    },
    {
      id: 2,
      title: "Cleaned Fish",
      price: 30,
      // imgURL: sampleFish,
      alt: "Samplefish",
    },
    {
      id: 3,
      title: "Cleaned Fish",
      price: 30,
      // imgURL: sampleFish,
      alt: "Samplefish",
    },
    {
      id: 4,
      title: "Cleaned Fish",
      price: 30,
      // imgURL: sampleFish,
      alt: "Samplefish",
    },
  ];
  const [FishData, setFishData] = useState(initialData);

  const handleAddItem = (item, id) => {
    dispatch(addToCart(item))
    history("/cart");
  } 

  return (
    <div className="">
      <div id="sample3" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            {FishData.map((item) => (
              <Col md={3} key={item.id}>
                <Card className="m-1 text-center shadow link">
                  <Card.Img
                    variant="top"
                    src={item.imgURL}
                    alt={item.alt}
                    className="img-fluid"
                  />
                  <Card.Body>
                    <Card.Title className="pt-2 pb-2">{item.title}</Card.Title>
                    <div className="d-flex justify-content-center pb-3">
                      <div>
                        <Card.Text className="">
                          ₹ Price: {item.price}
                        </Card.Text>
                      </div>
                    </div>
                      <Button
                        variant="primary"
                        className="text-white"
                        onClick={() => handleAddItem(item)}
                      >
                        Add to Cart
                      </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AyalaFish;
