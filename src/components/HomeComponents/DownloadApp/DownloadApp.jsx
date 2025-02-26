import React from "react";
import { motion } from "framer-motion";
import "./Download.css";
import "bootstrap/dist/css/bootstrap.min.css";
import appStore from "../../../assets/app-store.png";
import googlePlay from "../../../assets/google-play-badge-new.png";
import mobileMockup from "../../../assets/Delitruck-apps-ZTCXVW2-min.png";

const DownloadApp = () => {
  return (
    <div className="container-fluid downloadAppSection">
      <div className="background-shape">
        
        <motion.div 
          className="mobilemockupimage"
          initial={{ y: 100, opacity: 0, scale: 0.8 }} 
          whileInView={{ y: 0, opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }} 
        >
          <img src={mobileMockup} alt="Mobile Mockup" />
        </motion.div>

        <motion.div 
          className="download-content"
          initial={{ opacity: 0, scale: 0.8 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }} 
        >
          <h2>DOWNLOAD OUR MOBILE <span>APPS</span></h2>
          <p>Get 1 free food you want and get attractive prizes!</p>
          
          <motion.div 
            className="download-buttons"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img src={appStore} alt="App Store" />
            <img src={googlePlay} alt="Google Play" />
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default DownloadApp;
