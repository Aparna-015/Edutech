import React from "react";
import "./Footer.css";
import footer from "../../assets/img/footer.png";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_box">
            <div className="logo">
              <div className="logo-img">
                <img src={footer} alt="Footer Logo" />
              </div>
              <h2>Edutech</h2>
            </div>
            <p>Transforming Education for the Digital Age</p>
          </div>

          <div className="footer_box">
            <h4 className="footer_title">Company</h4>
            <ul className="footer_links">
              <li><a href="">Our programs</a></li>
              <li><a href="">Our plan</a></li>
              <li><a href="">Become a member</a></li>
            </ul>
          </div>

          <div className="footer_box">
            <h4 className="footer_title">Quick-links</h4>
            <ul className="footer_links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/contactus">Contact Us</a></li>
              {/* <li><a href="">Support</a></li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
