import React from 'react';

const Contact = () => {
    return (
        <div className="container">
            {/* start contact information */}
            <h1 className="fw-bold text-center">Contact Us</h1>
            
            <div className="d-flex justify-content-between">
            {/* start free  Consultation*/}
            <div className="mb-5 text-danger">
                <h1 className="m-5">Free Consultation</h1>
                    <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label text-black">Email address</label>
                    <input type="email" className="form-control border-danger" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>

                    <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label text-black">Phone number</label>
                    <input  type="number" className="form-control border-danger" id="exampleFormControlInput1" placeholder="+880"/>
                    </div>

                    <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label text-black">Textarea</label>
                    <textarea className="form-control border-danger" id="exampleFormControlTextarea1" rows="4"></textarea>
                    </div>
                    <button className="btn btn-outline-danger">Submit</button>
            </div>
            {/* end free  Consultation*/}

            {/* start free  Head Office information*/}
            <div className="mb-5 text-danger">
                <h1 className="m-5">Head Office</h1>
                <h5 className="text-black mb-5">Phone<br></br>
                01785649464</h5>
                <h5 className="text-black mb-5">Address<br></br>
                House# 82, Road# 19/A,
                Block# E, Dhanmondi, Dhaka-1213</h5>
                <h5 className="text-black mb-5">Email Us<br></br>
                hello@elearningbd.com</h5>
            </div>
            {/* end free  Head Office information*/}
            </div>
            {/* end contact information */}
        </div>
    );
};

export default Contact;