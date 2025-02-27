import React from 'react'
import './page.css'
import PageHeader from '../../components/Page/PageHeader/PageHeader';
import FRQ from '../../components/Page/FRQ/FRQ';
import Footer from '../../components/Footer/Footer';


const Page = () => {
  return (
    <>
       <PageHeader title="FAQ" breadcrumb="FAQ" />
       <FRQ/>
       <Footer/>
    </>
  )
}

export default Page
