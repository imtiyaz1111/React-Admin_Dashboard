import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import { FaCloudUploadAlt } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { RxCross2 } from "react-icons/rx";
import { FaImages } from "react-icons/fa";

const ProductUpload = () => {
  const [ratingValue, setRatingValue] = useState(1);
  const [productRam, setProductRam] = useState([]);

  const handleChangeProductRam = (e) => {
    const {
      target: { value },
    } = e;
    setProductRam(typeof value === "string" ? value.split(",") : value)
  };
  return (
    <>
      <div class="right-content w-100">
        <div class="card shadow border-0 w-100 flex-row p-4 ">
          <h5 class="mb-0">Product Upload</h5>
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
              <Link to="/product/upload">
                <Button>Product Upload</Button>
              </Link>{" "}
            </div>
          </div>
        </div>

        <form className="form">
          <div className="row">
            <div className="col-sm-12">
              <div className="card p-4">
                <h5 className="mb-4">Basic Information</h5>
                <div className="form-group">
                  <h6>TITLE</h6>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <h6>DESCRIPTION</h6>
                  <textarea rows={5} cols={10} />
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>CATEGORY</h6>
                      <select class="custom-select custom-select-lg mb-3 w-100">
                        <option selected>None</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group">
                      <h6>SUB CATEGORY</h6>
                      <select class="custom-select custom-select-lg mb-3 w-100">
                        <option selected>None</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>REGULAR PRICE</h6>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>DISCOUNT PRICE</h6>
                      <input type="text" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>RATING</h6>
                      <Rating
                        className="rating"
                        name="simple-controlled"
                        value={ratingValue}
                        onChange={(event, newValue) => {
                          setRatingValue(newValue);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>PRODUCT STOCK</h6>
                      <input type="text" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>BRAND</h6>
                      <input type="text" />
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group">
                      <h6>is Featured</h6>
                      <select class="custom-select custom-select-lg mb-3 w-100">
                        <option selected>None</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>PRODUCT RAMS</h6>
                      <select
                        value={productRam}
                        onChange={handleChangeProductRam}
                        multiple
                        class="custom-select custom-select-lg mb-3 w-100"
                      >
                       
                        <option value="2GB">2GB</option>
                        <option value="4GB">4GB</option>
                        <option value="5GB">8GB</option>
                        <option value="12GB">12GB</option>
                      </select>
                    </div>
                  </div>

                  <div className="col"></div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="card p-4 mt-0">
          <div className="imagesUploadSec">
            <h5 className="mb-4">Mobile And Published</h5>
            <div className="imgUploadBox d-flex align-items-center">
              <div className="uploadBox">
                <span className="remove">
                  <RxCross2 />
                </span>
                <div className="box">
                  <LazyLoadImage
                    alt={"image"}
                    effect="blur"
                    className="w-100"
                    src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                  />
                </div>
              </div>
              <div className="uploadBox">
                <input type="file" multiple name="images" />
                <div className="info">
                  <FaImages />
                  <h5>image upload</h5>
                </div>
              </div>
            </div>
          </div>
          <br />
          <Button className="btn-blue btn-lg btn-big">
            <FaCloudUploadAlt /> &nbsp; PUBLISH AND VIEW
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductUpload;
