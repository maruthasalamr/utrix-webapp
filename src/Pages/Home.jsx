import React from "react";
import "../styles/home.css";
import Logo from "../assets/logo.png";
import likeicon from "../assets/icons/heart.svg";
import personicon from "../assets/icons/person.svg";
import carticon from "../assets/icons/cart.svg";
import freedelivery from "../assets/icons/free-delivery.svg";
import tag from "../assets/icons/tag.svg";
import twentyfour from "../assets/icons/24-hours.svg";
import paymentsupport from "../assets/icons/payment-security.svg";

import slide from "../assets/slide1.jpeg";
import brandImg1 from "../assets/brands/brand-1.png";
import brandImg2 from "../assets/brands/brand-2.png";
import brandImg3 from "../assets/brands/brand-3.png";
import brandImg4 from "../assets/brands/brand-4.png";
import brandImg5 from "../assets/brands/brand-5.png";
import brandImg6 from "../assets/brands/brand-6.png";
import brandImg7 from "../assets/brands/brand-7.png";
import brandImg8 from "../assets/brands/brand-8.png";
import brandImg9 from "../assets/brands/brand-9.png";
import brandImg10 from "../assets/brands/brand-10.png";
import brandImg11 from "../assets/brands/brand-11.png";
import brandImg12 from "../assets/brands/brand-12.png";
import brandImg13 from "../assets/brands/brand-13.png";
import brandImg14 from "../assets/brands/brand-14.png";
import brandImg15 from "../assets/brands/brand-15.png";
import brandImg16 from "../assets/brands/brand-16.png";

import product1 from "../assets/products/product-1.jpeg";
import product2 from "../assets/products/product-2.jpeg";
import product3 from "../assets/products/product-3.jpeg";
import product4 from "../assets/products/product-4.jpeg";
import product5 from "../assets/products/product-5.jpeg";
import product6 from "../assets/products/product-6.jpeg";
import product7 from "../assets/products/product-7.jpeg";
import product8 from "../assets/products/product-8.jpeg";
import product9 from "../assets/products/product-9.jpeg";
import product10 from "../assets/products/product-10.jpeg";
import product11 from "../assets/products/product-11.jpeg";
import product12 from "../assets/products/product-12.jpeg";
import product13 from "../assets/products/product-13.jpeg";

import banner1 from "../assets/banner1.jpeg";
import banner2 from "../assets/banner2.jpeg";
import payments from "../assets/payments.png";

function Home() {
  var arrayItems = [
    { product_name: "Amiparts", product_image: brandImg1 },
    { product_name: "Windengine", product_image: brandImg2 },
    { product_name: "Turboelectric", product_image: brandImg3 },
    { product_name: "StartOne", product_image: brandImg4 },
    { product_name: "Brandix", product_image: brandImg5 },
    { product_name: "ABS Brand", product_image: brandImg6 },
    { product_name: "Great Circle", product_image: brandImg7 },
    { product_name: "Justromb", product_image: brandImg8 },
    { product_name: "Fastwheels", product_image: brandImg9 },
    { product_name: "Stroyka-x", product_image: brandImg10 },
    { product_name: "Mission 51", product_image: brandImg11 },
    { product_name: "Fuelcorp", product_image: brandImg12 },
    { product_name: "Blocks", product_image: brandImg13 },
    { product_name: "Redgate", product_image: brandImg14 },
    { product_name: "Blackbox", product_image: brandImg15 },
    { product_name: "Squaregarge", product_image: brandImg16 }
  ];

  var product_items = [
    {
      product_name: "Glossy Gray'19 Alumunium Wheel",
      product_image: product1,
    },
    {
      product_name: "Twin Exhaust Pipe From Brandix",
      product_image: product2,
    },
    { product_name: "Motor Oil Level 5", product_image: product3 },
    { product_name: "Brandix Engine Block Z4", product_image: product4 },
    { product_name: "Brandix Clutch Discs Z175", product_image: product5 },
    {
      product_name: "Fantastic 12 stroke Engine with power of 1991 hp",
      product_image: product6,
    },
    {
      product_name: "Brandix Manual Five Speed Gearbox",
      product_image: product7,
    },
    {
      product_name: "Set of Four 19 Inch Spiked Tires",
      product_image: product8,
    },
    {
      product_name: "Set of Car Floor Mats Brandix Z4",
      product_image: product9,
    },
    { product_name: "40 Megawatt Low Neam Lamp", product_image: product10 },
    { product_name: "Taillights Brandix Z54", product_image: product11 },
    { product_name: "Brandix Manual Five Speed GearBox", product_image: product12 }
  ];
  var size = 4;
  return (
    <div>
      <div class="row m-3">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img src={Logo} height="60" alt="" />
          </a>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <button
              type="button"
              class="btn btn-warning dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fa fa-car"></i>
              <span class="px-2 font-weight-bold">Select Vehcile</span>
            </button>
            <div class="form-group has-search px-2 col-lg-4">
              <span class="fa fa-search form-control-feedback"></span>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Keyword or part number"
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <img src={likeicon} />
            </div>
            <div class="col">
              <div className="icon-div1">
                <span>
                  <img src={personicon} />
                </span>
              </div>
              <div className="icon-div2">
                <div className="textsize_cs">Hello,Login In</div>
              </div>
              <div className="clear"></div>
            </div>
            <div class="col">
              <div className="icon-div1">
                <span>
                  <img src={carticon} />
                </span>
              </div>
              <div className="icon-div2">
                <div className="textsize_cs">Shopping Cart</div>
              </div>
              <div className="clear"></div>
            </div>
          </div>
        </nav>
      </div>
      <div className="row m-3">
        <nav class="nav">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle drp"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="">
                <i
                  class="fa fa-bars"
                  style={{ fontSize: "16px", paddingRight: "8px" }}
                ></i>
              </span>
              <span className="">Shop By Category</span>
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">
                Action
              </a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle drp"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Home
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">
                Action
              </a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle drp"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Megamenu
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">
                Action
              </a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle drp"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Shop
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">
                Action
              </a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle drp"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Blog
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">
                Action
              </a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle drp"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Account
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">
                Action
              </a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle drp"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Pages
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">
                Action
              </a>
            </div>
          </li>
          {/* <li className="nav-item">
             <div>
                <span className="productline">Call Us: </span>
                <span className="product_head">08925297807</span>
             </div>
          </li> */}
        </nav>
      </div>
      <div class="container">
        <div
          id="myCarousel"
          class="carousel slide"
          data-ride="carousel"
          style={{ marginTop: "10px" }}
        >
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <div class="carousel-inner img-container">
            <div class="item active">
              <img src={slide} alt="Los Angeles" width="100%" />
              <div className="overlay">
                <div className="overlay_text">
                  <div>
                    <span className="text_highlight">30% OFF</span>
                  </div>
                  When Buying Parts With Installation
                </div>
                <div>
                  Installation of parts in the services of our partners.
                </div>
                <div className="pt-5">
                  <button class="btnn">Shop Now</button>
                </div>
              </div>
            </div>

            {/* <div class="item">
              <img src={banner1} alt="Chicago" width='100%' />
            </div> */}
          </div>

          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          {arrayItems.length > 0 &&
            arrayItems.map(function (item) {
              return (
                <div class="col col-sty">
                  <img src={item.product_image} />
                  <div>{item.product_name}</div>
                </div>
              );
            })}
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="headline">Featured Products</div>
          {product_items.slice(0, size).map(function (item) {
            return (
              <div className="col" style={{ marginTop: "10px" }}>
                <div class="card" style={{ width: "18rem;" }}>
                  <img
                    class="card-img-top"
                    src={item.product_image}
                    alt="Card image cap"
                  />
                  <div class="card-body" style={{ textAlign: "left" }}>
                    <div className="productline">SKU-A43-4435-B</div>
                    <div className="product_head">{item.product_name}</div>
                    <div className="review">
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <span className="px-2">26 reviews</span>
                    </div>

                    <div className="row">
                      <div className="col product_head">$4890</div>
                      <div className="col cart_cs">
                        <i class="fa fa-shopping-cart"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: "20px" }}>
          <div className="custom_col1 overlay_image">
            <img src={banner1} className="img_style" alt="banner" />
            <div className="overlay_top_left">
              <div className="">
                <div className="highlight">MOTOR OILS</div>
                <div className="banner_text">
                  Synthetic motor oil with free shipping friction free life
                  guaranteed
                </div>
              </div>
              <div className="pt-3">
                <button className="bttnshop">Shop Now</button>
              </div>
            </div>
          </div>
          <div class="custom_col2 overlay_image">
            <img src={banner2} className="img_style" alt="banner" />
            <div className="overlay_top_left">
              <div className="">
                <div>
                  <span className="text_highlight">SAVE UP TO $40</span>
                </div>
                <div className="banner_text">
                  Luxurious interior part for real aesthetes
                  Leather,fabric,ivory and more.
                </div>
              </div>
              <div className="pt-3">
                <button className="bttnshop">Shop Now</button>
              </div>
            </div>
          </div>
          <div class="clear"></div>
        </div>
        <div className="row" style={{ marginTop: "20px", textAlign: "left" }}>
          <div className="col">
            <div className="headline">Top Rated Products</div>
          </div>
          <div className="col">
            <div className="headline">Special Offers</div>
          </div>
          <div className="col">
            <div className="headline">Bestsellers</div>
          </div>
        </div>
        {/* <hr /> */}
        <div className="row" style={{ marginTop: "20px" }}>
           {
            product_items.map(function(item){
                return(
                    <div class="col-sm-4 p-2">
                    <div class="card">
                      <div class="card-body">
                        <div className="card_img">
                          <img src={item.product_image} alt="products" width="80%" />
                        </div>
                        <div className="card_text">
                          <div className="product_head">
                             {item.product_name}
                          </div>
                          <div className="review">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <span className="px-2">26 reviews</span>
                          </div>
                          <div className="product_head">$4890</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            })
           }
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <div class="col-sm-3 p-2">
            <div class="card">
              <div class="card-body">
                <div className="card_img">
                  <img src={freedelivery} alt="products" width="80%" />
                </div>
                <div className="card_text">
                  <div className="product_head">Free Shipping</div>
                  <div className="productline">For orders from $150</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3 p-2">
            <div class="card">
              <div class="card-body">
                <div className="card_img">
                  <img src={twentyfour} alt="products" width="80%" />
                </div>
                <div className="card_text">
                  <div className="product_head">Free Shipping</div>
                  <div className="productline">For orders from $150</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3 p-2">
            <div class="card">
              <div class="card-body">
                <div className="card_img">
                  <img src={paymentsupport} alt="products" width="80%" />
                </div>
                <div className="card_text">
                  <div className="product_head">Free Shipping</div>
                  <div className="productline">For orders from $150</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3 p-2">
            <div class="card">
              <div class="card-body">
                <div className="card_img">
                  <img src={tag} alt="products" width="80%" />
                </div>
                <div className="card_text">
                  <div className="product_head">Free Shipping</div>
                  <div className="productline">For orders from $150</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="row" style={{ marginTop: "20px" }}>
          <div class="col p-2">
            <div className="color_prop">Contact Us</div>
            <div className="colorp">
              Hi, we are always open for cooperation and suggestions,contact us
              in one of the ways below:
            </div>
            <div className="">
              <div className="custom_col1">
                <div className="colorp">PHONE NUMBER</div>
                <div className="colortx">08925297807</div>

                <div className="colorp">OUR LOCATION</div>
                <div className="colortx">
                  102, Athipalayam
                  Rd,Ramakrishnapuram,chinnavedampati,Coimbatore,Tamil Nadu
                  641049
                </div>
              </div>
              <div className="custom_col2">
                <div className="colorp">EMAIL ADDRESS</div>
                <div className="colortx">careers@uitoxsolutions.com</div>

                <div className="colorp">WORKING HOURS</div>
                <div className="colortx">Mon-Fri 10.00pm - 6.00pm</div>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-2 p-1">
            <div className="color_prop">Information</div>
            <div className="colorp">About Us</div>
            <div className="colorp">Delivery Information</div>
            <div className="colorp">Privacy Policy</div>
            <div className="colorp">Brands</div>
            <div className="colorp">Contact US</div>
            <div className="colorp">Returns</div>
            <div className="colorp">Site Map</div>
          </div>
          <div class="col-6 col-md-2 p-2">
            <div className="color_prop">Store Location</div>
            <div className="colorp">Our History</div>
            <div className="colorp">Wish List</div>
            <div className="colorp">Newsletter</div>
            <div className="colorp">Special Offers</div>
            <div className="colorp">Gift certificates</div>
            <div className="colorp">Afiilate</div>
          </div>
          <div class="col p-2">
            <div className="color_prop">Newsletter</div>
            <div className="colorp">
              Enter your email address below to subscribe to our newsletter and
              keep up to date with discounts and special offers.
            </div>
            <div style={{ marginTop: "8px" }}>
              <div class="custom_col1">
                <input
                  type="email"
                  class="form-control inpcolor"
                  placeholder="user@example.com"
                />
              </div>
              <div className="custom_col2">
                <button class="btnn mb-2" style={{ marginLeft: "10px" }}>
                  Subscribe
                </button>
              </div>
            </div>
            <div className="colorp">Follow us on social networks</div>
            <div className="m-2">
              <span>
                <i
                  class="fa fa-youtube-play"
                  style={{
                    fontSize: "24px",
                    color: "#fff",
                    paddingRight: "8px",
                  }}
                ></i>
              </span>
              <span>
                <i
                  class="fa fa-twitter-square"
                  style={{
                    fontSize: "24px",
                    color: "#fff",
                    paddingRight: "8px",
                  }}
                ></i>
              </span>
              <span>
                <i
                  class="fa fa-instagram"
                  style={{
                    fontSize: "24px",
                    color: "#fff",
                    paddingRight: "8px",
                  }}
                ></i>
              </span>
              <span>
                <i
                  class="fa fa-facebook-square"
                  style={{ fontSize: "24px", color: "#fff" }}
                ></i>
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="colorp">
              Powered by React/Next.js Designed by UITOUIX Solutions
            </div>
          </div>
          <div className="col" style={{ textAlign: "right" }}>
            <img src={payments} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
