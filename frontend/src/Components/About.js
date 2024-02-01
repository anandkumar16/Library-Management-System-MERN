import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About the Library</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=913&q=80" alt="" />
                </div>
                <div>
                    <p className="about-text">
                    Welcome to our Library Management System - a collaborative effort aimed at revolutionizing the way libraries function. Our project is designed to streamline and enhance the entire library experience, offering an efficient and user-friendly platform for both librarians and patrons.<br/>

                        <br/>
                        With a focus on innovation and user convenience, our team has diligently worked to develop a comprehensive system that simplifies book tracking, inventory management, and user interactions. From intuitive search features to automated lending processes, we strive to make library operations seamless and enjoyable.<br/>

                        <br/>
                        Join us on this journey to transform traditional libraries into dynamic hubs of information, where technology meets literature, and the joy of reading is amplified. Explore the future of library management with us!"<br/>
                        
                        <br/>
                        Your suggestions for improvement are always welcome!
                    </p>
                </div>
            </div>
        </div>
    )
}


export default About
