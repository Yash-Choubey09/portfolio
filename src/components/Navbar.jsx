import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>YASH CHOUBEY</Link>
            </div>
            <ul className="nav-links" style={{ display: 'flex', listStyle: 'none', gap: '2rem' }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/research">Research</Link></li>
                <li><Link to="/leadership">Leadership</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/achievements">Achievements</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
