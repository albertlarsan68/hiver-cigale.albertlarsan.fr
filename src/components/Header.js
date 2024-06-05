import { useNavigate } from 'react-router-dom';
import React from 'react';
import '../styles/Header.css';
import './test'
import logo_soft from './../images/logo_soft.png';

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className='header'>
            <script href="./test.js"></script>

            <div id="mySidenav" className="sidenav">
                <a id="closeBtn" href="#" className="close">&times;</a>
                <ul>
                    <li className='header-menu-item' onClick={() => navigate('/jeu')}>Jeu</li>
                    <li className='header-menu-item' onClick={() => navigate('/univers')}>Univers</li>
                    <li className='header-menu-item' onClick={() => navigate('/media')}>Médias</li>
                    <li className='header-menu-item' onClick={() => navigate('/lequipe')}>L'équipe</li>
                    <li className='header-menu-item' onClick={() => navigate('/contact')}>Contact</li>
                </ul>
            </div>

            <a href="#" id="openBtn">
                <span className="burger-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </a>
            <img id='logo_soft' onClick={() => navigate('/')} src={logo_soft} alt='logo_soft' />

        </div>
    );
}

export default Header;