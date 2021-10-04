import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className="text-center">
            <h1 className="text-center">Page Not Found</h1>
            <img style={{width:'550px'}} src="http://skilify.theuxuidesigner.com/images/webp/page404.webp" alt=''></img><br></br>
            <Link to="/">
                <button  className="btn btn-danger mb-4">
                Back to Home
                </button>
            </Link>
        </div>
    );
};

export default Notfound;