import React from "react";
import Banner from "../../components/Blog/Banner/banner";

import "./Blog.css";
import BlogContent from "../../components/Blog/BlogContent/blogcontent";

const Blog = () => {
  return (
    <>
      <div>
        <Banner title="Our Blogs" pagetitle="Our Blog" />
        <BlogContent />
      </div>
    </>
  );
};

export default Blog;
