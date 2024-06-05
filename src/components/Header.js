import { useNavigate } from 'react-router-dom';
import React from 'react';
import '../styles/Header.css';
import logo_soft from './../images/logo_soft.png';
import './eventListerNavBar'

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className='header'>

            <div id="mySidenav" className="sidenav">
                <button id="closeBtn" className="close">&times;</button>
                <ul>
                    <li className='header-menu-item' onClick={() => navigate('/jeu')}>Jeu</li>
                    <li className='header-menu-item' onClick={() => navigate('/univers')}>Univers</li>
                    <li className='header-menu-item' onClick={() => navigate('/media')}>Médias</li>
                    <li className='header-menu-item' onClick={() => navigate('/lequipe')}>L'équipe</li>
                    <li className='header-menu-item' onClick={() => navigate('/contact')}>Contact</li>
                </ul>
            </div>

            <button id="openBtn" className='openBtn'>
                <span className="burger-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </button>
            
            <img id='logo_soft' onClick={() => navigate('/')} src={logo_soft} alt='logo_soft' />
        </div>
    );
}

export default Header;