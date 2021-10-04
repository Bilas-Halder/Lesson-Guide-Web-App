import React from 'react';
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Course.css";

const Course = ({ course, color }) => {
    const { title, imgURL, category, lessons, trainer, rating, ratedPeople, price, discountPrice } = course;
    const categoryStyle = { backgroundColor: color }
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
                        <span style={{ color: "gray" }}><i class="fas fa-book-reader"></i></span> {lessons} Lessons
                    </p>
                    <p>
                        <span style={{ color: "#eeb422" }}><i class="fas fa-star"></i> </span>
                        <span>{rating}</span> ({ratedPeople})
                    </p>
                </div>

                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <div className="trainer-info d-flex align-content-center mt-4">
                        <div className="trainer-img">
                            <div className="user-icon">
                                <i class="fas fa-user-graduate"></i>
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
                        <div className="btn">Enroll Now</div>
                    </div>
                </ListGroupItem>
            </ListGroup>
        </Card>
    );
};

export default Course;