import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./banner.css";
const banner = ({ title, pagetitle }) => {
  return (
    <>
      <div className="project-page">
        <div className="projectText">
          <h1>{title}</h1>
          <div className="project-icon">
            <p>
              <span>Home</span> <IoIosArrowForward /> {pagetitle}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default banner;
