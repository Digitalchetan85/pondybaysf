import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const state = {
  isLoggedin: false,
};

let response;

export default function Login () {
  const [formStatus, setformStatus] = useState("");

  // const [login, ]

  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get("/login").then((response) => {
      console.log("get",response)
    })
  })

  const onSubmit = (values) => {
    const data = values;
    // console.log(data

    axios.post("/login", data).then((Response) => {
      response = Response.data.result;
      console.log("post",response);
      console.log("post",Response)
      if(Response.data.auth) {
        localStorage.setItem("token", Response.data.token)
        sessionStorage.setItem("token", Response.data.token)
        // navigate("/pondybay")
        axios.get("/userauth", {
          headers:{
              "x-access-token": localStorage.getItem("token")
          }}).then((response) => {
            console.log("auth",response)
            state.isLoggedin = true
          })
      }
    })
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required").email("Invalid email format"),
    password: Yup.string().required("Required"),
  });

  return (
    <div className="py-3 py-md-5">
      <Container>
        <Row className="justify-content-center g-3">
          <Col md={6}>
            <div className="bg-primary rounded shadow p-3">
              <h2 className="py-2 text-center text-white">Login</h2>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form>
                  <Row className="mb-3">
                    <Col md={12}>
                      <div className="mb-3">
                        <label
                          htmlFor="email"
                          className="form-label text-white"
                        >
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
                        <label
                          htmlFor="channel"
                          className="form-label text-white"
                        >
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
                        <Button
                          className="btn btn-warning text-white"
                          type="submit"
                        >
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

// export default Login;

export { state, response };
