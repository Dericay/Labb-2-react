import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://api.github.com/users/Dericay/repos');
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                const data = await response.json();
                const projectsData = data.map(repo => ({
                    name: repo.name,
                    description: repo.description,
                    url: repo.html_url
                }));
                setProjects(projectsData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching projects:', error);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div>
            <header>
        <h1 id="h1head">Projects</h1>
        </header>
            <ul id="nav">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>
                <li><NavLink to="/CV">CV</NavLink></li>
                <li><NavLink to="/Projects">Projects</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
            </ul>
            <div className="projects">
            {loading ? (
                <p>Loading projects...</p>
            ) : (
                <ul>
                    {projects.map(project => (
                        <li key={project.name}>
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                                <div>
                                    <h2>{project.name}</h2>
                                    <p>{project.description}</p>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
        </div>
        
    );
};

export default Projects;
