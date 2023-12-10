import React, { useRef } from 'react';

function ContactForm() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = {
      email: formData.get('user_email'),
      name: formData.get('user_name'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/send/mail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Mail sent successfully');
        // You may want to reset the form or show a success message here
      } else {
        console.error('Failed to send mail');
        // Handle the error, show an error message, etc.
      }
    } catch (error) {
      console.error('Error sending mail:', error);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Name" />
      <input type="email" name="user_email" placeholder="Your email" />
      <label htmlFor="message">Message:</label>
      <textarea name="message" id="message" placeholder="Hey!" />
      <input type="submit" id="submit" value="Send" />
    </form>
  );
}

export default ContactForm;
