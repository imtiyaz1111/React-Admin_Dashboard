import React from "react";

import { FaUserCircle } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { MdShoppingBag } from "react-icons/md";
import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import DashboardBox from "../../components/DashboardBox/DashboardBox";
import ProductList from "./ProductList";



const Product = () => {
 
  return (
    <div class="right-content w-100">
        <div class="card shadow border-0 w-100 flex-row p-4 ">
      <h5 class="mb-0">Product List</h5>
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
      </div>
    </div>
       <div className="row dashboarBoxWrapperRow">
        <div className="col-md-12">
          <div className="dashboarBoxs d-flex ">
            
            <DashboardBox
              color={["#1da256", "#48d483"]}
              icon={<FaUserCircle />}
              grow={true}
            />

            <DashboardBox
              color={["#c012e2", "#eb64fe"]}
              icon={<IoCartSharp />}
            />


           <DashboardBox
              color={["#2c78e5", "#60aff5"]}
              icon={<MdShoppingBag />}
            />

           

          </div>
        </div>
      </div>
    
      <ProductList/>
    </div>
  )
}

export default Product
