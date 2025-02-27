import React from 'react'
import './PageHeader.css'
import { RiArrowRightSLine } from "react-icons/ri";
const PageHeader = ({ title, breadcrumb }) => {
  return (
    <>
      <div className="pageHeader-page">
        <div className="pageText">
          <h1>{title}</h1>
          <div className="page-Text">
            <p><span>Menu</span> <RiArrowRightSLine className='page-icon'/> {breadcrumb}</p>
          </div>
        </div>
      </div>
      <hr />
    </>

  )
}

export default PageHeader;
