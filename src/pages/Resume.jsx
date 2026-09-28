import React from 'react';

const Resume = () => {
    return (
        <div className="page" style={{ maxWidth: '800px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '3rem', margin: 0 }}>Resume</h1>
                <a
                    href="/Yash_Choubey_Resume.pdf"
                    download
                    style={{
                        padding: '0.75rem 1.5rem',
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        fontWeight: '600',
                        borderRadius: 'var(--border-radius-sm)',
                        display: 'inline-block'
                    }}
                >
                    Download PDF
                </a>
            </div>

            <div style={{
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--border-radius-md)',
                backgroundColor: 'var(--color-background-card)',
                padding: '3rem',
                boxShadow: 'var(--shadow-subtle)',
                minHeight: '600px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            }}>
                <h2 style={{ marginBottom: '1rem', color: 'var(--color-text-muted)' }}>Resume Viewer placeholder</h2>
                <p style={{ color: 'var(--color-text-muted)' }}>
                    (Requires Yash_Choubey_Resume.pdf to be placed in the public directory.)
                </p>
            </div>
        </div>
    );
};

export default Resume;
