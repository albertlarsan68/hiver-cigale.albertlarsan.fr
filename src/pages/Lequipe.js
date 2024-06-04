import React from 'react';
// import QrCode from '../components/QrCode';
import '../styles/Lequipe.css';
import dev1 from './../images/axel.battigelli@epitech.eu.jpg';
import dev2 from './../images/tissia.eckling@epitech.eu.jpg';
import dev3 from './../images/anicet.ottmann-florentin@epitech.eu.jpg';

// import React, { useState, useEffect } from 'react';
// import Loading from './../components/Loading';

// function runFunction(setIsLoading) {
//     console.log("pass");
//     if (document.readyState == "complete") {
//         setIsLoading = false;
//     };
//     return setIsLoading;
// }

function Lequipe() {
    // const setIsLoading = true;
    // var t = setInterval(runFunction(setIsLoading), 1000);
   
    // if (setIsLoading) {
    //     return <Loading />;
    // } else {
    //     clearInterval(t);
    // }

    return (
        <div className="Lequipe">

            <div className='box-dev'>
                <div className='dev'>
                    <img id='dev1' src={dev1} alt='dev1' />
                    <h4>Axel BATTIGELLI</h4>
                    <h5>Développement</h5>
                </div>
            </div>

            <div className='box-dev'>
                <div className='dev'>
                    <img id='dev2' src={dev2} alt='dev2' />
                    <h4>Tissia ECKLING</h4>
                    <h5>Graphisme</h5>
                </div>
            </div>

            <div className='box-dev'>
                <div className='dev'>
                    <img id='dev3' src={dev3} alt='dev3' />
                    <h4>Anicet OTT--FLO</h4>
                    <h5>Architecture</h5>
                </div>
            </div>
        </div>
    );
}

export default Lequipe;
