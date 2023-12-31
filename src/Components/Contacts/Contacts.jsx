import React, { useRef } from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineWhatsApp } from 'react-icons/ai'; // Corrected import for WhatsApp
import emailjs from '@emailjs/browser';
import './Contacts.css';

const Contacts = () => {
  const form = useRef(); // Define the form reference

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ky9jqqo', 'template_mu5u1b9', form.current, 'UPmXePw3jp8gSocIe')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="Contacts">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h4>anandaashish512@gmail.com</h4>
            <a href="mailto:anandaashish512@gmail.com">Send a Message</a>
          </article>

          <article className="contact__option">
            <FaInstagram className="contact__option-icon" />
            <h4>Messenger</h4>
            <h4>aashishanand379</h4>
            <a href="https://www.instagram.com/aashishanand379/">Send a Message</a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h4>+919525880998</h4>
            <a href="https://api.whatsapp.com/send?phone=919525880998">Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
