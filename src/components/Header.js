import { useNavigate } from 'react-router-dom';
import React from 'react';
import '../styles/Header.css';
// import './test'
import logo_soft from './../images/logo_soft.png';

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className='header'>
            <script href="./test.js"></script>
            <img id='logo_soft' onClick={() => navigate('/')} src={logo_soft} alt='logo_soft' />
            <ul className='header-menu'>

                <li className='header-menu-item' onClick={() => navigate('/jeu')}>Jeu</li>
                <li className='header-menu-item' onClick={() => navigate('/univers')}>Univers</li>
                <li className='header-menu-item' onClick={() => navigate('/media')}>Médias</li>

                <li className='header-menu-item' onClick={() => navigate('/lequipe')}>L'équipe</li>
                <li className='header-menu-item' onClick={() => navigate('/contact')}>Contact</li>
            </ul>
        {/* </div> */}

             {/* <div id="mySidenav" className="sidenav">
             <a id="closeBtn" href="#" className="close">&times;</a>
             <ul>
                 <li><a href="#">A propos</a></li>
                 <li><a href="#">Nos services</a></li>
                 <li><a href="#">Témoignages</a></li>
                 <li><a href="#">Contact</a></li>
             </ul>
             </div>

             <a href="#" id="openBtn">
             <span className="burger-icon">
                 <span></span>
                 <span></span>
                 <span></span>
             </span>
             </a> */}
         </div>
    );
}

export default Header;