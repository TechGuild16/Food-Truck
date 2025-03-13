import React from 'react'
import FAQ from '../../components/Page/FAQ/FAQ';
import BlogContent from '../../components/Blog/BlogContent/blogcontent';
import VideoSection from '../../components/Home/VideoSection/VideoSection';
import PageHeader from '../../components/Page/PageHeader/PageHeader';


const Page = () => {
  return (
    <>
       <PageHeader title="FAQ" breadcrumb="FAQ" />
       <FAQ/>
       <VideoSection/>
       <BlogContent/>
    </>
  )
}

export default Page
