import React from 'react';

const Extra = ({ data }) => {
    return (
        data.map(course => {
            return (<div style={{ border: "1px solid goldenrod" }}>
                <h4>{course.title}</h4>
                <img style={{ width: "200px" }} src={course.imgURL} alt="" />
            </div>)
        })
    );
};

export default Extra;