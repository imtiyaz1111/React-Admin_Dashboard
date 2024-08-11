import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";

const BackMenu = () => {
  return (
    <div class="card shadow border-0 w-100 flex-row p-4 ">
      <h5 class="mb-0">Product View</h5>
      <div className="menu ml-auto">
        <div className="menu-btn">
          <Link to="/">
            <HomeIcon />
            <Button>Dashboard</Button>
          </Link>{" "}
        </div>
        /
        <div className="menu-btn">
          <Link to="/product">
            <Button>Products</Button>
          </Link>{" "}
        </div>
        /
        <div className="menu-btn">
          <Link to="/product/details">
            <Button>Product View</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BackMenu;
