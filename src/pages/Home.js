import React from 'react'
// import QrCode from '../components/QrCode';

function Home() {
    return (
        <div className="Home">
            L'Hiver de la Cigale est un jeu narratif et d'aventure qui plonge les joueurs dans un monde enneigé et poétique. Le jeu s'inspire de la célèbre fable de La Fontaine "La Cigale et la Fourmi", en revisitant l'histoire dans un cadre hivernal enchanteur.

            L'histoire se déroule dans un petit village niché au cœur d'une forêt, où les saisons rythment la vie des habitants. Vous incarnez la cigale talentueuse connue pour ses chants mélodieux. Contrairement aux autres insectes qui se préparent pour l'hiver en amassant des provisions, vous avez préféré passer vos journées à chanter et à explorer les environs.

            Un matin d'automne, vous découvrez qu'un hiver particulièrement rigoureux approche, menaçant de geler tout le village. Conscient de votre imprévoyance, vous décidez de partir à l'aventure pour trouver une solution et sauver ses amis. Votre périple vous ammène à travers des paysages enneigés, et à affronter divers ennemis.

            <video width="400" controls autoplay>
                <source src="https://albertlarsan.fr/trailer.mov" type="video/mp4"></source>
            </video>

            N'hésitez à faire connaitre le jeu :
            {/* <QrCode></QrCode> */}
        </div>
    );
}

export default Home;
