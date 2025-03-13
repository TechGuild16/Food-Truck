import React from 'react'
import './Menu.css'
import PageHeader from '../../components/Page/PageHeader/PageHeader';
import FoodMenu from '../../components/Home/Menu/FoodMenu';
// import Menuimg from '../../components/Menu/Menuimg';
import OurSchedule from '../../components/Home/OurSchedule/OurSchedule';
// import Offer from '../../components/HomeComponents/SpecialOffer/Offer';
// import React, { useState } from 'react';
import VideoSection2 from '../../components/Home/VideoSection/VideoSection2';

const Menu = () => {
  return (
    <div>
      <PageHeader title="Our Menu" breadcrumb="Our Menu"/>

      {/* <Menuimg/> */}

      <FoodMenu/>
      {/* <Offer/> */}
      <VideoSection2/>
       <OurSchedule/> 
   
    </div>
  )
}

export default Menu
