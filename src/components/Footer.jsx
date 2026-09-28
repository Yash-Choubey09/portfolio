import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'left', maxWidth: '1200px', margin: '0 auto', paddingBottom: '2rem' }}>

                <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Yash Choubey</h3>
                    <p style={{ fontSize: '0.9rem' }}>Computer Science & Engineering<br />Chandigarh University</p>
                </div>

                <div>
                    <h4 style={{ marginBottom: '1rem' }}>Navigation</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/research">Research</Link></li>
                        <li><Link to="/leadership">Leadership</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/resume">Resume</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ marginBottom: '1rem' }}>Social</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                        <li><a href="https://github.com/Yash-Choubey09" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="https://linkedin.com/in/yashchoubey" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer">IEEE</a></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ marginBottom: '1rem' }}>Legal</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/terms">Terms & Conditions</Link></li>
                    </ul>
                </div>

            </div>
            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem', marginTop: '1.5rem' }}>
                <p>&copy; 2026 Yash Choubey. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
