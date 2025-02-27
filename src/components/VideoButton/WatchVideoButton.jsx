import React from "react";
import { motion } from "framer-motion";
import "./WatchVideoButton.css";

const WatchVideoButton = () => {
  return (
    <div className="watch-video-container">
      {/* Play Button with Pulse Effect */}
      <div className="play-button">
        <motion.div
          className="pulse-effect"
          animate={{ scale: [1, 1.5, 2], opacity: [1, 0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        <div className="semi-circle"></div>
        <div className="inner-circle">
          <div className="play-icon"></div>
        </div>
      </div>

      {/* Watch Video Text */}
      <span className="watch-video-text">WATCH VIDEO</span>
    </div>
  );
};

export default WatchVideoButton;
