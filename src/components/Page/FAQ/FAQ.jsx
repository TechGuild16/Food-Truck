import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import './FAQ.css';

const FAQ = () => {
    const Question = [
        {
            about: "IS STARTING A FOOD TRUCK PROFITABLE?",
            arrow: <FaAngleDown />,
            description: "Yes, food trucks can be highly profitable with the right location, menu, and marketing strategy. Lower overhead costs compared to restaurants make them an attractive business option."
        },
        {
            about: "WHAT PERMITS DO I NEED FOR A FOOD TRUCK?",
            arrow: <FaAngleDown />,
            description: "You typically need a business license, health permit, fire permit, and parking permits. Requirements vary by location, so check with local authorities."
        },
        {
            about: "HOW CAN I ATTRACT MORE CUSTOMERS TO MY FOOD TRUCK?",
            arrow: <FaAngleDown />,
            description: "Use social media marketing, offer loyalty programs, participate in local events, and ensure your truck stands out with a unique design and great customer service."
        },
        {
            about: "WHAT ARE THE BIGGEST CHALLENGES IN RUNNING A FOOD TRUCK?",
            arrow: <FaAngleDown />,
            description: "Challenges include finding good locations, handling permits, managing food costs, and dealing with weather conditions. Proper planning and adaptability are key."
        }
    ];
    

    const [openIndex, setOpenIndex] = useState(null);

    const toggleDescription = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }
    return (
        <>
            <div className="container FAQPage">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="page">
                            <h3>FAQ's</h3>
                            <h2>GENERAL <span>QUESTION</span></h2>
                            <p>Here you’ll find answers to the most common questions. If you need further assistance, feel free to contact our support team.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="faq-container">
                            {Question.map((item, index) => (
                                <div key={index} className="faq-item">
                                    <div className="faq-header">
                                        <h3 style={{ color: openIndex === index ? "yellow" : "white" }}>
                                            {item.about}
                                        </h3>

                                        <p
                                            className="faq-arrow"
                                            style={{ color: openIndex === index ? "yellow" : "white" }}
                                            onClick={() => toggleDescription(index)}
                                        >
                                            {openIndex === index ? <FaAngleUp /> : <FaAngleDown />}
                                        </p>
                                    </div>
                                    <hr className="faq-hr" />
                                    {openIndex === index && <p className="faq-description">{item.description}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQ;
