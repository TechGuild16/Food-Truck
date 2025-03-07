import React from 'react'
import './Menu.css'
import PageHeader from '../../components/Page/PageHeader/PageHeader';
import FoodMenu from '../../components/HomeComponents/Menu/FoodMenu';
// import Menuimg from '../../components/Menu/Menuimg';
import OurSchedule from '../../components/HomeComponents/OurSchedule/OurSchedule';
// import Offer from '../../components/HomeComponents/SpecialOffer/Offer';
// import React, { useState } from 'react';

const Menu = () => {
  return (
    <div>
      <PageHeader title="Our Menu" breadcrumb="Our Menu"/>

      {/* <Menuimg/> */}

      <FoodMenu/>
      {/* <Offer/> */}
       <OurSchedule/> 
   
    </div>
  )
}

export default Menu
