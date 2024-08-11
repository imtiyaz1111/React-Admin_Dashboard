import React, { useState } from "react";
import DashboardBox from "../../components/DashboardBox/DashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { MdShoppingBag } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoTimerOutline } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";

import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Chart from "react-google-charts";
import Select from "@mui/material/Select";

import Pagination from '@mui/material/Pagination';
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ProductList from "../ProductList/ProductList";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

export const options = {
  backgroundColor: "transparent",
  chartArea: { width: "100%", height: "100%" },
};

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showBy, setShowBy] = useState("");
  const [CateBy, setCateBy] = useState("");
  const open = Boolean(anchorEl);
  const ITEM_HEIGHT = 48;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="right-content w-100">
      <div className="row dashboarBoxWrapperRow">
        <div className="col-md-8">
          <div className="dashboarBoxWrapper d-flex">
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
            <DashboardBox
              color={["#e1950e", "#f3cd29"]}
              icon={<GiStarsStack />}
            />
          </div>
        </div>
        <div className="col-md-4 pl-0">
          <div className="box graphBox">
            <div className="d-flex align-item-center w-100 bottomEle">
              <h6 className="text-white mb-0 mt-0">Total sales</h6>
              <div className="ml-auto">
                <Button className="ml-auto toggleIcon" onClick={handleClick}>
                  <HiOutlineDotsVertical />
                </Button>
                <Menu
                  className="dropdown_menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: "20ch",
                    },
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <IoTimerOutline /> Last Day
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <IoTimerOutline /> Last Week
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <IoTimerOutline /> Last Month
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <IoTimerOutline /> Last Year
                  </MenuItem>
                </Menu>
              </div>
            </div>
            <h3 className="text-white font-weight-bold">$3,787,681.00</h3>
            <p>$3,578.90 in last month</p>
            <Chart
              chartType="PieChart"
              width="100%"
              height="170px"
              data={data}
              options={options}
            />
          </div>
        </div>
      </div>
      <ProductList/>
    </div>
  );
};

export default Dashboard;
