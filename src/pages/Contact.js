import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
return (
    <div className="site-container">
    <header>
        <h1 id="h1head">Contact</h1>
    </header>
    <ul id="nav">
        <li><NavLink to="/Home">Home</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/CV">CV</NavLink></li>
        <li><NavLink to="/Projects">Projects</NavLink></li>
        <li><NavLink to="/Contact">Contact</NavLink></li>
    </ul>
    <div className="content">
        <section id="section2">
        <h2>Contact Info</h2>
        <ul>
            <li>Name: Anton Larsson</li>
            <li>Email: anton@campus.com</li>
            <li>Mobile: 0725231263</li>
        </ul>
        </section>
    </div>
    </div>
);
}

export default Contact;
