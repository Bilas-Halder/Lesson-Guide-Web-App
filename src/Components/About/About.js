import React from 'react';
import "./About.css";
import shape from "../../images/shape.png";

const About = () => {
    const heightStyle = {
        height: (window.innerHeight * 85 / 100) + "px",
        marginTop: "6rem",
        width: "100%"
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={heightStyle}>
            <div style={{ textAlign: "center", position: "relative" }} className="about-container">
                <div className="about-text">
                    <h1 style={{ textAlign: "center", marginTop: "3rem" }}>About Us</h1>

                    <h3 style={{ marginTop: "3rem" }}>
                        Hello every one i am Bilas Halder. <br />
                        I am student of CSE Department in Leading University. <br />
                        I am the developer of this web app. <br />
                        if you want to see my other project like this, <br /> <br />
                        <a style={{ color: "#2B4EFF" }} target="_blank" rel="noopener noreferrer" href="https://github.com/Bilas-Halder">Click Here</a>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default About;