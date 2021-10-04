import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import cover from '../../images/banner.png';
import Course from './Course';
import './Home.css'

const Home = () => {
    const [courses, setCourses] = useState([]);
    // collecting the data from data base
    useEffect(()=>{
        fetch('./courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div className="container">
            {/* start header */}
            <div className="w-100 bg-danger d-flex align-items-center rounded-top rounded-3">
                <div className="p-5">
                    <h2 className='fw-bolder text-white fw-bold'>Start learning with our experts and give a new way to your career.</h2>
                    <h5 className='mt-5 fst-normal text-white'>From a wide range of courses, you can select the best one for you.</h5>
                </div>
                <div>
                    <img className='p-4' style={{width:'400px'}} src={cover} alt="alt-text"></img>
                </div>
            </div>
            {/* end header */}
            {/* start choice course*/}
            <div>
                <h1 className="m-5">Get choice of your course</h1>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                      courses.map(course=><Course key={course.id} course={course}></Course>) 
                    }              
                </div>
            </div>
            
            {/* end choice course*/}
            {/* start get yourself industry*/}
            <div className="container mt-5 p-5 text-center bg-dark me-time">
                <h1 className="text-white pb-3 fw-bold">It's high time to get yourself industry ready!</h1>
                <h5 className="text-white pb-3 fw-light">Learn and find the best match for your career with our courses to get a successful path. So join Skilify now and have a shiny career.</h5>
                <Link to="/serivce">
                <button className="btn btn-danger text-center">Get Started</button>
                </Link>
            </div>
            {/* end get yourself industry*/}

            {/* start students have to say*/}
            <div className=" container p-5 ">
                <h1 className="fw-bold">What our students have to say</h1>
                <div className="d-flex">
                    <div className="p-3">
                        <div className="d-flex align-items-center mb-2 ">
                        <img src="http://skilify.theuxuidesigner.com/images/webp/user3.webp" alt=''></img>
                        <h3 className='ms-3'>Bradley Smythe</h3>
                        </div>
                        <p> Skilify is the best platform to learn new technologies and courses. I have learned a lot many things from this platform.</p>
                    </div>
                    <div className="p-3">
                        <div className="d-flex align-items-center mb-2">
                        <img src="http://skilify.theuxuidesigner.com/images/webp/user4.webp" alt=''></img>
                        <h3 className='ms-3'>Mahir Dindsa</h3>
                        </div>
                        <p> If you search for a platform that can provide you the best learning courses, then I would recommend you Skilify only. </p>
                    </div>
                    <div className="p-3">
                    <div className="d-flex align-items-center mb-2">
                    <img src="http://skilify.theuxuidesigner.com/images/webp/user3.webp" alt=''></img>
                    <h3 className='ms-3'>Oliver Smith</h3>
                    </div>
                    <p> I would tell all people to register for Skilify now as they offer the best courses at affordable rates.</p>
                    </div>
                </div>
            </div>
            {/* end students have to say*/}
        
            {/* start partners*/}
            <div>
                <h1 className=" p-4 fw-bold">Trusted by our awesome partners</h1>
                <div className="d-flex justify-content-between mb-5">
                    <img src='http://skilify.theuxuidesigner.com/images/webp/partner1.webp' alt=''></img>
                    <img className="ms-5" src='http://skilify.theuxuidesigner.com/images/webp/partner.webp' alt=''></img>
                    <img className="ms-5" src='http://skilify.theuxuidesigner.com/images/webp/partner3.webp' alt=''></img>
                    <img className="ms-5" src='http://skilify.theuxuidesigner.com/images/webp/partner2.webp' alt=''></img>
                </div>
            </div>
            {/* end partners*/}
        </div>
    );
};

export default Home;