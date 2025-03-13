import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import foodtruck from "../../assets/truck.png";
import Button from "../../components/Button/Button";
import WatchVideoButton from "../../components/VideoButton/WatchVideoButton";
import { motion } from "framer-motion";
import DownloadApp from "../../components/Home/DownloadApp/DownloadApp";
import DeliciousFood from "../../components/Home/DeliciourFood/DeliciousFood";
import Experience from "../../components/Home/Experience/Experience";
import FoodMenu from "../../components/Home/Menu/FoodMenu";
import VideoSection from "../../components/Home/VideoSection/VideoSection";
import OurSchedule from "../../components/Home/OurSchedule/OurSchedule";
import CustomerReview from "../../components/Home/customerReview/CustomerReview";
import Offer from "../../components/Home/SpecialOffer/Offer";
import BlogContent from "../../components/Blog/BlogContent/blogcontent";
import VideoSection2 from "../../components/Home/VideoSection/VideoSection2";
import Blog from "../Blog/Blog";

const Home = () => {
  return (
    <>
    <div className="home-container container-fluid">
      <div className="home-content  d-flex align-items-center">
        <motion.div
          className="text-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          >
          <h6 className="text-warning">WELCOME TO STORETRUCK</h6>
          <h1 className="text-black" style={{marginTop : "1vw"}}>
            THE HOT AND SAVORY <br/> <span className="text-warning " >MEAL TRUCK</span>
          </h1>
          <p className="text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean<br/> commodo ligula eget dolor. 
            Aenean massa. Cum sociis natoque<br/> penatibus et magnis dis parturient montes.
          </p>
          <div className="buttons mt-4">
            <Button title="order online" classname='samebutton' />
            <WatchVideoButton />
          </div>
        </motion.div>

          <motion.div
            className="image-section"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 2 }}
            transition={{ duration: 10, type: "spring", stiffness: 70 }}
          >
            <img src={foodtruck} alt="Food Truck" className="food-truck-img" />
          </motion.div>
        </div>
        <DownloadApp />
        <DeliciousFood />
      </div>
      <Experience />
      <FoodMenu />
      <VideoSection />
      <OurSchedule />
      <VideoSection2 />
      <BlogContent />
          </>
  );
};

export default Home;
