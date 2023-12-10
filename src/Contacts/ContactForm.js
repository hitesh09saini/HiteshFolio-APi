import React, { useRef, useState } from 'react';
import './Form.css';

function ContactForm() {
  const form = useRef();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMess] = useState('');
  const [loading, setLoading] = useState(false);
  const [btn, setBtn] = useState('Send Mail');
  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateEmail(email) || name.trim() === '' || message.trim() === '') {
      alert('Enter valid Email, Name, and Message');
      setLoading(false);
      return;
    }

    const data = {
      email: email,
      name: name,
      message: message,
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
        setBtn('Sent')
      } else {
        console.error('Failed to send mail');
        setBtn('Failed to sent ! Try again !')
      }
    } catch (error) {
      setBtn('Failed to sent ! Try again !')
      console.error('Error sending mail:', error);
    } finally {
      setEmail('');
      setMess('');
      setName('');
      setLoading(false);
    }
  };


  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };


  const spinnerStyle = {
    borderTop: '4px solid rgba(0, 0, 0, 0.1)',
    borderRight: '4px solid rgba(0, 0, 0, 0.1)',
    borderBottom: '4px solid rgba(0, 0, 0, 0.1)',
    borderLeft: '4px solid #3498db',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    animation: 'spin 1s linear infinite',
  };

  return (
    <div className="mailform">
      <form ref={form}>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="user_name" placeholder="Name" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="user_email" placeholder="Your email" />
        <label htmlFor="message">Message:</label>
        <textarea value={message} onChange={(e) => setMess(e.target.value)} name="message" id="message" placeholder="Hey!" />
        <div onClick={sendEmail} id='submit'>
         {loading ?'Sending...':btn} {loading ? <div style={spinnerStyle} /> : ''}
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
