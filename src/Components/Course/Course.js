import React from 'react';
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Course.css";

const Course = ({ course }) => {
    const { title, imgURL, category, lessons, trainer, rating, ratedPeople, price, discountPrice } = course;
    return (
        <Card style={{ width: '95%' }}>
            <Card.Img variant="top" src={imgURL} />
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
                        <div className="btn">Add to Cart</div>
                    </div>
                </ListGroupItem>
            </ListGroup>
        </Card>
    );
};

export default Course;