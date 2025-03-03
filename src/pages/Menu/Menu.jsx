import React from 'react'
import './Menu.css'
import "bootstrap/dist/css/bootstrap.min.css";
import PageHeader from '../../components/Page/PageHeader/PageHeader';

const Menu = () => {
  return (
    <div className='container-fluid'>
     <PageHeader title="OUR MENU" breadcrumb="Our Service" />
    </div>
  )
}

export default Menu
