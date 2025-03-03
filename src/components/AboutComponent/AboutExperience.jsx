import React from 'react'
import './Aboutexp.css'
import { motion } from 'framer-motion'
import foodDelivery from "../../assets/foodDelievery.jpg";
import { GiHamburger } from "react-icons/gi";
import { PiCertificateFill } from "react-icons/pi";
import Button from '../Button/Button';
const AboutExperience = () => {
  return (
    <div className="container-fluid getterexpe">
      <div className="experienceUpsideTriange"></div>
      
      <div className="row experience-main-div">
        
        <motion.div 
          className="col-md-6 d-flex  align-items-center justify-content-center"
          style={{zIndex : "100"}}
          initial={{ opacity: 0, y: 100, scale: 0.8 }} 
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }} 
        >
          <div className="experience-photo-frame">
            <div className="inner-photo-frame">
              <img src={foodDelivery} alt="" />
              <div className="experiencediv text-center uniquerdivver">
                <h1>12 +</h1>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        <motion.div 
          className="col-md-6 d-flex align-items-center uniquerdiv justify-content-center"
          initial={{ opacity: 0, y: 100, scale: 0.8 }} 
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }} 
        >
          <div className="experience-photo-frame">
            <div className="inner-photo-frame">
              <img src={foodDelivery} alt="" />
            </div>
          </div>
        </motion.div>
        </motion.div>
        <motion.div 
          className="col-md-6 experience-right-section"
          id='onlythis'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} 
          viewport={{ once: true }}
        >
          <p>ABOUT US</p>
          <h1>
            WE ARE THE BEST FOOD<br /> TRUCK <span style={{color: "yellow"}}>IN TOWN</span>    
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            <br /> commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            <br /> penatibus et magnis dis parturient montes.
          </p>
        <div className="d-flex align-items-center pt-2">
                <div className="flexcolumner">
                    <PiCertificateFill color='yellow' size={40} />
                    <h3 className='h3tagger pt-2'>Certificate</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                </div>
                <div className="flexcolumner">
                    <GiHamburger color='yellow' size={40} />
                    <h3 className='h3tagger pt-2'>Best Food</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                </div>
        </div>
                <div className="button">
                    <Button classname="samebutton" title="CONTACT US" />
                </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutExperience
