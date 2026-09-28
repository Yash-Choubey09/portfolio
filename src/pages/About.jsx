import React from 'react';

const About = () => {
    return (
        <div className="page">
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>About Me</h1>

            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Who I Am</h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                    Computer Science & Engineering student at Chandigarh University focused on building software while exploring research and emerging technologies. I blend my passion for web development with academic research, creating professional solutions tailored for accessibility and sustainability.
                </p>
            </section>

            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Academic Journey</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', borderLeft: '2px solid var(--color-border)', paddingLeft: '1.5rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.2rem' }}>B.E. Computer Science & Engineering</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>Chandigarh University | Current (5th Semester) | CGPA: 8.01</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.2rem' }}>12th Standard</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>Score: 85.5%</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.2rem' }}>10th Standard</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>Score: 79.5%</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Areas of Interest</h2>
                <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', listStyle: 'none' }}>
                    <li style={{ padding: '1rem', backgroundColor: 'var(--color-background-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--border-radius-sm)' }}>Software Engineering</li>
                    <li style={{ padding: '1rem', backgroundColor: 'var(--color-background-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--border-radius-sm)' }}>Web Development</li>
                    <li style={{ padding: '1rem', backgroundColor: 'var(--color-background-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--border-radius-sm)' }}>Java Development</li>
                    <li style={{ padding: '1rem', backgroundColor: 'var(--color-background-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--border-radius-sm)' }}>Data Structures & Algorithms</li>
                    <li style={{ padding: '1rem', backgroundColor: 'var(--color-background-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--border-radius-sm)' }}>Quantum Computing</li>
                    <li style={{ padding: '1rem', backgroundColor: 'var(--color-background-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--border-radius-sm)' }}>Accessibility Technology</li>
                </ul>
            </section>
        </div>
    );
};

export default About;
