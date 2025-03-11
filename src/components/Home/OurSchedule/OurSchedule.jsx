import React from 'react';
import './Ourschedule.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCalendarAlt, FaHome, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import eat from '../../../assets/eat.jpg'
const OurSchedule = () => {
  return (
    <div className='ourScheduleSection d-flex align-items-center justify-content-center'>
      <div className="container">
        <div className="ourschedule text-center">
          <h1>Our <span>Schedule</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean<br /> commodo ligula eget dolor aenean massa.</p>
        </div>
        <div className="row mt-5 ">
          <div className="col-lg-4 col-md-12 d-flex align-items-center justify-content-center">
            <img src={eat} alt="Festival" className="img-fluid  imageSec rounded" />
          </div>
          <div className="col-lg-4 col-md-12 carderfoodoursched text-white bg-dark rounded p-4">
            <h2>DENPASAR FESTIVAL 2022</h2>
            <ul className="list-unstyled mt-3 myulist">
              <li><FaCalendarAlt color='yellow' /> August 20, 2022</li>
              <li><FaHome  color='yellow'/> Stand Number 20th</li>
              <li><FaClock  color='yellow'/> Start 06:00 AM - Until Finish</li>
              <li><FaMapMarkerAlt  color='yellow'/> Gor Ngurah Rai, Denpasar - Bali</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 d-flex align-items-center justify-content-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.0487321278194!2d115.21582537466704!3d-8.65673469142245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2413c0cc03c21%3A0x2f45e43c6f4a933c!2sGOR%20Ngurah%20Rai!5e0!3m2!1sen!2sid!4v1648730443905!5m2!1sen!2sid"
              width="100%"
              height="250"
              style={{ border: '0', borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>


      
    </div>
  );
};

export default OurSchedule;
