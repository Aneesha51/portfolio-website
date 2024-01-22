import React, { useRef } from 'react';
import './contact.css';
import FacebookIcon from '../../Assets/facebook-icon.png';
import TwitterIcon from '../../Assets/twitter.png';
import InstagramIcon from '../../Assets/instagram.png';
import Github from '../../Assets/Github.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_1ddi6vc', 'template_7owb46h', form.current, 'lwYjpEauED0VMG1HC')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent!');
          }, (error) => {
              console.log(error.text);
          });
      };
    
  return (
   <section id='contactPage'>
    <div id='contact'>
        <h1  className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please complete the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name' name='from_name'/>
            <input type='email' className='email' placeholder='Your Email'name='from_email'/>
            <textarea className='msg' name='message' rows={5} placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className='submitBtn'>Submit</button>
            <div className='links'>
                <a href='https://www.facebook.com/aneesha.rangan' target='_blank'><img src={FacebookIcon} alt='Facebook' className='link'/></a>
                <a href='https://twitter.com/AneeshaRangan' target='_blank'><img src={TwitterIcon} alt='Twitter' className='link'/></a>
                <a href='https://www.instagram.com/aneesharangan/' target='_blank'><img src={InstagramIcon} alt='Instagram' className='link'/></a>
                <a href='https://github.com/Aneesha51' target='_blank'><img src={Github} alt='Github' className='link'/></a>
            </div>
        </form>
   </div>

   </section>
  );
}

export default Contact
