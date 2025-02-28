import React from "react";
import Banner from "../../components/Blog/Banner/banner";
import BlogContainer from "../../components/Blog/BlogContent/blogContent";
import "./Blog.css";
const Blog = () => {
  return (
    <>
      <div>
        <Banner title="Our Blogs" pagetitle="Our Blog" />
        <BlogContainer />
      </div>
    </>
  );
};

export default Blog;
