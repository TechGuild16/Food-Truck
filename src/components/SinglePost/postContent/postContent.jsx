import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  FaChevronRight,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import PostImg1 from "../../../assets/singlePost-img-1.jpg";
import PostImg2 from "../../../assets/singlePost-img-2.jpg";
import SinglePostMain from "../../../assets/singlePost-main-img.jpg";
import "./postContent.css";
const postContent = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-start main-container">
      {/* Left Image Section */}
      <div className="image-container">
        <img
          src={SinglePostMain} // Replace with your actual image URL
          alt="Food Truck"
          className="img-fluid rounded"
        />
        <p className="text-secondary mt-3">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus.
        </p>
        <h3 className="text-white mt-5">
          10 Things You Should Do In Food Truck
        </h3>
        <p className="text-secondary mt-3">
          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
          ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
          tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
          amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
          luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
          tincidunt tempus.
        </p>
        <div className="container d-flex justify-content-center my-4">
          <div className="d-flex gap-3">
            <img
              src={PostImg1}
              alt="Food truck scene 1"
              className="rounded"
              style={{ maxWidth: "50%" }}
            />
            <img
              src={PostImg2}
              alt="Food truck scene 2"
              className="rounded"
              style={{ maxWidth: "50%" }}
            />
          </div>
        </div>
        <h3 className="text-white mt-5">Seven Top Risks Of Food Truck</h3>
        <p className="text-secondary mt-3">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus.
        </p>
        <div className="container-fluid  text-white py-3">
          <div className="row align-items-center">
            {/* Tags Section */}
            <div className="col-md-6 text-md-start text-center mb-2 mb-md-0">
              <strong>Tags :</strong>{" "}
              <span className="text-warning">Insight</span>
            </div>

            {/* Social Share Section */}
            <div className="col-md-6 text-md-end text-center">
              <strong>Share This :</strong>
              <span className="ms-2">
                <a href="#" className="text-warning mx-1">
                  <FaFacebookF size={20} />
                </a>
                <a href="#" className="text-warning mx-1">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-warning mx-1">
                  <FaLinkedinIn size={20} />
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* input-form */}

        <div className=" my-5">
          <div style={{ borderRadius: "10px" }}>
            <h4 className="text-light fw-bold">LEAVE A REPLY</h4>
            <p className="text-light">
              Your email address will not be published. Required fields are
              marked *
            </p>

            <div className="mb-3">
              <label className="text-light fw-bold" htmlFor="name">
                Name *
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                style={{ borderRadius: "10px" }}
              />
            </div>

            <div className="mb-3">
              <label className="text-light fw-bold" htmlFor="email">
                Email *
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                style={{ borderRadius: "10px" }}
              />
            </div>

            <div className="mb-3">
              <label className="text-light fw-bold" htmlFor="website">
                Website
              </label>
              <input
                type="text"
                className="form-control"
                id="website"
                style={{ borderRadius: "10px" }}
              />
            </div>

            <div className="mb-3">
              <label className="text-light fw-bold" htmlFor="comment">
                Comment *
              </label>
              <textarea
                className="form-control"
                id="comment"
                rows="5"
                style={{ borderRadius: "10px" }}
              ></textarea>
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="saveInfo"
              />
              <label className="form-check-label text-light" htmlFor="saveInfo">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>

            <button className="btn btn-warning">Post Comment</button>
          </div>
        </div>
      </div>

      {/* Right Content Section */}
      <div className="content-container d-flex flex-column align-items-center">
        {/* Recent Posts Section */}
        <div
          className="first p-4 text-white"
          style={{
            maxWidth: "400px",
            borderRadius: "10px",
          }}
        >
          <h4 className="text-warning fw-bold mt-3">RECENT POST</h4>
          <div className="post">
            <h6 className="text-light">
              HOW TECHNOLOGY IS CHANGING HOW WE TREAT FOOD TRUCKS
            </h6>
            s<p className="text-secondary">📅 August 3, 2022</p>
          </div>
          <div className="post">
            <h6 className="text-light">
              TEN COMMON MISTAKES EVERYONE MAKES IN FOOD TRUCK
            </h6>
            <p className="text-secondary">📅 August 1, 2022</p>
          </div>
          <div className="post">
            <h6 className="text-light">
              Is Food Truck Any Good? 10 Ways You Can Be Certain
            </h6>
            <p className="text-secondary">📅 August 1, 2022</p>
          </div>
          <div className="post">
            <h6 className="text-light">
              Seven Important Life Lessons Food Truck Taught Us
            </h6>
            <p className="text-secondary">📅 August 1, 2022</p>
          </div>
        </div>

        {/* Have Any Question Section */}
        <div
          className="second mt-4 p-4 text-white"
          style={{
            backgroundColor: "#651b1b",
            maxWidth: "400px",
            borderRadius: "10px",
          }}
        >
          <h5 className="fw-bold text-warning">HAVE ANY QUESTION?</h5>
          <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <p className="d-flex align-items-center gap-2">
            <FaPhoneAlt className="text-warning" /> (+62) 81 2345 6789
          </p>
          <p className="d-flex align-items-center gap-2">
            <FaEnvelope className="text-warning" /> delitruck@domain.com
          </p>
        </div>

        {/* Categories Section */}
        <div
          className="third mt-4 p-4 text-white"
          style={{
            backgroundColor: "#651b1b",
            maxWidth: "400px",
            borderRadius: "10px",
          }}
        >
          <h5 className="fw-bold text-warning">CATEGORIES</h5>
          <ul className="list-unstyled mt-2">
            <li className="d-flex align-items-center text-light">
              <FaChevronRight className="text-warning me-2" /> Trends
            </li>
            <li className="d-flex align-items-center text-light mt-2">
              <FaChevronRight className="text-warning me-2" /> Tips & Tricks
            </li>
            <li className="d-flex align-items-center text-light mt-2">
              <FaChevronRight className="text-warning me-2" /> News
            </li>
            <li className="d-flex align-items-center text-light mt-2">
              <FaChevronRight className="text-warning me-2" /> Insight
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default postContent;
