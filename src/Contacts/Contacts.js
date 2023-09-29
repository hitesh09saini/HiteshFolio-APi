import React from 'react'
import './Contacts.css'
import './Form.css';

import ContactForm from './ContactForm'
import SocialLinks from './SocialLinks'

const Contacts = ({id}) => {
  return (
    <div className='contact-cont' id={id}>
      <h1>Contacts.</h1>
      <ContactForm></ContactForm>
      <SocialLinks></SocialLinks>

      <p className='thanks'>Thankyou for visit 🙏</p>
    </div>
  )
}

export default Contacts
