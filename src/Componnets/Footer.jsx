import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer row mt-5 py-3">
      <div className="container mb-4 mb-lg-0 col-12 col-md-8 d-flex flex-column flex-lg-row align-items-center justify-content-between">
        <div className="links mb-md-0 d-flex justify-content-end align-items-center justify-content-around col-8 col-sm-4">
          <div className="documenation">
            <a
              href="https://qodematrix.com/docs/motion-art-for-elementor/"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </div>
          <div className="Support">
            <a
              href="https://support.qodematrix.com/login"
              target="_blank"
              rel="noreferrer"
            >
              Support
            </a>
          </div>
        </div>
        <div className="text col-12 col-lg-6 text-center order-lg-first">
          © 2023 Copywrite. All rights reserved by QodeMatrix
        </div>
      </div>
    </div>
  );
};

export default Footer;
