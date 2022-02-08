import React, { useState } from "react";
import * as Yup from "yup";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const Register = () => {
  const [formStatus, setformStatus] = useState("");

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };

  const onSubmit = (values) => {
    const data = values;
    // console.log(data);

    axios.post("/register", data)
      .then ((response) => {
          console.log(response.data);
      })
      .catch ((err) => {
          console.log(err);
      })
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("required").email("Invalid email format"),
    phone: Yup.string()
      .required("required")
      .matches(phoneRegExp, "Phone No is not valid")
      .min(10, "Phone No Minimum 10 Digits")
      .max(10, "Phone No Minimum 10 Digits"),
  });

  return (
    <div className="py-3 py-md-5">
      <Container>
        <Row className="justify-content-center g-3">
          <Col md={6}>
            <div className="bg-primary rounded shadow p-3">
              <h2 className="py-2 text-center text-white">Register</h2>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form>
                  <Row className="mb-3">
                    <Col md={12}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label text-white">
                          Name
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                        />
                        <small className="text-danger">
                          <ErrorMessage name="name" />
                        </small>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={12}>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label text-white">
                          Email
                        </label>
                        <Field
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                        />
                        <small className="text-danger">
                          <ErrorMessage name="email" />
                        </small>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={12}>
                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label text-white">
                          Phone No
                        </label>
                        <Field
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                        />
                        <small className="text-danger">
                          <ErrorMessage name="phone" />
                        </small>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={12}>
                      <div className="mb-3">
                        <label htmlFor="channel" className="form-label text-white">
                          Password
                        </label>
                        <Field
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                        ></Field>
                        <small className="text-danger">
                          <ErrorMessage name="password" />
                        </small>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={12}>
                      {formStatus ? (
                        <div className="alert alert-success p-3 text-center">
                          {formStatus}
                        </div>
                      ) : null}
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={12}>
                      <div className="">
                        <Button className="btn btn-warning text-white" type="submit">
                          Checkout
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Formik>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
