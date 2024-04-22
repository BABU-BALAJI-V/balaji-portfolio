import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm('service_e7fj1dr', 'template_ygws5n9', form.current, {
            publicKey: '7_psy8IUDH5wm0Awj',
            })
            .then(
            () => {
                
                console.log('SUCCESS!');
                    Swal.fire({
                    title: "Done!",
                    text: "Email Sent!",
                    icon: "success"
                  });
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
            );
        };

  return (
    <Container id='contact' className='form-div'>
            <h2 className='header-clr'>Contact</h2>
            <div className="divider"></div><br/>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

            <Form ref={form} onSubmit={sendEmail}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="name" placeholder="First Name" name="user_name"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="name" placeholder="Last name" name="user_Lname"/>
                    </Form.Group>                    
                </Row>

                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="user_email"/>
                </Form.Group> 

                <Form.Group className="mb-3" controlId="formGridPhoneno">
                    <Form.Label>Phone.no</Form.Label>
                    <Form.Control placeholder="Phone.no" name="user_ph_no"/>
                </Form.Group>

                <label>Message</label>
                <textarea name="message" />

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
    </Container>
  )
}

export default Contact