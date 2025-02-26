import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Delicious.css";
import burger from "../../../assets/burger.png";
import fries from "../../../assets/fries.png";
import drink from "../../../assets/drink.png";

const floatAnimation = {
  y: [0, -10, 0], // Move up and down
  transition: {
    duration: 1.5,
    ease: "easeInOut",
    repeat: Infinity,
  },
};

const DeliciousFood = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={sectionRef}
      className="container-fluid delicous-food-section"
      initial={{ opacity: 0, y: 50 }} // Start hidden and slightly lower
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex align-items-center gap-2">
            <div className="col-md-6 decliciousfood-content">
              <h1>
                OUR BEST<br /> <span>DELICIOUS FOOD</span>
              </h1>
            </div>
            <div className="col-md-6 decliciousfood-content-p">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
            </div>
          </div>

          <div className="d-flex align-items-center gap-4 delicious-food-boxes">
            <motion.div
              className="col-md-4 fooodbox d-flex align-items-center gap-2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.img
                src={burger}
                alt="Burger"
                whileHover={{ y: -10 }}
                animate={floatAnimation}
              />
              <div className="food-content">
                <p>DELI FOOD</p>
                <p>Order now &rarr;</p>
              </div>
            </motion.div>

            <motion.div
              className="col-md-4 fooodbox d-flex align-items-center gap-2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.img
                src={fries}
                alt="Fries"
                whileHover={{ y: -10 }}
                animate={floatAnimation}
              />
              <div className="food-content">
                <p>DELI SNACK</p>
                <p>Order now &rarr;</p>
              </div>
            </motion.div>

            <motion.div
              className="col-md-4 fooodbox d-flex align-items-center gap-2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.img
                src={drink}
                alt="Drink"
                whileHover={{ y: -10 }}
                animate={floatAnimation}
              />
              <div className="food-content">
                <p>BEVERAGES</p>
                <p>Order now &rarr;</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default DeliciousFood;
