import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  IoCalendarOutline,
  IoFolderOpen,
  IoPersonCircle,
} from "react-icons/io5";
import "./postHeader.css";
const postHeader = ({ title, pagetitle }) => {
  return (
    <>
      <div className="project-page">
        <div className="projectText">
          <h1>
            This Is Why This Year Will Be The Year <br></br>
          </h1>
          <h1>Of Food Truck</h1>
          <div className="project-icon">
            <p>
              <div className="d-flex justify-content-center gap-3 mt-2">
                <span className="d-flex align-items-center gap-1">
                  <IoPersonCircle className="text-warning" /> John Doe
                </span>
                <span className="d-flex align-items-center gap-1">
                  <IoCalendarOutline className="text-warning" /> August 1, 2022
                </span>
                <span className="d-flex align-items-center gap-1">
                  <IoFolderOpen className="text-warning" /> Insight
                </span>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default postHeader;
