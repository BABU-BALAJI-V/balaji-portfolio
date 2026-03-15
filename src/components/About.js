import React from 'react'
import {Container} from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const About = () => {
  return (
    <Container>
        <div className='About' id="About">
            <h2 className='header-clr'>About</h2>
            <div className="divider"></div><br/>
            <p>I am a Full-Stack Developer specializing in the MERN stack, dedicated to building robust web applications that bridge the gap between complex logic and seamless user experiences. With a strong foundation in JavaScript, ReactJS, and Node.js, I focus on writing clean, maintainable code and optimizing end-to-end performance. I thrive on solving real-world challenges through efficient architecture and secure, scalable design.</p>
        </div>
        <div className='AboutMain'>
            <div className='picture'>
            <Row>
                <Col xs={6} md={4}>
                    <Image className='dp-pic' height="430px" src={require('../Images/ProfilePicture.jpg')} rounded />
                </Col>
            </Row>    
            </div>
            <div className='bio'>
                <h3>Full Stack Web Developer.</h3>
                <p className='fw-light'>Full-stack developer focused on building scalable MERN applications with clean architecture and seamless user experiences.</p>
                <div className='main-bio shadow-sm p-3 mb-5 bg-body rounded'>
                    <div className='arrow-clr left-bio fs-5 '>
                        <p><i className="bi bi-chevron-right"></i> <b>Birthday: </b>  4 Aug 2002</p>
                        <p><i className="bi bi-chevron-right"></i> <b>Website: </b>  https://balaji-portfolio.pages.dev</p>
                        <p><i className="bi bi-chevron-right"></i> <b>Phone: </b> 8778418841</p>
                        <p><i className="bi bi-chevron-right"></i> <b>City: </b> Bangalore, TAMIL NADU</p>
                    </div>
                    <div className='arrow-clr right-bio fs-5 '>
                        <p><i className="bi bi-chevron-right"></i> <b>Age: </b>  23</p>
                        <p><i className="bi bi-chevron-right"></i> <b>Degree: </b>  B.TECH - CSE</p>
                        <p><i className="bi bi-chevron-right"></i> <b>Email: </b>  babu.balajijr@gmail.com</p>
                        <p><i className="bi bi-chevron-right"></i> <b>Company: </b>  Tata Consultancy Services</p>
                    </div>
                </div>
                <p className='bio-ptag'>I am a dedicated and highly focused Full-Stack Developer who thrives on the challenge of building complex digital systems from the ground up. My approach to development is defined by consistency and technical curiosity; I don't just solve problems—I dive deep into the "why" to ensure every solution is secure, scalable, and efficient.</p>
            </div>
        </div>
    </Container>
  )
}

export default About