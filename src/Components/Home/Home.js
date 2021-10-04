import React, { useContext, useEffect, useState } from 'react';
import "./Home.css";
import image from "../../images/bg_img.jpg";
import { NavLink } from "react-router-dom";
import { Button, Row, Col, Container } from "react-bootstrap";
import Course from '../Course/Course';
import { DataContext } from "../../App";

const Home = () => {
    const [height, setHeight] = useState(0);
    const data = useContext(DataContext);

    useEffect(() => {
        setHeight(window.innerHeight * 22 / 100);
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
            <div className="courses-section m-5">
                <Container>
                    <Row>
                        {
                            data.map((course, idx) => {
                                if (idx >= 3) return "";
                                return (<Col key={idx} md={4} sm={12} >
                                    <Course key={course.id} course={course}></Course>
                                </Col>);
                            })
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;