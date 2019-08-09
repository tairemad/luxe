import React from 'react';
import './content.css';

const Contact = () => {
    return(
        <section id="contact">
                <h1>Contact</h1>
                <var>Contact Us</var>
                <div id="map">
                    <iframe className="map" title="Luxe Studio Spa" width="100%" height="100%" src="https://maps.google.com/maps?q=44%20Central%20St%20suite%20120%2C%20Foxborough%2C%20MA%2002035&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                </div>
                <div className="content">
                    <h2>BOOK APPOINTMENT</h2>
                    <p>Phone: <a className="contactInfo" href="sms:5086850543">(508) 685-0543</a></p>
                    <p>Email: <a className="contactInfo" href="mailto:luxestudiospa@gmail.com">luxestudiospa@gmail.com</a></p>
                    <h2>HOURS</h2>
                    <p>Sun & Mon: Closed</p>
                    <p>Tues - Thurs: 9am -9pm</p>
                    <p>Fri: 9am - 6pm</p>
                    <p>Sat: 9am - 5pm</p>
                </div>
          </section>
    );
}

export default Contact;
