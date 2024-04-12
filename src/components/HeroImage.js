import React from 'react'
import Image from 'react-bootstrap/Image';
import {Col,Row} from 'react-bootstrap'

const HeroImage = () => {
  return (
    <div className='hero-img'>
        <Row>
          <Col lg={12}>
                <Image  width="100%" src={require('../Images/online-certification.jpeg.webp')} fluid />;             
          </Col>
        </Row>
      </div>
  )
}

export default HeroImage