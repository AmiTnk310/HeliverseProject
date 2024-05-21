import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Homepage.css";
import Logo from "../Componnets/icons/MotionArtEffect-logo.png";
import starImg from "../Componnets/icons/motionarteffect-img4.png";
import WandImg from "../Componnets/icons/motionarteffect-img5.png";
import Img10 from "../Componnets/icons/motionarteffect-img10.png";
import Img11 from "../Componnets/icons/motionarteffect-img11.png";
import IMg8 from "../Componnets/icons/motionarteffect-img8.png";
import { Icons } from "./utils";
import { Reviews } from "./utils";

const HomePage = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center flex-column "
      style={{ padding: 0 }}
    >
      {/* HEADER STARTS */}
      <div className="header d-flex justify-content-between my-5 py-3 col-11">
        <div className="logo">
          <a href="https://preview.codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/full_screen_preview/48826891?_ga=2.184816681.105772595.1715780017-162128807.1715780017">
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className="button d-lg-block d-none col-6 text-end  d-flex align-items-center ">
          <a
            href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891"
            target="_blank" rel="noreferrer"
          >
            <button className="btn-purchase col-5">Purchase Now</button>
          </a>
        </div>
      </div>
      {/* HEADER ENDS */}
      
      {/* FIRST SECTION STARTS   */}
      <div className="body row col-11 my-5 d-md-flex justify-content-between">
        <div className="transform col-md-2 ">
          <div className=" mb-5 inner-box text-center text-md-start">
            <p className="gradient">Transform your Website</p>
            With Motion Art Effect
          </div>
        </div>
        <div className="attract text-center text-md-start col-12 col-md-9">
          <p className="main-text col-md-10">
            Attract Your Visitors Attention With Colorful <br />
            <span className="gradient big"> Motion Art Effect</span>
          </p>
          <p
            className="col-md-8"
            style={{ fontSize: "1.2rem", color: "rgb(156, 153, 170)" }}
          >
            {" "}
            Unleash the power of creativity with Motion Art for Elementor - your
            ultimate solution for seamlessly integrating captivating animations
            into your website.
          </p>
        </div>
      </div>
      {/* FIRST SECTION ENDS */}

      {/* REVIEWS SECTION */}
      <div className="reviews mt-4 mb-5 col-11 row">
        <div
          className="review-heading text-center col-12"
          style={{ fontSize: "1.2rem" }}
        >
          Trusted by thousands of users around the world
        </div>
        <div className="review-cards d-flex flex-column  flex-md-row flex-wrap justify-content-center align-items-center justify-content-evenly   mt-5">
          {Reviews.map((item, index) => {
            return (
              <div
                key={index}
                className="card my-3 col-9 col-sm-7 col-md-5 col-lg-4"
              >
                <div className="image">
                  <img src={item.img} alt="" />
                </div>
                <div className="review-detail d-flex flex-column justify-content-center align-items-start justify-content-evenly">
                  <div className="stars">
                    <img src={starImg} alt="" />
                  </div>
                  <div className="details">
                    <b>{item.score}</b> Score , {item.reviews} Reviews
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* REVIEWS SECTION ENDS */}

      {/* PURCHASE SECTION STARTS */}
      <div className="magic-wand my-5 d-flex flex-column flex-md-row justify-content-around col-11 row">
        <div className="textarea col-12 text-center text-md-start col-md-8">
          <p>
            {" "}
            <span className="big-text">
              {" "}
              Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors{" "}
            </span>
          </p>
          <p>
            <span className="small-text">
              {" "}
              Motion Art for Elementor is a groundbreaking plugin that empowers
              you to effortlessly infuse your website with visually stunning
              motion art elements.
            </span>
          </p>
          <a
            href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891"
            target="_blank" rel="noreferrer"
          >
            <button className="purchase-btn px-4 col-10 col-sm-8 col-md-8 col-lg-6 mt-4">
              Purchase from Envato &nbsp; &rarr;{" "}
            </button>
          </a>
        </div>
        <div className="wand-image col-12  col-md-4 mt-3 text-center text-md-end">
          <img src={WandImg} alt="" />
        </div>
      </div>
      {/* PURCHASE SECTION ENDS */}
      
      {/* APPLY TO SECTION STARTS */}
      <div className="apply-section row col-11 my-5">
        <div className="apply-heading px-0 col-12 text-center">
          <h2>
            Apply On Any Section Or Enable <br />
            For Whole Page
          </h2>
        </div>
        <div className="apply-section image mt-5 d-flex w-100 flex-column flex-md-row d-flex align-items-center justify-content-between justify-content-center">
          <div className="apply-onSection col-12 mb-0 mb-md-5 col-md-6">
            <p style={{ fontSize: "1.5rem" }}>Apply On Section</p>
            <p style={{ fontSize: "1rem", fontWeight: "300" }}>
              Apply on section is a game-changer, offering an unparalleled way
              to manage applications directly from your website.{" "}
            </p>
            <div className="img">
              <img src={Img10} alt="" width="100%" />
            </div>
          </div>
          <div className="apply-onPage col-12 mt-4 mt-md-5 col-md-6">
            <p style={{ fontSize: "1.5rem" }}>Apply On Page</p>
            <p style={{ fontSize: "1rem", fontWeight: "300" }}>
              Take your website to new heights with Motion Art for Elementor.
              Embrace the power of motion and animation.
            </p>
            <div className="img">
              <img src={Img11} alt="" width="100%" />
            </div>
          </div>
        </div>
      </div>
      {/* APPLY TO SECTION ENDS */}

      {/* SUPPORTED BY SECTION STARTS */}
      <div className="background-card row col-11 d-flex my-5 justify-content-center">
        <div className="innerbox text-center col-11 col-md-8 my-4 ">
          <p style={{ fontSize: "1.5rem", fontWeight: "500" }}>
            Supported by All Popular Browsers
          </p>
          <p style={{ fontSize: "1.125rem", fontWeight: "300" }}>
            Rest Assured, Motion Art is designed to be compatible with all major
            web browsers.
          </p>
          <img className="mt-4 col-12" src={IMg8} alt="" />
        </div>
      </div>
      {/* SUPPORTED BY SECTION ENDS */}

      {/* FEATURES SECTION STARTS */}
      <div className="ending-text text-center row col-11 col-lg-6 my-5">
        <p style={{ fontSize: "2.5rem", fontWeight: "500" }}>
          An All-Round Plugin With Powerful Features
        </p>
        <p
          style={{
            fontSize: "1.1rem",
            fontWeight: "300",
            color: "rgb(156, 153, 170)",
          }}
        >
          Whether you're a seasoned web designer or just starting out, Motion
          Art for Elementor seamlessly integrates with the Elementor platform,
          providing you with a seamless and intuitive experience.
        </p>
      </div>
      <div className="features d-flex flex-md-row flex-wrap flex-column justify-content-evenly my-5 row col-11">
        {Icons.map((item, index) => (
          <div
            key={index}
            className="background-card col-12 my-2 col-md-5 col-lg-3"
          >
            <div className="icon text-start">
              <img src={item.img} alt="" />
            </div>
            <p style={{ fontSize: "1.5rem", fontweight: "500" }}>
              {item.heading}
            </p>
            <p style={{ fontSize: "1rem", fontweight: "300" }}>{item.text}</p>
          </div>
        ))}
      </div>
      {/* FEATURES SECTION ENDS */}
    </div>
  );
};

export default HomePage;
