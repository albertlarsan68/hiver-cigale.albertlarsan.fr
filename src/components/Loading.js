import React from 'react';
import './../styles/Loading.css'

function Loading() {
    return (
        <div className="loader-container">
            <div className="loading-items">
                <div className="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="loader">Chargement...</div>
        </div>
    );
}

export default Loading;
