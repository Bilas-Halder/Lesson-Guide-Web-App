import React from 'react';
import "./About.css";

const About = () => {
    return (
        <div className="d-flex justify-content-center" style={{ marginTop: "6rem", height: "100%", width: "100%" }}>
            <div style={{ textAlign: "center" }} className="about-container">

                <h1 style={{ textAlign: "center", marginTop: "2rem" }}>About Us</h1>

                <h3 style={{ marginTop: "3rem" }}>
                    Hello every one i am Bilas Halder. <br />
                    I am student of CSE Department in Leading University. <br />
                    I am the designer of this web app. <br />
                    if you want to see my other works, <br /> <br />
                    <a style={{ color: "blue" }} href="https://github.com/Bilas-Halder">Click Here</a>
                </h3>

            </div>
        </div>
    );
};

export default About;