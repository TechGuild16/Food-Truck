import React from 'react';
import './AboutTruck.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCrosshairs, FaBullseye } from 'react-icons/fa';
import { motion } from 'framer-motion';
import truck from '../../assets/truck.png';

const AboutTruck = () => {
  return (
    <Container fluid className="about-truck">
      <motion.div 
        className="truck-image"
        initial={{ x: '100vw', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50, duration: 1.5 }}
        viewport={{ once: true }}
      >
        <img src={truck} alt="Truck" className="truck-img" />
      </motion.div>
      <Row className="mission-vision">
        <Col md={4} className="mission">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <FaCrosshairs className="icon" />
            <h3>OUR MISSION</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            </p>
          </motion.div>
        </Col>
        <Col md={4} className="vision">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <FaBullseye className="icon" />
            <h3>OUR VISION</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            </p>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutTruck;