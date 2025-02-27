import React from 'react'
import './page.css'
import PageHeader from '../../components/Page/PageHeader/PageHeader';
import FRQ from '../../components/Page/FRQ/FRQ';
import Footer from '../../components/Footer/Footer';
import Blog from '../../components/Blogs/Blog';

const Page = () => {
  return (
    <>
       <PageHeader title="FAQ" breadcrumb="FAQ" />
       <FRQ/>
       <Blog/>
       <Footer/>
    </>
  )
}

export default Page
