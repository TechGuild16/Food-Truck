import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import './Contact.css';
// import Contact2 from '../../components/ContactNew/Contact2';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    Subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        Subject: '',
        message: ''
      });
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <div className="Main container-fluid py-5">
      <div className="ContactHead text-center mb-5">
        <h1><span style={{ color: 'yellow' }}>CONTACT  </span>  US</h1>
        <p className="lead">
        <h5> Menu <i class="bi bi-chevron-right"></i> Contact Us </h5> 
        </p>              
      </div>
      <hr className="border-hr"></hr> 
      

      <div className="row mb-6">
        {/* Location and Map */}
        <div className="Textspace col-md-4 text-center mb-20">
          <p><h4>Got any Questions?</h4>
          <h1>GET IN TOUCH</h1>
          Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean massa.</p>
          
      <div className="row mb-5">
        {/* Contact Info Containers */}
        <div className="col-md-6">
          <div className="contact-info-container">
            <h4>Location</h4>
            <p>1234 Street, City, Country</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="contact-info-container">
            <h4>Phone</h4>
            <p>+1 234 567 890</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="contact-info-container">
            <h4>Email</h4>
            <p>contact@yourcompany.com</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="contact-info-container">
            <h4>Opening Hours</h4>
            <p>Mon-Fri: 9 AM - 6 PM</p>          
          </div>
        </div>
        <hr className="social-media-line" />
      </div>
      
   


      <div className="social-media text-center mt-5">
        <h4>
          OUR SOCIAL MEDIA
        <div className="social-icons mt-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
        </h4>
        </div>
        </div>

        {/* Contact Form */}
        <div className="MainForm col-md-6 text-center mb-4">
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="Subject"
                className="form-control"
                id="subject"
                name="Subject"
                value={formData.Subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              {formSubmitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
      
      </div>
      </div>
    </div>
      
      

    
   
  );
};

export default ContactPage;
