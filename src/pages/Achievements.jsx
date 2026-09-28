import React from 'react';

const achievementsList = [
    "Top 20 finalist in an Ideathon from approximately 1.5 lakh participating teams",
    "Smart India Hackathon finalist",
    "IEEE awards and recognitions",
    "Best Volunteer WIE award",
    "Star Performer award",
    "IEEE Superpower award",
    "Research publications and paper acceptances"
];

const Achievements = () => {
    return (
        <div className="page">
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Achievements</h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', marginBottom: '3rem' }}>
                Verified professional, technical, and leadership recognitions.
            </p>

            <div style={{ maxWidth: '800px', backgroundColor: 'var(--color-background-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--border-radius-md)', padding: '2rem' }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {achievementsList.map((achievement, index) => (
                        <li key={index} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '1rem',
                            backgroundColor: 'var(--color-background-main)',
                            borderRadius: 'var(--border-radius-sm)',
                            borderLeft: '4px solid var(--color-accent)'
                        }}>
                            <span style={{ fontWeight: '500', fontSize: '1.1rem' }}>{achievement}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Achievements;
