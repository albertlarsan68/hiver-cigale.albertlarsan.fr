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

            <div>
                <h1>L'équipe</h1>
                <p>Découvrez ici un coup d'œil les créateurs du futur jeu phénomène.
                    <br></br>
                    N'hésiter pas à voir leur travail ou à les contacter pour de futures missions !</p>
            </div>

            <div className='members'>
                <div className='box-dev'>
                    <div className='dev'>
                        <img id='dev-img' src={dev1} alt='dev1' />
                        <h3>Axel BATTIGELLI (aka Axous)</h3>
                        <h4>Développement</h4>
                        <h4>Mail: <a className='links' href="mailto:axel.battigelli@epitech.eu">axel.battigelli@epitech.eu</a></h4>
                        <h4>LinkedIn: <a className='links' href="https://www.linkedin.com/in/axel-battigelli">https://www.linkedin.com/in/axel-battigelli</a></h4>
                        <h4>Github: <a className='links' href="https://github.com/AxelBattigelli">https://github.com/AxelBattigelli</a></h4>
                    </div>
                </div>

                <div className='box-dev'>
                    <div className='dev'>
                        <img id='dev-img' src={dev2} alt='dev2' />
                        <h3>Tissia ECKLING</h3>
                        <h4>Graphisme</h4>
                        <h4>Mail: <a className='links' href="mailto:tissia.eckling@epitech.eu">tissia.eckling@epitech.eu</a></h4>
                    </div>
                </div>

                <div className='box-dev'>
                    <div className='dev'>
                        <img id='dev-img' src={dev3} alt='dev3' />
                        <h3>Anicet OTT--FLO</h3>
                        <h4>Architecture</h4>
                        <h4>Mail: <a className='links' href="mailto: anicet.ottmann-florentin@epitech.eu">anicet.ottmann-florentin@epitech.eu</a></h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lequipe;
