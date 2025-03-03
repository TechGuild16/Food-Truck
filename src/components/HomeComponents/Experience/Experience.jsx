import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";
import foodDelivery from "../../../assets/foodDelievery.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../../Button/Button";

const Experience = () => {
  return (
    <div className="container-fluid experience">
      <div className="experienceUpsideTriange"></div>
      
      <div className="row experience-main-div">
        
        <motion.div 
          className="col-md-6  d-flex align-items-center justify-content-center"
          initial={{ opacity: 0, y: 100, scale: 0.8 }} 
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }} 
        >
          <div className="experience-photo-frame">
            <div className="inner-photo-frame">
              <img src={foodDelivery} alt="" />
              <div className="experiencediv text-center">
                <h1>12 +</h1>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="col-md-6 experience-right-section"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} 
          viewport={{ once: true }}
        >
          <p>ABOUT US</p>
          <h1>
            WE ARE THE BEST FOOD TRUCK SINCE 2010
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            <br /> commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            <br /> penatibus et magnis dis parturient montes.
          </p>
          <div className="button">
            <Button title="ABOUT US" classname='samebutton' />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Experience;
