import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./login.css";
import * as Yup from "yup";
import * as ROUTES from "../../../constants/routes/routes";
import {
  loginUserAction,
  selectUser,
} from "../../../redux/slices/users/usersSlice";

//TODO => Form Schema
const formSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});
export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //formik
  const formik = useFormik({
    initialValues: {
      user_name: "",
      password: "",
    },
    onSubmit: (values) => {
      //dispatch the action
      dispatch(loginUserAction(values));
      console.log(values);
    },
    validationSchema: formSchema,
  });

  //todo: useNavigate
  const store = useSelector(selectUser);
  const { userAuth, loading, serverError, appError } = store;
  useEffect(() => {
    if (userAuth) {
      navigate("/");
    }
  }, [navigate, userAuth]);
  return (
    <div className="login ">
      <div className="container">
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form onSubmit={formik.handleSubmit} className="user">
                        <div className="form-group">
                          <input
                            type="email"
                            placeholder="Enter Email Address..."
                            value={formik.values.user_name}
                            onChange={formik.handleChange("user_name")}
                            onBlur={formik.handleBlur("user_name")}
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            placeholder="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange("password")}
                            onBlur={formik.handleBlur("password")}
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Login
                        </button>
                        <hr />
                        <a
                          href="index.html"
                          className="btn btn-google btn-user btn-block"
                        >
                          <i className="fab fa-google fa-fw" /> Login with
                          Google
                        </a>
                        <a
                          href="index.html"
                          className="btn btn-facebook btn-user btn-block"
                        >
                          <i className="fab fa-facebook-f fa-fw" /> Login with
                          Facebook
                        </a>
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">
                          Forgot Password?
                        </a>
                      </div>
                      <div className="text-center">
                        <Link to={ROUTES.REGISTER}> Create an Account!</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
