import React from 'react';
import './Footer.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLocationDot, FaTwitter } from "react-icons/fa6";
import { FaPhoneAlt, FaFacebookF, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdWatchLater } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <div className="container  food-footer">
        <div className="row">
          <div className="col-3">
            <h4>DELITRUCK</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi deserunt quisquam eum!</p>
            <div className="footer-icons">
              <div className="footer-icon">
                <FaFacebookF />
              </div>
              <div className="footer-icon">
                <FaTwitter />
              </div>
              <div className="footer-icon">
                <FaInstagramSquare />
              </div>
              <div className="footer-icon">
                <FaYoutube />
              </div>
            </div>
          </div>
          <div className="col-3">
            <h4>QUICK LINKS</h4>
            <p href="">About us</p>
            <p href="">Menu</p>
            <p href="">Schedule</p>
            <p href="">Team</p>
            <p href="">Contact</p>
          </div>
          <div className="col-3">
            <h4>USEFUL LINKS</h4>
            <p href="">Privacy Police</p>
            <p href="">Terms and Conditions</p>
            <p href="">Disclaimers</p>
            <p href="">Support</p>
            <p href="">FAQ</p>
          </div>
          <div className="col-3">
            <h4>GET IN TOUCH</h4>
            <p href=""><FaLocationDot /> Mumbai, Maharastra</p>
            <p href=""><FaPhoneAlt /> +9123456789</p>
            <p href=""><IoMdMail /> infoExample@gmail.com</p>
            <p href=""><MdWatchLater /> 07.00 AM - 19.00 PM</p>
          </div>
          <hr />

          <div className="row ">
              <div className="col-6">
                 <div className="footer-bottom">
                 <h3>SUBSCRIBE OUR <br /><span>NEWSLETTER</span></h3>
                 </div>
              </div>
              <div className="col-6">
                <div className="footer-bottom-button">
                <input type="text" />
                </div>
                
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
