import React from 'react';
import { Card, Row, Button, Container, Col, Image } from "react-bootstrap"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../Store/cartSlice';
import sampleFish from "../../Images/products/yellowfrin-tuna-fish/image-1.png";

const YellowfrinTunaFish = (props) => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const initialData = [
    {
      id: 1,
      title: "Cut & Cleaned Fish",
      price: 60,
      imgURL: sampleFish,
      alt: "Samplefish",
    },
    {
      id: 2,
      title: "Cleaned Fish",
      price: 30,
      imgURL: sampleFish,
      alt: "Samplefish",
    },
    {
      id: 3,
      title: "Cleaned Fish",
      price: 30,
      imgURL: sampleFish,
      alt: "Samplefish",
    },
    {
      id: 4,
      title: "Cleaned Fish",
      price: 30,
      imgURL: sampleFish,
      alt: "Samplefish",
    },
  ];

  const handleAddItem = (item, id) => {
    dispatch(addToCart(item))
    history("/cart");
  } 

  return (
    <div className="">
      <div id="sample1" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={4}>
              <div className="text-center">
                <Image
                  src={sampleFish}
                  alt="Sample Fish"
                  className="img-fluid rounded shadow"
                />
              </div>
            </Col>
            <Col md={8}>
              <div className="">
                <h2 className="pt-2 pb-2">Yellowfrin Tuna Fish</h2>
                <p className="">
                  <del className="">₹399 /500g</del> ₹275 /500g
                </p>
                <p>
                  is one of the best kinds of seafood to incorporate in your
                  diet because it has benefits to keep your body strong and
                  healthy.
                </p>
                <p>
                  High in Protein. Our bodies need protein to build and heal
                  muscles, bones, hair, skin, and blood.Keeps our Heart Healthy
                  – A Great Source of Copper – High in Vitamin B2.
                </p>
              </div>

              <div className="pt-3">
                {/* <SampleTabs /> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="sample3" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            {initialData.map((item) => (
              <Col md={3} key={item.id} className="align-self-center">
                <Card className="m-1 text-center shadow link">
                  <Card.Img
                    variant="top"
                    src={item.imgURL}
                    alt={item.alt}
                    className="img-fluid text-center"
                    style={{height:'200px', width:'300px'}}
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

export default YellowfrinTunaFish;
