import React from "react";
import { motion } from "framer-motion";
import "./Download.css";
import "bootstrap/dist/css/bootstrap.min.css";
import appStore from "../../../assets/app-store.png";
import googlePlay from "../../../assets/google-play-badge-new.png";
import mobileMockup from "../../../assets/Delitruck-apps-ZTCXVW2-min.png";
import rectangle from '../../../assets/Rectangle 2.png'
import rectangle2 from '../../../assets/rectangle3.png'
const DownloadApp = () => {
  return (
    <div className="container-fluid downloadAppSection">
        <div className="mockupSizeAdjusted">
          <div className="mockupsizeimage">
          <img src={rectangle} alt="" />
          <img src={mobileMockup} alt="" />
          <div className="mockup-content">
            <h1>DOWNLOAD OUR MOBILE <span>APPS</span></h1>
          <p className="opacity0">

          dsfsssss
          </p>
          <div className="mockup-content2">
            <p>Get 1 free food you want and get attractive prizes!
            </p>
          </div>
          <div className="buttonmokcup">
          <div className=" d-flex align-items-center">
                <img src={appStore} alt="" />
            </div>
                <img src={googlePlay} alt="" />
          </div>
          </div>
  
          </div>
        </div>
        <div className="responsivedonwloadAppSection">
         <div className="mokcupimage">
          <img src={rectangle2} alt="" />
         </div>
         <div className="mobilemockimage">
          <img src={mobileMockup} alt="" />
         <div className="mock-tagline">
          <h1>Downlaod Our Mobile <span>Apps</span></h1>
          <p>Get 1 free food you want and get attractive prizes!</p>
          <div className="d-flex mylogos align-items-center gap-2 justify-content-center">
              <img src={appStore} alt="" />
              <img src={googlePlay} alt="" />
          </div>
         </div>
         </div>
        </div>


    </div>
  );
};

export default DownloadApp;
