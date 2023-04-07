import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";

import { Row, Col, Alert, Form, label, Dropdown, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios"
import { Rest } from "../rest"
const Signup = () => {

  let initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  }
  const SignUpSchema = Yup.object().shape({
    firstname: Yup.string().required("This field is required"),
    lastname: Yup.string().required("This field is required"),
    email: Yup.string()
      .required("This field is required")
      .email("Please Enter Valid Email"),
    password: Yup.string().required("This field is required"),

  });
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignUpSchema,
      onSubmit: (values) => {
        console.log(values)
        signUpHandler(values);
      },
    });
  const navigate = useNavigate();
  const signUpHandler = async (values) => {
    console.log(values);
    try {
      const body = {
        role: "user",
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        password: values.password,

      };
 
      axios
        .post(`${Rest}/api/user/register`, body)
        .then((res) => {
          console.log(res);

          alert(res.data.message);
          navigate("/login");

        })
        .catch((error) => {
          alert(error.response.data.Message);
        });
    } catch (error) {
      console.log(error)
    }
  };



  return (
    <>

      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <Form className="formStyle mt-4 pt-2">
                <div className="mb-4">
                  <label for="firstNameFld" class="form-label">
                    First Name*
                  </label>
                  <input
                    value={values.firstname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="firstname"
                    type="text"
                    class="form-control"
                    placeholder="First Name"
                  />
                  {errors.firstname && touched.firstname ? (
                    <p className="text-danger">{errors.firstname}</p>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label for="firstNameFld" class="form-label">
                    Last Name*
                  </label>
                  <input
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="lastname"
                    type="text"
                    class="form-control"
                    placeholder="Last Name"
                  />
                  {errors.lastname && touched.lastname ? (
                    <p className="text-danger">{errors.lastname}</p>
                  ) : null}
                </div>

                <div className="mb-4">
                  <label for="firstNameFld" class="form-label">
                    Email*
                  </label>
                  <input
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    type="email"
                    class="form-control"
                    placeholder="Email"
                  />
                  {errors.email && touched.email ? (
                    <p className="text-danger">{errors.email}</p>
                  ) : null}
                </div>


                <div className="mb-4">
                  <label for="firstNameFld" class="form-label">
                    Password*
                  </label>
                  <input
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                  />
                  {errors.password && touched.password ? (
                    <p className="text-danger">{errors.password}</p>
                  ) : null}
                </div>


                <div className="mb-3">
                  <button
                    onClick={handleSubmit}
                    className="btn btn-primary w-100 waves-effect waves-light"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
