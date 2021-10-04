import React from 'react';
import { Link } from 'react-router-dom';

const Regi = () => {
    return (
        <div className="fw-bold text-center">
            <h1>Registartion page on construcation</h1>
            <Link to="/">
                <button  className="btn btn-danger mb-4 mt-4">
                Back to Home
                </button>
            </Link>
        </div>
    );
};

export default Regi;