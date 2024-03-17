import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
    <div className="site-container">
    <header>
        <h1 id="h1head">About</h1>
    </header>
    <ul id="nav">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/CV">CV</NavLink></li>
        <li><NavLink to="/Projects">Projects</NavLink></li>
        <li><NavLink to="/Contact">Contact</NavLink></li>
    </ul>
            <div className="content">
                <section id="section5">
                    <h2>About me</h2>
                    <p>My name i Anton and im from a small town in sweden called Falkenberg.<br />
                    I did studies in electrical at Highschool and the i move to Stockholm and worked at Willys.<br />
                    I lived in Stockholm for about 5 years and then moved back to Falkenberg again.</p>
                    <br />
                    <p>In 2023 i started studies in system development at Varberg Campus.<br />
                    As i feel of right now i really think i made the right choice. I enjoy coding and all that comes with it.</p>
                    <br />
                    <p>In my free time i like gaming, legos, warhammer40k and sketching. As a person im calm and just trying to enjoy life.</p>
                </section>
            </div>
        </div>
    );
}

export default About;

