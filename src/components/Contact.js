import React from 'react';
import {BsTelephone} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';


import './Contact.css';

const Contact = () => {
  return (
    <div className='contact' >
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        If you have any questions or inquiries, please feel free to reach out to us using the form below.
      </p>

      <form>
        
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>

    <div className='map'>
    <iframe 
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15092622.45652832!2d63.97462145000001!3d22.552073900000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4fe2ab73314f%3A0xe10aa7f41c90c63b!2sTata%20Strive%20Extension%20Centre%20%2C%20Anand!5e0!3m2!1sen!2sin!4v1690811502224!5m2!1sen!2sin" 
     width="500" 
     height="400" 
     style={{ border: "0" }}
     allowfullscreen="" 
     loading="lazy" 
     referrerpolicy="no-referrer-when-downgrade">
    </iframe>
    
    <div>
    <a href="https://www.linkedin.com/in/prapti-madhariya-4a4224268"><BsTelephone className='con-icon' /></a>
  
    <BsWhatsapp className='con-icon'/>
    <BsFacebook className='con-icon'/>
    <BsLinkedin className='con-icon'/>
    <BsInstagram className='con-icon'/>
    </div>

    
    </div>
    

    </div> 
  );
};

export default Contact;