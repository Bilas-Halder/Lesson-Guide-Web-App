import React, { useContext, useEffect, useState } from 'react';
import "./Home.css";
import image from "../../images/bg_img.jpg";
import shape from "../../images/shape.png";
import { NavLink } from "react-router-dom";
import { Button, Row, Col, Container } from "react-bootstrap";
import Course from '../Course/Course';
import { DataContext } from "../../App";

const Home = () => {
    const [height, setHeight] = useState(0);
    // height is for window height
    const data = useContext(DataContext).slice(0, 6);
    // using context api

    const colors = ["#4949ff", "#d19500", "#00b32f", "#c9009e", "#bf0c0c"];
    // colors are for chosing random color for category

    useEffect(() => {
        setHeight(window.innerHeight * 22 / 100);
        // setting height as 22% of window height
    }, [window.innerHeight])

    const textStyle = {
        top: height
    };

    return (
        <div className="home-container">
            <div className="top-section">
                <div className="bg-img-div">
                    <img className="bg-img" src={image} alt="" />
                </div>
                <div className="text" style={textStyle}>
                    <h1 className="quote">
                        You can learn Anything from here
                    </h1>
                    <NavLink to={'/courses'}>
                        <Button className="custom-primary-btn">Courses</Button>
                    </NavLink>
                </div>
            </div>

            <div className="courses-section h-100">
                <h1 className="mt-5" style={{ textAlign: "center" }}>Our Courses</h1>
                <Container>
                    <Row>
                        {
                            data.map((course, idx) => {
                                const color = colors[Math.floor(Math.random() * 5)];
                                return (<Col key={idx} md={4} sm={12} >
                                    <Course key={course.id} color={color} course={course}></Course>
                                </Col>);
                            })
                        }
                    </Row>
                </Container>
                <div className="see-btn d-flex justify-content-center mb-5">
                    <NavLink to={'/courses'}>
                        <Button className="custom-primary-btn">See All Courses</Button>
                    </NavLink>
                </div>
            </div>

            <div style={{ width: "82%" }} className="container d-flex justify-content-center">
                <div className="signin-section">
                    <img src={shape} alt="" />
                    <div className="d-flex justify-content-between align-items-center m-5">
                        <h1 style={{ color: "white" }}>Want to be a trainer? <br /> Be a trainer on our online lectures</h1>
                        <NavLink className="signin-btn" to="/signin">Sign In</NavLink>
                    </div>
                </div>
            </div>

            <div className="container d-flex align-items-center justify-content-center" id="subscribe">
                <div>
                    <h3>LET'S STAY IN TOUCH</h3>
                    <h6>Get updates on sales, specials and more</h6>
                    <input className="form-control subscriber-form" type="text" />
                    <button className="custom-primary-btn submit-btn">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Home;