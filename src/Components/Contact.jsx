import React from 'react';
import '../styles/Contact.scss';

const Contact = () => {
  return (
    <div className='contact-section'>
      <p className="contact-header">Connect with Us</p>
      <h4 className="contact-description">
        Explore our diverse range of design projects and be inspired.
      </h4>
      {/* <a href="mailto:satisficiency@gmail.com"> */}
        <button className="contact-button">Contact</button>
        {/* </a> */}
    </div>
  );
};

export default Contact;
