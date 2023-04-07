import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import {FcGoogle} from "react-icons/fc"
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import {auth} from "./Firebase"
import { Row, Col, Alert, Form, label, Dropdown, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios" 
import { Rest } from "../rest"


const Login = () => {

    //signin with google
    const googleProvider = new GoogleAuthProvider
    const GoogleLogin = async()=>{
        try{
            const result = await signInWithPopup(auth,googleProvider)
            console.log(result.user)
        }
        catch(error){
           console.log(error)      
        }
    }
    let initialValues = {
      email: "",
      password: "",
    }
    const LoginSchema = Yup.object().shape({
      email: Yup.string()
        .required("This field is required")
        .email("Please Enter Valid Email"),
      password: Yup.string().required("This field is required"),
  
    });
    const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: LoginSchema,
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
   
        email: values.email,
        password: values.password,

      };
 
      axios
        .post(`${Rest}/api/user/login`, body)
        .then((res) => {
          console.log(res,"rrrrrrrrr")
          const token = res.data.token;
      if (res.data.message == "login success") {
        // const user = jwtDecode(token);

        localStorage.setItem("JwtToken", token);
        navigate("/");
      }
          

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
              <h3 className="text-center mb-3">Login</h3>
              <Form className="formStyle mt-4 pt-2">
                

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
                <Link style={{color:"#1e6fe8"}} to="/forgot-password">Forgot Password?</Link>
                <div >
                
                        <button onClick={GoogleLogin} className="google-login ">
                            <FcGoogle/> Signin with google
                        </button>
                    </div>

                <div className=" d-flex justify-content-center  ">
                  <button
                    onClick={handleSubmit}
                    className="btn btn-primary  mt-3 ml-3 "
                    type="submit"
                  >
                    Login
                  </button>
                  
                </div>
                <Link style={{color:"#1e6fe8"}} to="/signup"> Don't have account? Signup</Link>
              </Form>

              
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;