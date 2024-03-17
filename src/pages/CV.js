import React from 'react';
import { NavLink } from 'react-router-dom';
import resumeData from './resumeData.json';

const CV = () => {
    const { education, workExperience } = resumeData;

    return (
        <div className="site-container">
            <header>
                <h1 id="h1head">CV</h1>
            </header>
            <ul id="nav">
                <li><NavLink to="/Labb-2-react">Home</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>
                <li><NavLink to="/CV">CV</NavLink></li>
                <li><NavLink to="/Projects">Projects</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
            </ul>
            <div className="content">
                <section id="section3">
                    <div className="row">
                        <div className="column-1">
                            <h2>Education</h2>
                            <ul>
                                {education.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <h2>Work Experience</h2>
                            <ul>
                                {workExperience.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="column-2">
                            <img src="./Labb-2-react/Images/IMG_20240220_170055.jpg" className="small-img" alt="Photo" />
                            <br />
                            <h2>Information</h2>
                            <ul>
                                <li>Name: Anton Larsson</li>
                                <li>Birth year: 1993</li>
                                <li>Email: anton.larsson@campus.se</li>
                                <li>Mobile: 0725231263</li>
                            </ul>
                            <br />
                            <h2>Skills</h2>
                            <ul>
                                <li>SAP</li>
                                <li>C#</li>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>SQL</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CV;




