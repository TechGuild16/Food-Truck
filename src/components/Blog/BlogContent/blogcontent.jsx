import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import blogImg1 from "../../../assets/blog-img-1.jpg";
import blogImg2 from "../../../assets/blog-img-2.jpg";
import blogImg3 from "../../../assets/blog-img-3.jpg";
import blogImg4 from "../../../assets/blog-img-4.jpg";
import "./blogcontent.css";
const blogcontent = () => {
  const blogPosts = [
    {
      id: 1,
      category: "Tips & Trick",
      title: "HOW TECHNOLOGY IS CHANGING HOW WE TREAT FOOD TRUCKS",
      date: "August 3, 2022",
      excerpt:
        "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum...",
      image: blogImg1,
    },
    {
      id: 2,
      category: "Trends",
      title: "TEN COMMON MISTAKES EVERYONE MAKES IN FOOD TRUCK",
      date: "August 1, 2022",
      excerpt:
        "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum...",
      image: blogImg2,
    },
    {
      id: 3,
      category: "Business",
      title: "5 WAYS TO INCREASE FOOD TRUCK PROFITS THIS SUMMER",
      date: "July 28, 2022",
      excerpt:
        "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum...",
      image: blogImg3,
    },
    {
      id: 4,
      category: "Marketing",
      title: "SOCIAL MEDIA STRATEGIES FOR FOOD TRUCK OWNERS",
      date: "July 25, 2022",
      excerpt:
        "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum...",
      image: blogImg4,
    },
  ];
  return (
    <div className="blog-container">
      <div className="blog-heading text-center mb-5">
        <h4 className="text-uppercase fw-bold mb-3">OUR BLOG</h4>
        <h1 className="mb-3">
          LATEST <span className="">BLOGS & ARTICLES</span>
        </h1>
        <p className="mx-auto">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis.
        </p>
      </div>

      <div className="content">
        <div className="py-5">
          <div className="container">
            <div className="row g-4">
              {blogPosts.map((post) => (
                <div key={post.id} className="col-md-6">
                  <div className="d-flex rounded overflow-hidden shadow">
                    <div className="d-none d-sm-block" style={{ width: "40%" }}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="img-fluid object-fit-cover"
                        style={{
                          objectFit: "cover",
                          height: "300px",
                          width: "300px",
                        }}
                      />
                    </div>
                    <div className="p-4" style={{ width: "60%" }}>
                      <div className="mb-2">
                        <span style={{ color: "#FFB100" }} className="fw-bold">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="fw-bold mb-2 fs-5 text-white">
                        {post.title}
                      </h3>
                      <div className="d-flex align-items-center text-secondary mb-3 small">
                        <svg
                          width="16"
                          height="16"
                          className="me-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {post.date}
                      </div>
                      <p className="small text-secondary mb-3">
                        {post.excerpt}
                      </p>
                      <div
                        className="d-flex align-items-center fw-bold"
                        style={{ color: "#FFB100" }}
                      >
                        READ MORE
                        <svg
                          width="16"
                          height="16"
                          className="ms-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blogcontent;
