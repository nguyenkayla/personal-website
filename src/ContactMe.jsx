import React from 'react';
import emailjs from 'emailjs-com';

const SERVICE_ID = "service_t8be1hj";
const TEMPLATE_ID = "template_ptyu9j3";
const PUBLIC_KEY = "wvcgeSTrrax0JNSyO";

const ContactMe = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            alert('Message Sent Successfully')
          }, (error) => {
            console.log(error.text);
            alert('Something went wrong!')
          });
        e.target.reset()
      
    };

    return (
        <section id="Contact" className="contact--section">
            <div>
                <p className="sub--title">
                    Get in touch!
                </p>
                <h2>Contact Me</h2>
            </div>
            <form className="contact--form--container" onSubmit={handleOnSubmit}>
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input type="text" className="contact--input text-md" name="first-name" id="first-name" required></input>
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input type="text" className="contact--input text-md" name="last-name" id="last-name" required></input>
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input type="email" className="contact--input text-md" name="email" id="email" required></input>
                    </label>
                    <label htmlFor="topic" className="contact--label">
                        <span className="text-md">Topic</span>
                        <input type="topic" className="contact--input text-md" name="topic" id="topic" required></input>
                    </label>
                </div>
                    <label htmlFor="message" className="contact--label">
                        <span className="text-md">Message</span>
                        <textarea className="contact--input text-md" id="message" rows="8" placeholder="Type your message..."></textarea>
                    </label>
                <div className="btn btn-primary contact--form--btn" type='submit'>
                    Submit
                </div>
            </form>
        </section>
    );
}

export default ContactMe;