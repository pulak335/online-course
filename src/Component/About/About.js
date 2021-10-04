import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div className='container'>
            <h1 className='p-5 fw-bold'>Global Skills Development and Digital Service Providing Institute</h1>
            <p className="mt-3 mb-5 p-5">CodersTrust is a purpose-driven, global skill development organization. It was created with a desire to make a tangible difference in the lives of the underprivileged, disadvantaged, and underserved population as a whole. The youth, especially the female community, who struggle to find a comfortable living, is our prime concern.
            <br></br>
            <br></br>

            The vision of CodersTrust is to provide technical and soft-skill education for students/trainees in the Global South and emerging markets. We believe, if we facilitate the right tools for teaching skills that would likely be out of their reach, they will have an opportunity and a real chance to join the global workforce. Our focus is primarily on an IT-based training platform. However, our course fees are very reasonable. We also offer scholarship courses for those who are not financially sound. We successfully worked with DANIDA, UNDP, World Bank, WFP, Dutch Foundation, Swanirvar Bangladesh, BRAC, CARE Bangladesh, Ministry Of ICT Bangladesh, Ministry of Expatriates’ Welfare and Overseas Employment and PKSF. Our recognition comes from the ICT Division of Bangladesh, National Skill Development Authority (NSDA), BASIS, and BITAC for our successful training and mentorship.</p>

            <div className="box mb-5 d-flex align-items-center justify-content-between">               
                <h1 className='text-white fw-bold p-5 my-head'>Join our student community</h1>
                <Link to="/registration">
                <button className="btn btn-danger fw-bold m-5 p-3">JOIN US</button>
                </Link>
            </div>
        </div>
    );
};

export default About;