import React from 'react'

function Contact() {
    const email = "hiver-cigale@albertlarsan.fr";
    const subject = "Subject Text";
    const body = "Body text goes here.";

    return (
        <div className="Contact">
            <textarea id="story" name="story" rows="10" cols="50">
                Dites nous quelque chose sur notre jeu...
            </textarea>
            <br></br>

            <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}>Contactez-nous !</a>
        </div>
    );
}

export default Contact;
