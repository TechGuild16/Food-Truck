import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import './FRQ.css';

const FRQ = () => {
    const Question = [
        {
            about: "ARE FOODS TRUCK GOOD BUSINESS?",
            arrow: <FaAngleDown />,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cumque dolore dolorem veritatis fugiat, dolorum quae labore sequi aliquam fugit."
        },
        {
            about: "HOW DO FOOD TRUCKS ATTRACT CUSTOMERS",
            arrow: <FaAngleDown />,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cumque dolore dolorem veritatis fugiat, dolorum quae labore sequi aliquam fugit."
        },
        {
            about: "HOW DO FOOD TRUCKS ATTRACT CUSTOMERS",
            arrow: <FaAngleDown />,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cumque dolore dolorem veritatis fugiat, dolorum quae labore sequi aliquam fugit."
        },
        {
            about: "HOW DO FOOD TRUCKS ATTRACT CUSTOMERS",
            arrow: <FaAngleDown />,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cumque dolore dolorem veritatis fugiat, dolorum quae labore sequi aliquam fugit."
        },

    ]

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
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus fugiat iusto soluta fugit distinctio quas facere veniam, maiores maxime dolorem assumenda ratione in unde doloremque.</p>
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

export default FRQ
