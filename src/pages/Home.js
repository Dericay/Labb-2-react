import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import EasterEgg from './Easteregg';
import handleKeyPress from './EasterEggTrigger';

const Home = () => {
    const [isVisibleText, setIsVisibleText] = useState(false);
    const [isVisibleGif, setIsVisibleGif] = useState(false);

    const handleHeaderClick = () => {
        setIsVisibleGif(prevVisibility => !prevVisibility);
    };

    const handleKeyPressWrapper = (event) => {
        handleKeyPress(event, setIsVisibleText);
    };

    return (
        <div className="site-container" onKeyDown={handleKeyPressWrapper} tabIndex={0}>
            <header>
                <h1 id="h1head" onClick={handleHeaderClick}>Web Developer</h1>
            </header>
            <ul id="nav">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>
                <li><NavLink to="/CV">CV</NavLink></li>
                <li><NavLink to="/Projects">Projects</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
            </ul>
            <div className="content">
                <section id="section1">
                    <h2>Welcome!</h2>
                    <div>
                        <p>On this site you can read abit about me.<br />Navigate through the menu on the left side.<br />
                        <img id="bildme" src={process.env.PUBLIC_URL + '/lab-two/public/Images/IMG_20240220_170055.jpg'} alt="Me" /> 
                        </p>
                    </div>
                </section>
            </div>
            <EasterEgg isVisible={isVisibleText} setIsVisible={setIsVisibleText} isVisibleGif={isVisibleGif} setIsVisibleGif={setIsVisibleGif} />
        </div>
    );
};

export default Home;




