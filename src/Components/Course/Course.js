import React, { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Course.css";

const Course = ({ course, color }) => {
    // destructed course details
    const { title, imgURL, category, lessons, trainer, rating, ratedPeople, price, discountPrice, id } = course;

    const categoryStyle = { backgroundColor: color };

    const [enrolled, SetEnrolled] = useState(0);
    // for checking enrolled or not
    useEffect(() => {
        if (localStorage.getItem(id) == "1") {
            SetEnrolled(1);
        }
        else {
            SetEnrolled(0);
        }
    }, [])

    const enrollBtnHandler = key => {
        localStorage.setItem(key, "1");
        SetEnrolled(1);
    }
    return (
        <Card className="single-card" style={{
            width: '95%', position: "relative"
        }}>
            <div style={categoryStyle} className="category">{category}</div>
            <div className="card-img-container">
                <Card.Img className="card-img" variant="top" src={imgURL} />
            </div>
            <Card.Body>
                <div className="card-top d-flex justify-content-between">
                    <p>
                        <span style={{ color: "gray" }}><i className="fas fa-book-reader"></i></span> {lessons} Lessons
                    </p>
                    <p>
                        <span style={{ color: "#eeb422" }}><i className="fas fa-star"></i> </span>
                        <span>{rating}</span> ({ratedPeople})
                    </p>
                </div>

                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <div className="trainer-info d-flex align-content-center mt-4">
                        <div className="trainer-img">
                            <div className="user-icon">
                                <i className="fas fa-user-graduate"></i>
                            </div>
                        </div>
                        <p className="trainer-name">{trainer}</p>
                    </div>
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>
                    <div className="d-flex justify-content-between">
                        <div className="price">
                            <span style={{ color: "#3776ff" }} className="main-price">
                                <strong>
                                    ${discountPrice ? discountPrice : price}
                                </strong>
                            </span>
                            {
                                discountPrice && <span className="cross-price"> (<small> {price} </small>)</span>
                            }
                        </div>
                        {
                            enrolled ?
                                <p style={{ margin: "0px", fontSize: "1.1rem" }}>Enrolled <span style={{ color: "blue" }}>
                                    <i className="fas fa-check"></i></span>
                                </p>
                                : <button onClick={() => enrollBtnHandler(course.id)} className="enroll-btn">Enroll Now</button>
                        }
                    </div>
                </ListGroupItem>
            </ListGroup>
        </Card>
    );
};

export default Course;