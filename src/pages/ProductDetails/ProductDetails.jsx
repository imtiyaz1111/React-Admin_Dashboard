import React from "react";

import { MdBrandingWatermark } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { IoIosColorPalette } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { BsTextareaResize } from "react-icons/bs";
import { MdRateReview } from "react-icons/md";
import { IoIosPricetag } from "react-icons/io";
import { FaReplyAll } from "react-icons/fa6";
import { MdPublishedWithChanges } from "react-icons/md";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";



import Slider from "react-slick";
import UserAvatarImg from "../../components/UserAvatarImg/UserAvatarImg";
import BackMenu from "../../components/BackMenu/BackMenu";



const ProductDetails = () => {
  var productSlideOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  var productSlideSmlOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div class="right-content w-100">
     <BackMenu/>
      <div className="card productDetailsSection">
        <div className="row">
          <div className="col-md-5">
            <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
              <h6 className="mb-4">Product Gallery</h6>
              <Slider {...productSlideOptions} className="sliderBig mb-2">
                <div className="item">
                  <img
                    src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                    alt=""
                    className="w-100"
                  />
                </div>
              </Slider>
              <Slider {...productSlideSmlOptions} className="sliderSml">
                <div className="item">
                  <img
                    src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp"
                    alt=""
                    className="w-100"
                  />
                </div>
                <div className="item">
                  <img
                    src="https://mironcoder-hotash.netlify.app/images/product/single/05.webp"
                    alt=""
                    className="w-100"
                  />
                </div>
                <div className="item">
                  <img
                    src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp"
                    alt=""
                    className="w-100"
                  />
                </div>
                <div className="item">
                  <img
                    src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp"
                    alt=""
                    className="w-100"
                  />
                </div>
              </Slider>
            </div>
          </div>
          <div className="col-md-7">
            <div className="pt-3 pb-3 pl-4 pr-4">
              <h6 className="mb-4">Product Details</h6>
              <h4>
                Formal suits for men wedding slim fit 3 piece dress business
                party jacket
              </h4>
              <div className="productInfo mt-3">
                <div className="row mb-2">
                  <div className="col-sm-3 d-flex align-items-center">
                    <span className="icon">
                      {" "}
                      <MdBrandingWatermark />
                    </span>
                    <span className="name">Brand</span>
                  </div>
                  <div className="col-sm-9">
                    :<span>Ecstasy</span>
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-sm-3 d-flex align-items-center">
                    <span className="icon">
                      {" "}
                      <BiSolidCategoryAlt />
                    </span>
                    <span className="name">Category</span>
                  </div>
                  <div className="col-sm-9">
                    : <span>Man's</span>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-sm-3 d-flex align-items-center">
                    <span className="icon">
                      {" "}
                      <IoIosSettings />
                    </span>
                    <span className="name">Tags</span>
                  </div>
                  <div className="col-sm-9">
                    :{" "}
                    <span>
                      <ul className="list list-inline tags sml">
                        <li className="list-inline-item">
                          <span>SUITE</span>
                        </li>
                        <li className="list-inline-item">
                          <span>PARTY</span>
                        </li>
                        <li className="list-inline-item">
                          <span>DRESS</span>
                        </li>
                        <li className="list-inline-item">
                          <span>SMART</span>
                        </li>
                        <li className="list-inline-item">
                          <span>MAN</span>
                        </li>
                      </ul>
                    </span>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-sm-3 d-flex align-items-center">
                    <span className="icon">
                      {" "}
                      <IoIosColorPalette />
                    </span>
                    <span className="name">Color</span>
                  </div>
                  <div className="col-sm-9">
                    :
                    <span>
                      <ul className="list list-inline tags sml">
                        <li className="list-inline-item">
                          <span>RED</span>
                        </li>
                        <li className="list-inline-item">
                          <span>BLUE</span>
                        </li>
                        <li className="list-inline-item">
                          <span>WHITE</span>
                        </li>
                      </ul>
                    </span>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-sm-3 d-flex align-items-center">
                    <span className="icon">
                      {" "}
                      <BsTextareaResize />
                    </span>
                    <span className="name">Size</span>
                  </div>
                  <div className="col-sm-9">
                    :
                    <ul className="list list-inline tags sml">
                      <li className="list-inline-item">
                        <span>SM</span>
                      </li>
                      <li className="list-inline-item">
                        <span>MD</span>
                      </li>
                      <li className="list-inline-item">
                        <span>LG</span>
                      </li>
                      <li className="list-inline-item">
                        <span>XL</span>
                      </li>
                      <li className="list-inline-item">
                        <span>XXL</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-sm-3 d-flex align-items-center">
                    <span className="icon">
                      {" "}
                      <IoIosPricetag />
                    </span>
                    <span className="name">Price</span>
                  </div>
                  <div className="col-sm-9">
                    :{" "}
                    <span>
                      <div style={{ width: "70px" }} className="d-flex">
                        <del className="old">$21.00</del>
                        <span className="new text-danger">$21.00</span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-sm-3 d-flex align-items-center">
                    <span className="icon">
                      {" "}
                      <FaShoppingCart />
                    </span>
                    <span className="name">Stock</span>
                  </div>
                  <div className="col-sm-9">
                    : <span>(03) Piece</span>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-sm-3 d-flex align-items-center">
                    <span className="icon">
                      {" "}
                      <MdRateReview />
                    </span>
                    <span className="name">Review</span>
                  </div>
                  <div className="col-sm-9">
                    : <span>(03) Review</span>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-sm-3 d-flex align-items-center">
                    <span className="icon">
                      {" "}
                      <MdPublishedWithChanges />
                    </span>
                    <span className="name">Published</span>
                  </div>
                  <div className="col-sm-9">
                    : <span>02 Feb 2020</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h6 className="mt-4 mb-3">Product Description</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            reprehenderit repellendus expedita esse cupiditate quos doloremque
            rerum, corrupti ab illum est nihil, voluptate ex dignissimos! Sit
            voluptatem delectus nam, molestiae, repellendus ab sint quo aliquam
            debitis amet natus doloremque laudantium? Repudiandae, consequuntur,
            officiis quidem quo deleniti, autem non laudantium sequi error
            molestiae ducimus accusamus facere velit consectetur vero dolore
            natus nihil temporibus aspernatur quia consequatur? Consequuntur
            voluptate deserunt repellat tenetur debitis molestiae doloribus
            dicta. In rem illum dolorem atque ratione voluptates asperiores
            maxime doloremque laudantium magni neque ad quae quos quidem,
            quaerat rerum ducimus blanditiis reiciendis
          </p>
          <br />
          <h6 className="mt-4 mb-4">Rating Analytics</h6>
          <div className="ratingSection">
            <div className="ratingrow d-flex align-items-center">
              <span className="col1">5 Star</span>
              <span className="col2">
                <div className="progress">
                  <div className="progress-bar" style={{ width: "70%" }}></div>
                </div>
              </span>
              <span className="col3">(19)</span>
            </div>

            <div className="ratingrow d-flex align-items-center">
              <span className="col1">4 Star</span>
              <span className="col2">
                <div className="progress">
                  <div className="progress-bar" style={{ width: "50%" }}></div>
                </div>
              </span>
              <span className="col3">(19)</span>
            </div>

            <div className="ratingrow d-flex align-items-center">
              <span className="col1">3 Star</span>
              <span className="col2">
                <div className="progress">
                  <div className="progress-bar" style={{ width: "25%" }}></div>
                </div>
              </span>
              <span className="col3">(19)</span>
            </div>
            <div className="ratingrow d-flex align-items-center">
              <span className="col1">2 Star</span>
              <span className="col2">
                <div className="progress">
                  <div className="progress-bar" style={{ width: "30%" }}></div>
                </div>
              </span>
              <span className="col3">(19)</span>
            </div>

            <div className="ratingrow d-flex align-items-center">
              <span className="col1">1 Star</span>
              <span className="col2">
                <div className="progress">
                  <div className="progress-bar" style={{ width: "20%" }}></div>
                </div>
              </span>
              <span className="col3">(19)</span>
            </div>
          </div>
          <br />
          <h6 className="mt-4 mb-4">Customer_reviews</h6>
          <div className="reviewSection">
            <div className="reviewRow">
              <div className="row">
                <div className="col-sm-7 d-flex">
                  <div className="d-flex  flex-column">
                    <div className="userInfo d-flex align-items-center mb-3">
                      <UserAvatarImg
                        img="https://media.licdn.com/dms/image/D4D03AQFuQtM-aOM2cg/profile-displayphoto-shrink_400_400/0/1719919395939?e=1726704000&v=beta&t=LT636mt1cXCFoT3yGZ1cccvaxt-9MEOOFL9fKZK6B-U"
                        lg={true}
                      />
                      <div className="info pl-3">
                        <h5>Mohammad Imtiyaz Alam</h5>
                        <span>25 minutes ago</span>
                      </div>
                    </div>
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-md-5 d-flex-align-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-lg btn-big ml-auto">
                      <FaReplyAll /> &nbsp; Reply
                      </Button>
                    </div>
                  </div>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  quo nostrum dolore fugiat ducimus labore debitis unde autem
                  recusandae? Eius harum tempora quis minima, adipisci natus
                  quod magni omnis quas.
                </p>
              </div>
            </div>
            <div className="reviewRow reply">
              <div className="row">
                <div className="col-sm-7 d-flex">
                  <div className="d-flex  flex-column">
                    <div className="userInfo d-flex align-items-center mb-3">
                      <UserAvatarImg
                        img="https://media.licdn.com/dms/image/D4D03AQFuQtM-aOM2cg/profile-displayphoto-shrink_400_400/0/1719919395939?e=1726704000&v=beta&t=LT636mt1cXCFoT3yGZ1cccvaxt-9MEOOFL9fKZK6B-U"
                        lg={true}
                      />
                      <div className="info pl-3">
                        <h5>Mohammad Imtiyaz Alam</h5>
                        <span>25 minutes ago</span>
                      </div>
                    </div>
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-md-5 d-flex-align-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-lg btn-big ml-auto">
                      <FaReplyAll /> &nbsp; Reply
                      </Button>
                    </div>
                  </div>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  quo nostrum dolore fugiat ducimus labore debitis unde autem
                  recusandae? Eius harum tempora quis minima, adipisci natus
                  quod magni omnis quas.
                </p>
              </div>
            </div>
            <div className="reviewRow reply">
              <div className="row">
                <div className="col-sm-7 d-flex">
                  <div className="d-flex  flex-column">
                    <div className="userInfo d-flex align-items-center mb-3">
                      <UserAvatarImg
                        img="https://media.licdn.com/dms/image/D4D03AQFuQtM-aOM2cg/profile-displayphoto-shrink_400_400/0/1719919395939?e=1726704000&v=beta&t=LT636mt1cXCFoT3yGZ1cccvaxt-9MEOOFL9fKZK6B-U"
                        lg={true}
                      />
                      <div className="info pl-3">
                        <h5>Mohammad Imtiyaz Alam</h5>
                        <span>25 minutes ago</span>
                      </div>
                    </div>
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-md-5 d-flex-align-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-lg btn-big ml-auto">
                      <FaReplyAll /> &nbsp; Reply
                      </Button>
                    </div>
                  </div>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  quo nostrum dolore fugiat ducimus labore debitis unde autem
                  recusandae? Eius harum tempora quis minima, adipisci natus
                  quod magni omnis quas.
                </p>
              </div>
            </div>
            <div className="reviewRow">
              <div className="row">
                <div className="col-sm-7 d-flex">
                  <div className="d-flex  flex-column">
                    <div className="userInfo d-flex align-items-center mb-3">
                      <UserAvatarImg
                        img="https://media.licdn.com/dms/image/D4D03AQFuQtM-aOM2cg/profile-displayphoto-shrink_400_400/0/1719919395939?e=1726704000&v=beta&t=LT636mt1cXCFoT3yGZ1cccvaxt-9MEOOFL9fKZK6B-U"
                        lg={true}
                      />
                      <div className="info pl-3">
                        <h5>Mohammad Imtiyaz Alam</h5>
                        <span>25 minutes ago</span>
                      </div>
                    </div>
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-md-5 d-flex-align-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-lg btn-big ml-auto">
                      <FaReplyAll /> &nbsp; Reply
                      </Button>
                    </div>
                  </div>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  quo nostrum dolore fugiat ducimus labore debitis unde autem
                  recusandae? Eius harum tempora quis minima, adipisci natus
                  quod magni omnis quas.
                </p>
              </div>
            </div>

            <br />
            <h6 className="mt-4 mb-3">Review Reply Form
            </h6>
            <form className="reviewForm">
              <textarea name="text" placeholder="write here "></textarea>
            </form>
            <Button className="btn-blue btn-lg btn-big w-100 mt-4">Drop Your Replies</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
