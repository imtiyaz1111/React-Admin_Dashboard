import React, { useContext, useEffect, useState } from "react";
import Logo from "../../assests/images/dashboard-admin.png";
import Google from "../../assests/images/google.png";
import { IoBagRemove } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Button from "@mui/material/Button";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { MyContext } from "../../App";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
    const context = useContext(MyContext);
  
    useEffect(() => {
      context.setIsHideSidebarAndHeader(true);
    }, []);
  
    const focusInput = (index) => {
      setInputIndex(index);
    };
  
  return (
    <>
    <img
      src="https://dashboard-ecommerce-react.netlify.app/static/media/pattern.df9a7a28fc13484d1013.webp"
      alt="loginPatern"
      className="loginPatern"
    />
    <div className="loginSection">
      <div className="loginBox">
        <div className="logo text-center">
          <img src={Logo} alt="logo" width="60px" />
          <h5 className="font-weight-bold">Register a new account</h5>
        </div>
        <div className="wrapper mt-3 card border ">
          <form action="">
          <div
              className={`form-group  position-relative ${
                inputIndex === 0 && "focus"
              }`}
            >
              <span className="icon">
              <IoPersonCircleSharp />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="enter your name"
                onFocus={() => focusInput(0)}
                onBlur={() => setInputIndex(null)}
              />
            </div>
            <div
              className={`form-group  position-relative ${
                inputIndex === 1 && "focus"
              }`}
            >
              <span className="icon">
                <MdEmail />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="enter your email"
                onFocus={() => focusInput(1)}
                onBlur={() => setInputIndex(null)}
              />
            </div>
            <div
              className={`form-group position-relative ${
                inputIndex === 2 && "focus"
              }`}
            >
              <span className="icon">
                <IoBagRemove />
              </span>
              <input
                type={`${isShowPassword === true ? "text" : "password"}`}
                className="form-control"
                placeholder="enter your password"
                onFocus={() => focusInput(2)}
                onBlur={() => setInputIndex(null)}
              />
              <span
                className="toggleShowPassword"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword === true ? <IoMdEyeOff /> : <IoMdEye />}
              </span>
            </div>
            <div
              className={`form-group position-relative ${
                inputIndex === 3 && "focus"
              }`}
            >
              <span className="icon">
              <IoShieldCheckmarkSharp />
              </span>
              <input
                type={`${isShowConfirmPassword === true ? "text" : "password"}`}
                className="form-control"
                placeholder="confirm your password"
                onFocus={() => focusInput(3)}
                onBlur={() => setInputIndex(null)}
              />
              <span
                className="toggleShowPassword"
                onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              >
                {isShowConfirmPassword === true ? <IoMdEyeOff /> : <IoMdEye />}
              </span>
            </div>
            <FormControlLabel control={<Checkbox />} label="I agree to the all Terms & Condiotions
" />
            <div className="form-group">
              <Button className="btn-blue btn-lg w-100 btn-big">
                Sign Up
              </Button>
            </div>
            <div className="form-group text-center mb-0">
              
              <div className="d-flex align-items-center justify-content-center or mt-3">
                <span className="line"></span>
                <span className="txt">or</span>
                <span className="line"></span>
              </div>
              <Button
                variant="outlined"
                className="w-100 btn-lg btn-big loginWithGoogle"
              >
                {" "}
                <img src={Google} alt="" width={"25px"} /> &nbsp; Sign In with
                Google
              </Button>
            </div>
          </form>
        </div>
        <div className="wrapper  mt-3 card border footer p-3">
          <span className="text-center">
            Don't have an account?{" "}
            <Link to="/login" className="link color ml-2">
              SignIn
            </Link>
          </span>
        </div>
      </div>
    </div>
  </>
  )
}

export default SignUp
