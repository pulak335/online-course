import React from 'react';
import { Link } from 'react-router-dom';

const Course = (props) => {
    const{course, author, rate, view, price,img}=props.course;
    return (
        <div>
            <div className="col mb-4">
                <div className="card">
                <img src={img} className="card-img-top" alt="course"/>
                <div className="card-body">
                    <h5 className="card-title">{course}</h5>
                    <h6 className="card-title">Author: {author}</h6>
                    <h3 className="card-title text-danger fw-bold">${price}</h3>
                    <p className="card-text d-flex justify-content-between">
                        <p><i className="far fa-star text-danger"></i> {rate}</p>
                        <p><i className="far fa-eye text-info"></i> {view}</p>
                    </p>
                </div>
                <Link to='/registration'>
                <button className="btn btn-danger  w-100">Enroll Now</button>
                </Link>
                </div>
            </div>
        </div>

    );
};

export default Course;