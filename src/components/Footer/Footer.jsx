import React from 'react';
import './Footer.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLocationDot, FaTwitter } from "react-icons/fa6";
import { FaPhoneAlt, FaFacebookF, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdWatchLater } from "react-icons/md";
import logo from '../../assets/logo.png'
import InputBox from '../inputbox/InputBox';
import Button from '../Button/Button';
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="container-fluid  food-footer">
        <div className="row">
          <div className="col-3">
           <img src={logo} className='truckimage' alt="" />
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi deserunt quisquam eum!</h6>
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
          <div className="col-3 linkstag">
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
            <p href="" className='d-flex align-items-center gap-4'><FaLocationDot color='#ffc108' />  Mumbai, Maharastra</p>
            <p href="" className='d-flex align-items-center gap-4'><FaPhoneAlt   color='#ffc108'  />  +9123456789</p>
            <p href="" className='d-flex align-items-center gap-4'><IoMdMail color='#ffc108'  />  infoExample@gmail.com</p>
            <p href="" className='d-flex align-items-center gap-4'><MdWatchLater color='#ffc108'  />  07.00 AM - 19.00 PM</p>
          </div>
          <hr className='myhr' />

          <div className="row  ">
              <div className="col-6 susb">
                 <div className="footer-bottom">
                 <h3>SUBSCRIBE OUR <br /><span>NEWSLETTER</span></h3>
                 </div>
              </div>
              <div className="col-6">
                <div className="footer-bottom-button d-flex align-items-center gap-2">
                <InputBox classname="footerinput" placeholder="Enter your email"  />
                <Button title="Subscribe" classname="footerbutton" icon={<FaTelegramPlane />} />
                </div>
                
              </div>
              <hr />
              <div className="d-flex footerbottomer align-items-center justify-content-between">
                <p>Food Truck Template Kit by Jegtheme</p>
                <p>Copyright © 2022. All rights reserved.</p>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
