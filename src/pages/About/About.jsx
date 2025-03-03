import React from 'react'
import './About.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import AboutExperience from '../../components/AboutComponent/AboutExperience';
import AboutTruck from '../../components/AboutComponent/AboutTruck';
import DownloadApp from '../../components/HomeComponents/DownloadApp/DownloadApp';
import OurTeam from '../../components/AboutComponent/OurTeam';
const About = () => {
  return (
    <>
    <div className='AboutSection ' >
        <div className="aboutDirection">
              <h1>ABOUT<span> US</span></h1>
              <div className="d-flex align-items-center gap-2 justify-content-center">
                    <p>Menu <RiArrowDropRightLine color='black' /> About us </p>
              </div>
        </div>
    </div>
        <AboutExperience />
        <AboutTruck />
        <div style={{marginTop : "20vw"}} className='donwloadappfix'>
        <DownloadApp />
        </div>
        <OurTeam />
    </>
  )
}

export default About
