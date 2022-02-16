import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { Container, Form, Row, Col, Table } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const handleDeleteClick = (id) => {
    axios
      .delete("/products/" + id)
      .then((response) => {
        // console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
      
  };

  const [ProductInfo, SetProductInfo] = useState([]);

  useEffect(() => {
    (async () => {
      axios
      .get("/products")
      .then((response) => {
        SetProductInfo(response.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
    })();
  }, [ProductInfo]);

  return (
    <div>
      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              <h2 className="pt-3 pb-3 text-center text-primary">
                Product Informations
              </h2>
              <Formik
                initialValues={{
                  productTitle: "",
                  price: "",
                  price1: "",
                  description: "",
                  imgURL: "",
                  alt: "",
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.productTitle) {
                    errors.productTitle = "Required";
                  }
                  if (!values.price) {
                    errors.price = "Required";
                  }
                  if (!values.price1) {
                    errors.price1 = "Required";
                  }
                  if (!values.description) {
                    errors.description = "Required";
                  }
                  if (!values.imgURL) {
                    errors.imgURL = "Required";
                  }
                  if (!values.alt) {
                    errors.alt = "Required";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    // alert(JSON.stringify(values, null, 2));
                    const data = values;
                    console.log(data);

                    axios
                      .patch("/products", data)
                      .then((response) => {
                        console.log(response);
                      })
                      .catch((error) => {
                        console.log(error);
                      });

                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          {/* <Form.Label>Product Title</Form.Label> */}
                          <Form.Label>Product Title</Form.Label>
                          <Form.Select
                            aria-label="Default select example"
                            name="productTitle"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.productTitle}
                          >
                            <option>Select the product title</option>
                            <option value="Ayala Fish">Ayala Fish</option>
                            <option value="Black Snapper">Black Snapper</option>
                            <option value="Black Pomfret">Black Pomfret</option>
                            <option value="Cobia">Cobia</option>
                            <option value="Grouper Fish">Grouper Fish</option>
                            <option value="Indian Salomon Fish">Indian Salomon Fish</option>
                            <option value="Lady Fish">Lady Fish</option>
                            <option value="Mahi Fish">MAhi Fish</option>
                            <option value="Pearl Spot Fish">Pearl Spot Fish</option>
                            <option value="Prawns">Prawns</option>
                            <option value="Red Snapper">Red Snapper</option>
                            <option value="Sardine Fish">Sardine Fish</option>
                            <option value="Shark Fish">Shark Fish</option>
                            <option value="Sole Fish">Sole Fish</option>
                            <option value="Squid Fish">Squid Fish</option>
                            <option value="Tuna Fish">Tuna Fish</option>
                            <option value="Vajaram">Vajaram</option>
                            <option value="White Pomfret">White Pomfret</option>
                            <option value="White Snapper">White Snapper</option>
                          </Form.Select>
                          {/* <Form.Control
                            type="text"
                            placeholder="Enter Name"
                            name="productTitle"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.productTitle}
                          /> */}
                          <Form.Text className="text-danger">
                            {errors.productTitle &&
                              touched.productTitle &&
                              errors.productTitle}
                          </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Price</Form.Label>
                          <Form.Control
                            placeholder="Enter Price"
                            type="tel"
                            name="price"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.price}
                          />
                          <Form.Text className="text-danger">
                            {errors.price && touched.price && errors.price}
                          </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Price1</Form.Label>
                          <Form.Control
                            placeholder="Enter Price"
                            type="tel"
                            name="price1"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.price1}
                          />
                          <Form.Text className="text-danger">
                            {errors.price1 && touched.price1 && errors.price1}
                          </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Image URL</Form.Label>
                          <Form.Control
                            placeholder="http://webmillionservices.com/pondybay/Api/images/"
                            type="text"
                            name="imgURL"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.imgURL}
                          />
                          <Form.Text className="text-danger">
                            {errors.imgURL && touched.imgURL && errors.imgURL}
                          </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Alt Text</Form.Label>
                          <Form.Control
                            placeholder="Alt Text"
                            type="text"
                            name="alt"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.alt}
                          />
                          <Form.Text className="text-danger">
                            {errors.alt && touched.alt && errors.alt}
                          </Form.Text>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Product Description</Form.Label>
                          <Form.Control
                            placeholder="Enter Description"
                            as="textarea"
                            rows={15}
                            name="description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                          />
                          <Form.Text className="text-danger">
                            {errors.description &&
                              touched.description &&
                              errors.description}
                          </Form.Text>
                        </Form.Group>
                      </Col>
                    </Row>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Table responsive bordered>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Title</th>
                <th>Price</th>
                <th>Price1</th>
                <th>Description</th>
                <th>ImageUrl</th>
                <th>Alt Text</th>
                <th>Card Url</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {ProductInfo.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.productTitle}</td>
                  <td>{item.price}</td>
                  <td>{item.price1}</td>
                  <td>{item.description}</td>
                  <td>{item.imgURL}</td>
                  <td>{item.alt}</td>
                  <td>{item.CardURL}</td>
                  <td>
                    <div className="">
                      <Link
                        className="text-dark"
                        to={`/product/edit/${item.id}`}
                      >
                        <i className="fas fa-edit ps-2"></i>
                      </Link>
                      <Link
                        className="text-danger"
                        to=""
                        onClick={() => {
                          const confirmBox = window.confirm(
                            "Are you sure you want to delete this product?"
                          );
                          if (confirmBox === true) {
                            handleDeleteClick(item.id);
                          }
                        }}
                      >
                        <i className="far fa-trash-alt ps-2"></i>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
