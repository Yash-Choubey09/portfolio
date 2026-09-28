import React from 'react';

const eventsList = [
    {
        id: "shield-2026",
        title: "SHIELD 2026",
        type: "National Cybersecurity Bootcamp",
        details: "Five-day national cybersecurity bootcamp. Theme: Building Secure Systems: Protocols, Threat Hunting, and Wireless Security.",
        collab: "In collaboration with IIT Roorkee under ISEA / MeitY."
    },
    {
        id: "nirmaan",
        title: "NIRMAAN",
        type: "Design Thinking Workshop",
        details: "Focused on Ideation, Problem identification, Validation, Prototyping, Figma, GitHub, and SDG relevance."
    },
    {
        id: "aiori-3",
        title: "AIORI-3 Student Workshop",
        type: "Student Technical Workshop",
        details: "Technical workshop emphasizing core emerging technologies and practical learning for engineering students."
    },
    {
        id: "hacktoberfest",
        title: "Hacktoberfest Hack Day Chandigarh 2026",
        type: "Technical Event",
        details: "IEEE SSIT CUSB / IEEE Computer Society related event focusing on Open source, AI, Software development, and Student participation."
    },
    {
        id: "chayan",
        title: "CHAYAN 2026",
        type: "Innovation Initiative",
        details: "Sci-Fi Innovation Club initiative involving patent / IPR awareness and collaborative innovation."
    }
];

const Events = () => {
    return (
        <div className="page">
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Events & Community</h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', marginBottom: '3rem' }}>
                Highlighting major technical events, workshops, and initiatives organized and facilitated.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                {eventsList.map((event) => (
                    <div key={event.id} style={{
                        padding: '2rem',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--border-radius-md)',
                        backgroundColor: 'var(--color-background-card)',
                        boxShadow: 'var(--shadow-subtle)'
                    }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{event.title}</h2>
                        <h3 style={{ fontSize: '1.1rem', color: 'var(--color-accent)', marginBottom: '1rem' }}>{event.type}</h3>
                        <p style={{ marginBottom: '1rem' }}>{event.details}</p>
                        {event.collab && <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: '500' }}>{event.collab}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
