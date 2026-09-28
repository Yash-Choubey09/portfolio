import React from 'react';

const leadershipRoles = [
    {
        id: "chair-ssit",
        period: "Current",
        role: "Chair",
        organization: "IEEE SSIT CUSB",
        contribution: "Leading the chapter, organizing technical workshops, and fostering student awareness of technology's societal impact.",
        impact: "Orchestrated large-scale events and bridged institutional collaboration."
    },
    {
        id: "general",
        period: "Ongoing",
        role: "Student Leader & Volunteer",
        organization: "IEEE Community",
        contribution: "Coordinating events, community building, and leading technical initiatives.",
        impact: "Fostering peer learning and technical excellence across campus."
    }
];

const Leadership = () => {
    return (
        <div className="page">
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>IEEE & Leadership</h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', marginBottom: '3rem' }}>
                Building technical communities, leading student initiatives, and organizing impactful events.
            </p>

            <section>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative' }}>
                    {/* Vertical timeline line */}
                    <div style={{ position: 'absolute', left: '1rem', top: '0', bottom: '0', width: '2px', backgroundColor: 'var(--color-border)', zIndex: 0 }}></div>

                    {leadershipRoles.map((role) => (
                        <div key={role.id} style={{ display: 'flex', gap: '2rem', zIndex: 1 }}>

                            <div style={{
                                minWidth: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: 'var(--color-accent)', border: '4px solid var(--color-background-main)', marginTop: '0.25rem'
                            }}></div>

                            <div style={{
                                padding: '2rem',
                                border: '1px solid var(--color-border)',
                                borderRadius: 'var(--border-radius-md)',
                                backgroundColor: 'var(--color-background-card)',
                                boxShadow: 'var(--shadow-subtle)',
                                width: '100%'
                            }}>
                                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: '600' }}>{role.period}</span>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{role.role}</h3>
                                <h4 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>{role.organization}</h4>
                                <p style={{ marginBottom: '0.75rem' }}><strong>Contribution:</strong> {role.contribution}</p>
                                <p><strong>Impact:</strong> {role.impact}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Leadership;
