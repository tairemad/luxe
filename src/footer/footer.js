import React from 'react';
import './footer.css';
import { TiHeart } from 'react-icons/ti';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <p>Copyright &copy; {year} - Luxe Studio Spa -  Made with <TiHeart/> by <a href="http://tairemadailey.com/" target="_blank" rel="noopener noreferrer">Tairema Dailey</a></p>
        </footer>
    );
}

export default Footer;