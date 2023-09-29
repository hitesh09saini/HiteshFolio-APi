
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_3yhomxg', 'template_55m2o7a', form.current, 'CnH-TtgGn1JGZaTBC')
      .then((result) => {
        console.log(result.text);
        console.log("Message Sent");
      }, (error) => {
        console.log(error.text);
      });
  };



  return (

    <form ref={form} onSubmit={sendEmail}>

      <input type="text" name="user_name" placeholder='Name' />

      <input type="email" name="user_email" placeholder='Your email' />
      <label htmlFor="message">Message:</label>
      <textarea name="message" id='message' placeholder='Hye !' />
      <input type="submit" id='submit' value="Send" />

    </form>


  );
}

export default ContactForm;
