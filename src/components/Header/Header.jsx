import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/images/dashboard-admin.png";
import Button from "@mui/material/Button";

import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../SearchBox/SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";
import { FaShieldAlt } from "react-icons/fa";
import { Divider } from "@mui/material";
import { MyContext } from "../../App";
import UserAvatarImg from "../UserAvatarImg/UserAvatarImg";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpennotifications, setisOpennotifications] = useState(null);
  const openMyAcc = Boolean(anchorEl);
  const openNotifications = Boolean(isOpennotifications);

  const context = useContext(MyContext);

  const handleOpenMyAccDr = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDr = () => {
    setAnchorEl(null);
  };

  const handleOpenNotificationsDr = () => {
    setisOpennotifications(true);
  };
  const handleCloseNotificationsDr = () => {
    setisOpennotifications(false);
  };
  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            {/* logo wraooer */}
            <div className="col-sm-2 part1">
              <Link to={"/"} className="d-flex align-items-center logo">
                <img src={logo} alt="logo" />
                <span>SiteName</span>
              </Link>
            </div>

            <div className="col-sm-3 d-flex align-items-center part2 ">
              <Button
                className="rounded-circle "
                onClick={() =>
                  context.setIsToggleSidebar(!context.isToggleSidebar)
                }
              >
                {context.isToggleSidebar === false ? (
                  <MdMenuOpen />
                ) : (
                  <MdOutlineMenu />
                )}
              </Button>
              <SearchBox />
            </div>

            <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
              <div className="left">
                <Button
                  className="rounded-circle "
                  onClick={() =>
                    context.setIsToggleSidebar(!context.isToggleSidebar)
                  }
                >
                  {context.isToggleSidebar === false ? (
                    <MdMenuOpen />
                  ) : (
                    <MdOutlineMenu />
                  )}
                </Button>
              </div>
              <Button
                className="rounded-circle mr-3"
                onClick={() => context.setThemeMode(!context.themeMode)}
              >
                {" "}
                {context.themeMode === true ? (
                  <MdOutlineLightMode />
                ) : (
                  <MdDarkMode />
                )}
              </Button>

              <div className="dropdwonWrapper position-relative">
                <Button
                  className="rounded-circle mr-3"
                  onClick={handleOpenNotificationsDr}
                >
                  {" "}
                  <FaRegBell />
                </Button>
                <Menu
                  anchorEl={isOpennotifications}
                  className="notifications dropdown_list"
                  id="notifications"
                  open={openNotifications}
                  onClose={handleCloseNotificationsDr}
                  onClick={handleCloseNotificationsDr}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <div className="head pl-3 pb-0">
                    <h4>Notifications(12)</h4>
                  </div>
                  <Divider className="mb-1" />
                  <div className="scroll">
                    <MenuItem onClick={handleCloseNotificationsDr}>
                      <div className="d-flex ">
                        <div>
                          <UserAvatarImg
                            img={
                              "https://media.licdn.com/dms/image/D4D03AQFuQtM-aOM2cg/profile-displayphoto-shrink_400_400/0/1719919395939?e=1726704000&v=beta&t=LT636mt1cXCFoT3yGZ1cccvaxt-9MEOOFL9fKZK6B-U"
                            }
                          />
                        </div>
                        <div className="dropdownbInfo">
                          <h4>
                            <span>
                              <b>Mahmul</b> added to his favorite list{" "}
                              <b>Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few seconds ago</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotificationsDr}>
                      <div className="d-flex ">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img
                                src="https://media.licdn.com/dms/image/D4D03AQFuQtM-aOM2cg/profile-displayphoto-shrink_400_400/0/1719919395939?e=1726704000&v=beta&t=LT636mt1cXCFoT3yGZ1cccvaxt-9MEOOFL9fKZK6B-U"
                                alt=""
                              />
                            </span>
                          </div>
                        </div>
                        <div className="dropdownbInfo">
                          <h4>
                            <span>
                              <b>Mahmul</b> added to his favorite list{" "}
                              <b>Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few seconds ago</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotificationsDr}>
                      <div className="d-flex ">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img
                                src="https://media.licdn.com/dms/image/D4D03AQFuQtM-aOM2cg/profile-displayphoto-shrink_400_400/0/1719919395939?e=1726704000&v=beta&t=LT636mt1cXCFoT3yGZ1cccvaxt-9MEOOFL9fKZK6B-U"
                                alt=""
                              />
                            </span>
                          </div>
                        </div>
                        <div className="dropdownbInfo">
                          <h4>
                            <span>
                              <b>Mahmul</b> added to his favorite list{" "}
                              <b>Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few seconds ago</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotificationsDr}>
                      <div className="d-flex ">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img
                                src="https://media.licdn.com/dms/image/D4D03AQFuQtM-aOM2cg/profile-displayphoto-shrink_400_400/0/1719919395939?e=1726704000&v=beta&t=LT636mt1cXCFoT3yGZ1cccvaxt-9MEOOFL9fKZK6B-U"
                                alt=""
                              />
                            </span>
                          </div>
                        </div>
                        <div className="dropdownbInfo">
                          <h4>
                            <span>
                              <b>Mahmul</b> added to his favorite list{" "}
                              <b>Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few seconds ago</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotificationsDr}>
                      <div className="d-flex ">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img
                                src="https://media.licdn.com/dms/image/D4D03AQFuQtM-aOM2cg/profile-displayphoto-shrink_400_400/0/1719919395939?e=1726704000&v=beta&t=LT636mt1cXCFoT3yGZ1cccvaxt-9MEOOFL9fKZK6B-U"
                                alt=""
                              />
                            </span>
                          </div>
                        </div>
                        <div className="dropdownbInfo">
                          <h4>
                            <span>
                              <b>Mahmul</b> added to his favorite list{" "}
                              <b>Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few seconds ago</p>
                        </div>
                      </div>
                    </MenuItem>
                  </div>
                  <div className="pl-3 pr-3 w-100 pt-2 pb-1">
                    <Button className="btn-blue w-100">
                      View all notifications
                    </Button>
                  </div>
                </Menu>
              </div>
              {context.isLogin !== true ? (
                <Link to="/login">
                  {" "}
                  <Button className="btn-blue btn-lg btn-round">
                    Sign In
                  </Button>{" "}
                </Link>
              ) : (
                <div className="myAccWrapper">
                  <Button
                    className="myAcc  d-flex align-items-center"
                    onClick={handleOpenMyAccDr}
                  >
                    <div className="userImg">
                      <span className="rounded-circle">
                        <img
                          src="https://media.licdn.com/dms/image/D4D03AQFuQtM-aOM2cg/profile-displayphoto-shrink_400_400/0/1719919395939?e=1726704000&v=beta&t=LT636mt1cXCFoT3yGZ1cccvaxt-9MEOOFL9fKZK6B-U"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="userInfo">
                      <h4>Imtiyaz Alam</h4>
                      <p className="mb-0">@imtiyaz123</p>
                    </div>
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={openMyAcc}
                    onClose={handleCloseMyAccDr}
                    onClick={handleCloseMyAccDr}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem onClick={handleCloseMyAccDr}>
                      <ListItemIcon>
                        <PersonAdd />
                      </ListItemIcon>
                      My Account
                    </MenuItem>
                    <MenuItem onClick={handleCloseMyAccDr}>
                      <ListItemIcon>
                        <FaRegBell />
                      </ListItemIcon>
                      Reset Password
                    </MenuItem>
                    <MenuItem onClick={handleCloseMyAccDr}>
                      <ListItemIcon>
                        <Logout />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
