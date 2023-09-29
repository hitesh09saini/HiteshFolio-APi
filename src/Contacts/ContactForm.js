import './Form.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_3yhomxg', 'template_55m2o7a', form.current, 'QO7CVs1_E4LzoHERM')
      .then((result) => {
        console.log(result.text);
        console.log("Message Sent");
      }, (error) => {
        console.log(error.text);
      });
  };



  return (

    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>

  );
}

export default ContactForm;
