import React, { useState } from 'react';
import './Form.css'

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(true);
  
      addClass();
    };
  
    const addClass = () => {
      document.body.classList.add('sent');
    };
    
  

  return (
    <div className="wrapper centered">
      <article className="letter">
        <div className="side">
        
          <form onSubmit={handleSubmit}>
            <p>
              <textarea
                placeholder="Your message"
                name="message"
              ></textarea>
            </p>
          </form>
        </div>
        <div className="side">
          <form onSubmit={handleSubmit}>
            <p>
              <input
                type="text"
                placeholder="Your name"
                name="name"
              />
            </p>
            <p>
              <input
                type="email"
                placeholder="Your email"
                name="email"
              />
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </article>
       
     
    </div>
    
  );
}

export default ContactForm;
