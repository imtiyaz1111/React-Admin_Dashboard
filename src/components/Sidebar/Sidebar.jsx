import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa";
import { IoCardOutline } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { MyContext } from "../../App";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);
  const context=useContext(MyContext)
  const isOpenSubmenu = (index) => {
    setActiveTab(index);
    setIsToggleSubmenu(!isToggleSubmenu);
  };
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <Button className="w-100">
              <span className="icon">
                <MdDashboard />
              </span>
              Dashboard{" "}
             
            </Button>
          </Link>
        </li>

        <li>
          <Button
            className={`w-100${activeTab === 0 ? "active" : ""}`}
            onClick={() => isOpenSubmenu(0)}
          >
            <span className="icon">
              <FaProductHunt />
            </span>
            Products{" "}
            <span className="arrow">
              <FaAngleRight />
            </span>
          </Button>
          <div
            className={`submenuWrapper ${
              activeTab === 0 && isToggleSubmenu === true
                ? "colapse"
                : "colapsed"
            }`}
          >
            <ul className="submenu">
              <li>
                {" "}
                <Link to="/product">Product List</Link>
              </li>
              <li>
                {" "}
                <Link to="/product/details">Product view</Link>
              </li>
              <li>
                {" "}
                <Link to="/product/upload">Product Upload</Link>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <Link to="/orders">
            <Button
              className={`w-100${activeTab === 2 ? "active" : ""}`}
              onClick={() => isOpenSubmenu(2)}
            >
              <span className="icon">
                <IoCardOutline />
              </span>
              Orders{" "}
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </Link>
        </li>

        <li>
          <Link to="/message">
            <Button
              className={`w-100${activeTab === 3 ? "active" : ""}`}
              onClick={() => isOpenSubmenu(3)}
            >
              <span className="icon">
                <MdMessage />
              </span>
              Messages{" "}
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </Link>
        </li>

        <li>
          <Link to="/notifications">
            <Button
              className={`w-100${activeTab === 4 ? "active" : ""}`}
              onClick={() => isOpenSubmenu(4)}
            >
              <span className="icon">
                <FaBell />
              </span>
              Notifications{" "}
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </Link>
        </li>

        <li>
          <Link to="/settings">
            <Button
              className={`w-100${activeTab === 5 ? "active" : ""}`}
              onClick={() => isOpenSubmenu(5)}
            >
              <span className="icon">
                <IoMdSettings />
              </span>
              Settings{" "}
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </Link>
        </li>

        <li>
          <Link to="/login">
            <Button
              className={`w-100${activeTab === 5 ? "active" : ""}`}
              onClick={() => isOpenSubmenu(5)}
            >
              <span className="icon">
              <IoPersonSharp/>
              </span>
              Login{" "}
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/signUp">
            <Button
              className={`w-100${activeTab === 5 ? "active" : ""}`}
              onClick={() => isOpenSubmenu(5)}
            >
              <span className="icon">
                <IoPersonSharp/>
              </span>
              SignUp{" "}
            </Button>
          </Link>
        </li>
      </ul>

      <br />
      <div className="logoutWrapper">
        <div className="logoutBox">
          <Button variant="contained">
            <IoMdLogOut />
            LogOut
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
