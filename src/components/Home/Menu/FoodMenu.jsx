import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import './FoodMenu.css';
import food1 from '../../../assets/foodimg1.jpg';
import food2 from '../../../assets/foodimg2.jpg';
import food3 from '../../../assets/foodimg3.jpg';
import food4 from '../../../assets/foodimg4.jpg';
import food5 from '../../../assets/foodimg5.jpg';
import food6 from '../../../assets/foodimg6.jpg';
import food7 from '../../../assets/foodimg7.jpg';
import food8 from '../../../assets/foodimg8.jpg';
import snack1 from '../../../assets/foodimg6.jpg';
import snack2 from '../../../assets/foodimg2.jpg';
import snack3 from '../../../assets/foodimg6.jpg';
import beverage1 from '../../../assets/foodimg8.jpg';
import beverage2 from '../../../assets/foodimg3.jpg';
import beverage3 from '../../../assets/foodimg4.jpg';

const foodItems = [
  { name: 'BIG BEEF BURGER', price: '$42.00', image: food1 },
  { name: 'BEEF CHEESE BURGER', price: '$25.00', image: food2 },
  { name: 'CHICKEN TACO', price: '$15.00', image: food3 },
  { name: 'BEEF TACO', price: '$20.00', image: food4 },
  { name: 'BEEF HOTDOG', price: '$30.00', image: food5 },
  { name: 'CHEESE BURGER', price: '$35.00', image: food6 },
  { name: 'CHICKEN BURGER', price: '$30.00', image: food7 },
  { name: 'BIG MEETY', price: '$20.00', image: food8 }
];

const snackItems = [
  { name: 'SNACK 1', price: '$10.00', image: snack1 },
  { name: 'SNACK 2', price: '$12.00', image: snack2 },
  { name: 'SNACK 3', price: '$22.00', image: snack3 },
  { name: 'SNACK 4', price: '$22.00', image: snack3 }
];

const beverageItems = [
  { name: 'BEVERAGE 1', price: '$5.00', image: beverage1 },
  { name: 'BEVERAGE 2', price: '$7.00', image: beverage2 },
  { name: 'BEVERAGE 3', price: '$7.00', image: beverage3 },
  { name: 'BEVERAGE 4', price: '$7.00', image: beverage3 }
];

const FoodMenu = () => {
  const [activeCategory, setActiveCategory] = useState('FOOD');
  const ref = React.useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  const getMenuItems = (category) => {
    switch (category) {
      case 'FOOD':
        return foodItems;
      case 'SNACK':
        return snackItems;
      case 'BEVERAGE':
        return beverageItems;
      default:
        return [];
    }
  };

  const menuItems = getMenuItems(activeCategory);

  const categoryChange = (category) => {
    setActiveCategory(category);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const pageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={pageVariants}
      className="menu-container"
    >
      <h2 className="menu-title">OUR MENU</h2>
      <h3 className="menu-subtitle">THE <span className="highlight">BEST MENU</span> WE SERVE</h3>
      <p className="menu-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor<br/> sit amet, consectetur adipiscing elit</p>
      <div className="menu-categories">
        <Button className={`category-button ${activeCategory === 'FOOD' ? 'active' : ''}`} onClick={() => categoryChange('FOOD')}>FOOD</Button>
        <Button className={`category-button ${activeCategory === 'SNACK' ? 'active' : ''}`} onClick={() => categoryChange('SNACK')}>SNACK</Button>
        <Button className={`category-button ${activeCategory === 'BEVERAGE' ? 'active' : ''}`} onClick={() => categoryChange('BEVERAGE')}>BEVERAGE</Button>
      </div>
      <div className="menu-grid">
        <AnimatePresence mode="wait">
          {menuItems.map((item) => (
            <motion.div key={item.name} variants={cardVariants} initial="hidden" animate="visible" exit="hidden" layout>
              <Card className="menu-card">
                <Card.Img variant="top" src={item.image} alt={item.name} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text className='card-text-home'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
                  <div className="menu-footer">
                    <span className="menu-price">{item.price}</span>
                    <button>BUY ONLINE →</button>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default FoodMenu;
