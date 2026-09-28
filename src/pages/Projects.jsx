import React from 'react';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className="page">
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Projects & Work</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
                A selection of software engineering, educational technology, and research-oriented projects.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                {projects.map((project) => (
                    <div key={project.id} style={{
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--border-radius-md)',
                        padding: '2rem',
                        backgroundColor: 'var(--color-background-card)',
                        boxShadow: 'var(--shadow-subtle)'
                    }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h2>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', minHeight: '80px' }}>
                            {project.shortDescription}
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            {project.tags.map(tag => (
                                <span key={tag} style={{
                                    fontSize: '0.8rem',
                                    padding: '0.25rem 0.75rem',
                                    backgroundColor: 'var(--color-border)',
                                    borderRadius: '999px',
                                    color: 'var(--color-secondary)'
                                }}>{tag}</span>
                            ))}
                        </div>
                        <Link
                            to={`/projects/${project.slug}`}
                            style={{ fontWeight: '500', display: 'inline-block' }}
                        >
                            View Detals &rarr;
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
