import React from 'react';

const skillCategories = [
    {
        category: "Programming",
        skills: [
            { name: "C", level: "Working Knowledge" },
            { name: "C++", level: "Working Knowledge" },
            { name: "Python", level: "Intermediate" },
            { name: "Java", level: "Learning" },
            { name: "JavaScript", level: "Intermediate" }
        ]
    },
    {
        category: "Web",
        skills: [
            { name: "HTML", level: "Advanced" },
            { name: "CSS", level: "Advanced" },
            { name: "JavaScript", level: "Intermediate" },
            { name: "React", level: "Working Knowledge" },
            { name: "Node.js", level: "Learning" },
            { name: "Express.js", level: "Learning" }
        ]
    },
    {
        category: "Database",
        skills: [
            { name: "MongoDB", level: "Learning" },
            { name: "Firebase", level: "Learning" },
            { name: "MySQL", level: "Working Knowledge" }
        ]
    },
    {
        category: "Development Tools",
        skills: [
            { name: "Git", level: "Intermediate" },
            { name: "GitHub", level: "Intermediate" },
            { name: "VS Code", level: "Advanced" },
            { name: "Google Colab", level: "Advanced" }
        ]
    },
    {
        category: "Research / Emerging Technology",
        skills: [
            { name: "Qiskit", level: "Working Knowledge" },
            { name: "Quantum Computing", level: "Intermediate" },
            { name: "Machine Learning concepts", level: "Learning" },
            { name: "LoRA / generative AI research", level: "Learning" }
        ]
    }
];

const Skills = () => {
    return (
        <div className="page">
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Technical Skills</h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', marginBottom: '3rem' }}>
                Foundational and emerging technologies mapped across software development and research domains.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {skillCategories.map((sect, idx) => (
                    <div key={idx} style={{
                        backgroundColor: 'var(--color-background-card)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--border-radius-md)',
                        padding: '1.5rem'
                    }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--color-border)' }}>
                            {sect.category}
                        </h2>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {sect.skills.map(skill => (
                                <li key={skill.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontWeight: '500' }}>{skill.name}</span>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', backgroundColor: 'var(--color-background-main)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>
                                        {skill.level}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
