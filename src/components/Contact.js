import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Container} from 'react-bootstrap'

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
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
            );
        };

  return (
    <Container id='contact' className='contact-main'>
            <h2 className='header-clr'>Contact</h2>
            <div className="divider"></div><br/>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
    </Container>
  )
}

export default Contact