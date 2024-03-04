import React, { useState } from "react";
import { logIn, signUp } from "../../actions/AuthActions.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Auth = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    country: "",
  };
  const loading = useSelector((state) => state.authReducer.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);

  const [data, setData] = useState(initialState);

  const [confirmPass, setConfirmPass] = useState(true);

  // Reset Form
  const resetForm = () => {
    setData(initialState);
    setConfirmPass(confirmPass);
  };

  // handle Change in input
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Form Submission
  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data, navigate))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data, navigate));
    }
  };

  return (
    <div className="h-screen flex bg-primary justify-center items-center sm:space-x-36 flex-wrap">
      <div className="p-2  rounded-xl flex justify-center items-center">
        <form onSubmit={handleSubmit} className="min-w-72">
          <h3 className="text-6xl bebas-neue-regular text-white mb-5">
            {isSignUp ? "Register" : "Login"}
          </h3>
          {isSignUp && (
            <div className="flex flex-col space-y-2">
              <input
                required
                type="text"
                placeholder="Name"
                name="name"
                value={data.name}
                className="py-1 px-2 rounded-md focus:outline-none bg-[#d5e3eb] placeholder:text-darkPrimary text-darkPrimary text-xl"
                onChange={handleChange}
              />

              <input
                required
                type="text"
                placeholder="Country"
                name="country"
                value={data.country}
                className="py-1 px-2 rounded-md focus:outline-none bg-[#d5e3eb] placeholder:text-darkPrimary text-darkPrimary text-xl"
                onChange={handleChange}
              />
            </div>
          )}

          <div className="flex flex-col space-y-2">
            <input
              className="mt-2 py-1 px-2 rounded-md focus:outline-none bg-[#d5e3eb] placeholder:text-darkPrimary text-darkPrimary text-xl"
              required
              type="text"
              placeholder="Email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
            <input
              required
              type="password"
              placeholder="Password"
              name="password"
              value={data.password}
              className="py-1 px-2 rounded-md focus:outline-none bg-[#d5e3eb] placeholder:text-darkPrimary text-darkPrimary text-xl"
              onChange={handleChange}
            />

            {isSignUp && (
              <input
                required
                type="password"
                name="confirmpass"
                placeholder="Confirm Password"
                className="py-1 px-2 rounded-md focus:outline-none bg-[#d5e3eb] placeholder:text-darkPrimary text-darkPrimary text-xl"
                onChange={handleChange}
              />
            )}
          </div>

          <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
          >
            *Confirm password is not same
          </span>
          <div className="flex flex-col space-y-">
            <span
              className="text-sm cursor-pointer underline text-white text-end mb-2 mt-1"
              onClick={() => {
                resetForm();
                setIsSignUp((prev) => !prev);
              }}
            >
              {isSignUp
                ? "Already have an account Log in"
                : "Don't have an account Sign up"}
            </span>
            <button
              className="p-2 bg-brandRed text-white rounded-md"
              type="Submit"
              disabled={loading}
            >
              {loading ? "Loading..." : isSignUp ? "Sign Up" : "Log In"}
            </button>
          </div>
        </form>
      </div>
      <div>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Auth;
