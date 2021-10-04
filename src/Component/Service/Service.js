import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Allcourse from './AllCourse'

const Service = () => {
    const [state, setstate] = useState([]);

        // collecting the data from data base
    useEffect(()=>{
        fetch('./allcourse.json')
        .then(res=>res.json())
        .then(data=>setstate(data))
    },[])
    
    return (
            <div className="container">
                <h1 className="m-5">Our Service & course</h1>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                        {
                            state.map(course=><Allcourse key={course.id} course={course}></Allcourse>)
                        }           
                </div>
             {/* start get yourself industry*/}
            <div className="container mt-5 mb-5 p-5 text-center bg-dark me-time">
                <h1 className="text-white pb-3 fw-bold">It's high time to get yourself industry ready!</h1>
                <h5 className="text-white pb-3 fw-light">Learn and find the best match for your career with our courses to get a successful path. So join Skilify now and have a shiny career.</h5>
                <Link to="/registration">
                <button className="btn btn-danger text-center">Ready to Enrolled</button>
                </Link>
            </div>
            {/* end get yourself industry*/}
        </div>
    );
};

export default Service;