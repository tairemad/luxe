import React from 'react';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
import logo from '../img/logo.png';
import './header.css';

const Header = () => {
    return(
        <React.Fragment>
        <nav>
            <div className="links">
                <ul>
                    <li><a href='#services'>Services</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#testimonials'>Testimonials</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </div>
            <div className="logo"> <img src={logo} alt="Luxe Studio Spa"/></div>
            <div className="contacts">
                <ul>
                    <li><a href="sms:5086850543">508-685-0543</a></li>
                    <li><a href="mailto:luxestudiospa@gmail.com"><FaEnvelope/></a></li>
                    <li><a href="https://www.instagram.com/luxestudiospa/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a></li>
                </ul>
            </div>
        </nav>
        <header>
         <div className="right">
             <h1>Get Noticed</h1>
             <a className="book" href="sms:5086850543">Book Now</a>
         </div>
       </header>
    </React.Fragment>
    );
}

export default Header;