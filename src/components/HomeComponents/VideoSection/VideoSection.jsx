import React from 'react'
import './VideoSection.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from 'framer-motion';
import video1 from '../../../assets/foodTruck.mp4'
import WatchVideoButton from '../../VideoButton/WatchVideoButton';

const VideoSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <motion.div
      className='videoMainSection'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <video src={video1} muted loop autoPlay></video>
      <div className="contentofvideo text-center ">
        <WatchVideoButton includeText={false} />
        <h1>WE SERVE YOU THE <span>BEST FOOD</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient</p>
      </div>
    </motion.div>
  )
}

export default VideoSection