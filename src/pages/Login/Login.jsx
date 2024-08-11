import React, { useContext, useEffect, useState } from "react";
import Logo from "../../assests/images/dashboard-admin.png";
import Google from "../../assests/images/google.png";
import { IoBagRemove } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Button from "@mui/material/Button";

import { MyContext } from "../../App";
import { Link } from "react-router-dom";

const Login = () => {
  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword, setIsShowPassword] = useState(false);
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
            <h5 className="font-weight-bold">Login to SiteName</h5>
          </div>
          <div className="wrapper mt-3 card border ">
            <form action="">
              <div
                className={`form-group  position-relative ${
                  inputIndex === 0 && "focus"
                }`}
              >
                <span className="icon">
                  <MdEmail />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter your email"
                  onFocus={() => focusInput(0)}
                  onBlur={() => setInputIndex(null)}
                />
              </div>
              <div
                className={`form-group position-relative ${
                  inputIndex === 1 && "focus"
                }`}
              >
                <span className="icon">
                  <IoBagRemove />
                </span>
                <input
                  type={`${isShowPassword === true ? "text" : "password"}`}
                  className="form-control"
                  placeholder="enter your password"
                  onFocus={() => focusInput(1)}
                  onBlur={() => setInputIndex(null)}
                />
                <span
                  className="toggleShowPassword"
                  onClick={() => setIsShowPassword(!isShowPassword)}
                >
                  {isShowPassword === true ? <IoMdEyeOff /> : <IoMdEye />}
                </span>
              </div>
              <div className="form-group">
                <Button className="btn-blue btn-lg w-100 btn-big">
                  Sign In
                </Button>
              </div>
              <div className="form-group text-center mb-0">
                <Link to="/forgot-password" className="link">
                  FORGOT PASSWORD
                </Link>
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
              <Link to="/signUp" className="link color ml-2">
                Register
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
