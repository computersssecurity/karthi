import React from 'react';
import './Contactus.css';
import { useNavigate } from 'react-router-dom';

function ContactForm() {
  return (
    <div className="container">
      <form>
        <h1>Send Message</h1>
        <input type="text" id="firstName" placeholder="First Name" required />
        <input type="text" id="lastName" placeholder="Last Name" required />
        <input type="email" id="email" placeholder="Email" required />
        <input type="text" id="mobile" placeholder="Mobile" required />
        <textarea required placeholder='Type Your Message Here...'></textarea>
        <input type="submit" value="Send" id="button" />
      </form>
    </div>
  );
}

export default ContactForm;