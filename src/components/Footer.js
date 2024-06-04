import React from 'react';
import '../styles/Footer.css';
import logo_company from '../images/logo_company.png';

const Footer = () => {
    const get_year = new Date().getFullYear();
    const year = [];
    year.push(
        get_year
    );

    return (
        <footer className='footer'>
            <p>© {year} Axel Battigelli</p>
            <a href='https://www.epitech.eu/' target='_blank' rel='noopener noreferrer'>
                <img id='logo_company' src={logo_company} alt='Logo_company' />
            </a>
        </footer>
    );
};

export default Footer;