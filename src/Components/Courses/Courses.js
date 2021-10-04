import React, { useContext } from 'react';
import { DataContext } from '../../App';
import { Button, Row, Col, Container } from "react-bootstrap";
import "./Courses.css";
import Course from '../Course/Course';

const Courses = () => {
    // context api using for accessing data
    const data = useContext(DataContext);
    const colors = ["#4949ff", "#d19500", "#00b32f", "#c9009e", "#bf0c0c"];

    return (
        <div>
            <h1 className="courses-text" style={{ textAlign: "center" }}>All Our Courses</h1>
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
        </div>
    );
};

export default Courses;