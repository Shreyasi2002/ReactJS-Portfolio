import React from 'react'

import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';

import ScrollReveal from 'scrollreveal';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

// Get these from https://www.emailjs.com/
const SERVICE_ID = "";
const TEMPLATE_ID = "";
const PUBLIC_KEY = "";

class Contact extends React.Component {
    refs = React.createRef();
    componentDidMount() {
        const config = {
            reset: false,
            distance: '60px',
            duration: 1000,
            delay: 10,
            origin: 'top',
            easing: 'ease-in',
        };
        ScrollReveal(config)
        ScrollReveal().reveal(this.refs.cobox1);
        ScrollReveal().reveal(this.refs.cobox2, { origin: 'left', delay: 100 });
    }
    render() {
        const handleOnSubmit = (e) => {
            e.preventDefault();
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
              .then((result) => {
                console.log(result.text);
                Swal.fire({
                  icon: 'success',
                  title: 'Message Sent Successfully'
                })
              }, (error) => {
                console.log(error.text);
                Swal.fire({
                  icon: 'error',
                  title: 'Ooops, something went wrong',
                  text: error.text,
                })
              });
            e.target.reset()
          };
        return (
            <div className='contact-me'>
                <div className='contact-header' ref="cobox1"> 
                <h1>Contact Me</h1>
                    <div id='hr' ></div>
                    <div id='bold-sec-hr'></div>
                </div>
                <div className='contact-content' ref="cobox2">
                <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='from_email'
          placeholder='Email ...'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='from_name'
          placeholder='Name ...'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='message'
          placeholder='Message ...'
          required
                        />
                        <br/><br/>
                        <Button type='submit'>
                        <FontAwesomeIcon className='icon-button' icon={faPaperPlane} /> Send Message
                        </Button>
      </Form>
                </div>
            </div>
     );
    }
}

export default Contact;