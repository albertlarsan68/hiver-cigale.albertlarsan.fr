import React from 'react'
import './../styles/Jeu.css'
import video from './../videos/2024-06-03 14-22-32.mp4'
import video2 from './../videos/2024-06-03 14-27-00.mp4'

function Jeu() {
    return (
        <div className="Jeu">
            <div>
                <h1>Notre jeu</h1>
                <p>Insipiré de ...</p>
                <br></br>
            </div>

            <div>
                telecharger
            </div>

            <div>
                <h2>titer</h2>
                <p>srdtfyguhijkl</p>
                <br></br>
            </div>

            <div>
                <video id="video_background" preload="auto" autoplay="true" loop="loop">
                    <source src={video} type="video/mp4"></source>
                </video>
                <br></br>
                <span>Visite de maisons</span>
                <br></br>
            </div>

            <div>
                <h2>titer</h2>
                <p>srdtfyguhijkl</p>
                <br></br>
            </div>

            <div>
                <video id="video_background" preload="auto" autoplay="true" loop="loop">
                    <source src={video2} type="video/mp4"></source>
                </video>
                <br></br>
                <span>Visite de maisons</span>
                <br></br>
            </div>

            <div>
                <h2>titer</h2>
                <p>srdtfyguhijkl</p>
                <br></br>
            </div>
        </div>
    );
}

export default Jeu;
