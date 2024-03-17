import React from 'react';

const EasterEgg = ({ isVisible, setIsVisible, isVisibleGif, setIsVisibleGif }) => {
    return (
        <div>
            <div className="easter-egg-window" style={{ display: isVisible ? 'block' : 'none' }}>
                <h2>Easter Egg Found!</h2>
                <p>Congratulations! You found the Easter egg!</p>
                <span className="close-btn" onClick={() => setIsVisible(false)}>X</span>
            </div>
            <div className="gif-container" style={{ display: isVisibleGif ? 'block' : 'none' }}>
                <span className="close-btn" onClick={() => setIsVisibleGif(false)}>X</span>
                <img src="./Images/giphy.gif" alt="Easter egg GIF" />
            </div>
        </div>
    );
};

export default EasterEgg;















