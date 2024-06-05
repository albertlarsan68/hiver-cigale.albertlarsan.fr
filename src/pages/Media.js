import React from 'react';
import './../styles/Media.css'
import img1 from './../images/in_game/1.png';
import img2 from './../images/in_game/2.png';
import img3 from './../images/in_game/3.png';
import img4 from './../images/in_game/4.png';
import img5 from './../images/in_game/5.png';
import img6 from './../images/in_game/6.png'

function Media() {
    return (
        <div className="Media">
            <div>
                <h1>Médias (Screenshots)</h1>
                <p>Découvrez un aperçu de ce à quoi notre ressemble !
                    <br></br>
                    C'est coloré, c'est unique alors prenez en plein les yeux !</p>
            </div>
            <br></br>

            <div className='portofolio'>
                <div>
                    <img id='media-img' src={img1} alt="Screenshot 1" />
                    <br></br>
                    <span>La cigale devant sa maison</span>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>

                <div>
                    <img id='media-img' src={img2} alt="Screenshot 2" />
                    <br></br>
                    <span>La cigale devant sa maison</span>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>

                <div>
                    <img id='media-img' src={img3} alt="Screenshot 3" />
                    <br></br>
                    <span>La cigale devant sa maison</span>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>

                <div>
                    <img id='media-img' src={img4} alt="Screenshot 4" />
                    <br></br>
                    <span>La cigale devant sa maison</span>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>

                <div>
                    <img id='media-img' src={img5} alt="Screenshot 5" />
                    <br></br>
                    <span>La cigale devant sa maison</span>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>

                <div>
                    <img id='media-img' src={img6} alt="Screenshot 6" />
                    <br></br>
                    <span>La cigale devant sa maison</span>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </div>
    );
}

export default Media;
