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
            <p>Motivated and ambitious Computer Science student
            passionate about pushing programming boundaries. Proactive
            problem solver with a drive for excellence and eagerness to
            learn. Ready to make a meaningful impact and contribute to a
            dynamic team.</p>
        </div>
        <div className='AboutMain'>
            <div className='picture'>
            <Row>
                <Col xs={6} md={4}>
                    <Image className='dp-pic' height="430px" src={require('../Images/profilepic.jpg')} rounded />
                </Col>
            </Row>    
            </div>
            <div className='bio'>
                <h3>Full Stack Web Developer.</h3>
                <p className='fw-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='main-bio shadow-sm p-3 mb-5 bg-body rounded'>
                    <div className='arrow-clr left-bio fs-5 '>
                        <p><i className="bi bi-chevron-right"></i> <b>Birthday: </b>  4 Aug 2002</p>
                        <p><i className="bi bi-chevron-right"></i> <b>Website: </b>  www.example.com</p>
                        <p><i className="bi bi-chevron-right"></i> <b>Phone: </b> 8778418841</p>
                        <p><i className="bi bi-chevron-right"></i> <b>City: </b> THANJAVUR, TAMIL NADU</p>
                    </div>
                    <div className='arrow-clr right-bio fs-5 '>
                        <p><i className="bi bi-chevron-right"></i> <b>Age: </b>  21</p>
                        <p><i className="bi bi-chevron-right"></i> <b>Degree: </b>  B.TECH - CSE</p>
                        <p><i className="bi bi-chevron-right"></i> <b>PhEmailone: </b>  babu.balajijr@gmail.com</p>
                        <p><i className="bi bi-chevron-right"></i> <b>Freelance: </b>  Available</p>
                    </div>
                </div>
                <p className='bio-ptag'>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>
            </div>
        </div>
    </Container>
  )
}

export default About