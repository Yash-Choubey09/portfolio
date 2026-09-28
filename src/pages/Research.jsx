import React from 'react';
import { researchPapers, researchInternships } from '../data/research';

const Research = () => {
    return (
        <div className="page">
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Research & Publications</h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', marginBottom: '3rem' }}>
                Actively exploring Computer Science and Emerging Technology Research, focusing heavily on Quantum Computing, Qiskit, and Single-Qubit Systems.
            </p>

            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>Selected Publications & Work</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {researchPapers.map((paper) => (
                        <div key={paper.id} style={{
                            padding: '1.5rem',
                            borderLeft: '4px solid var(--color-accent)',
                            backgroundColor: 'var(--color-background-card)',
                            boxShadow: 'var(--shadow-subtle)'
                        }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{paper.title}</h3>
                            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
                                <span style={{ fontWeight: '600', color: 'var(--color-primary)' }}>{paper.status}</span>
                                <span>•</span>
                                <span>{paper.role}</span>
                            </div>
                            <p>{paper.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>Research Experience</h2>

                {researchInternships.map(internship => (
                    <div key={internship.id} style={{
                        padding: '2rem',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--border-radius-md)',
                        backgroundColor: 'var(--color-background-card)'
                    }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{internship.lab}</h3>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>{internship.institution} • {internship.area}</p>

                        <h4 style={{ marginBottom: '0.5rem' }}>Key Involvements:</h4>
                        <ul style={{ paddingLeft: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
                            {internship.focus.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Research;
