import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import anime from 'https://esm.sh/animejs@3.2.2';

const Home = () => {
    const heroRef = useRef(null);
    const cardRef1 = useRef(null);
    const cardRef2 = useRef(null);
    const cardRef3 = useRef(null);

    useEffect(() => {
        // Funky entrance animations
        anime.timeline({ easing: 'easeOutElastic(1, .8)' })
            .add({
                targets: heroRef.current.children,
                translateY: [100, 0],
                opacity: [0, 1],
                rotate: [-5, 0],
                delay: anime.stagger(100),
                duration: 1200
            })
            .add({
                targets: [cardRef1.current, cardRef2.current, cardRef3.current],
                scale: [0, 1],
                rotate: [10, 0],
                opacity: [0, 1],
                delay: anime.stagger(150),
                duration: 1000
            }, '-=800');
    }, []);

    const handleHover = (el) => {
        anime({
            targets: el,
            scale: 1.05,
            rotate: anime.random(-3, 3),
            duration: 300,
            easing: 'easeOutQuad'
        });
    };

    const handleLeave = (el) => {
        anime({
            targets: el,
            scale: 1,
            rotate: 0,
            duration: 500,
            easing: 'easeOutElastic(1, .8)'
        });
    };

    return (
        <div className="page" style={{ padding: '0' }}>

            {/* SECTION 01: Hero / Introduction */}
            <section style={{
                minHeight: '85vh',
                display: 'flex',
                alignItems: 'center',
                padding: '0 2rem',
                overflow: 'hidden'
            }}>
                <div ref={heroRef} style={{ maxWidth: '800px', position: 'relative', zIndex: 10 }}>
                    <div style={{
                        display: 'inline-block',
                        backgroundColor: 'var(--color-accent-tertiary)',
                        padding: '0.5rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '2px solid var(--color-border-strong)',
                        marginBottom: '1rem',
                        transform: 'rotate(-2deg)'
                    }}>
                        <strong style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>HEY THERE! 👋</strong>
                    </div>
                    <h1 style={{
                        fontSize: '5rem',
                        letterSpacing: '-2px',
                        marginBottom: '1.5rem',
                        lineHeight: '1',
                        textShadow: '4px 4px 0px var(--color-accent-primary)'
                    }}>
                        Yash Choubey
                    </h1>
                    <p style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        backgroundColor: 'var(--color-bg-surface)',
                        padding: '1rem',
                        border: '3px solid var(--color-border-strong)',
                        borderRadius: 'var(--radius-md)',
                        boxShadow: 'var(--shadow-funky)',
                        marginBottom: '2.5rem',
                        lineHeight: '1.4'
                    }}>
                        Computer Science & Engineering student at Chandigarh University working across <span style={{ color: 'var(--color-accent-primary)' }}>software development</span>, <span style={{ color: 'var(--color-accent-secondary)' }}>research</span>, and technical community leadership.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
                        <Link to="/projects" style={{ padding: '1rem 2rem', backgroundColor: 'var(--color-primary)' }}>Explore My Work</Link>
                        <Link to="/research" style={{ padding: '1rem 2rem', backgroundColor: 'var(--color-bg-surface)', border: '3px solid var(--color-border-strong)', borderRadius: 'var(--radius-lg)', color: 'var(--color-text-primary)', fontWeight: '800', boxShadow: 'var(--shadow-funky)' }}>Research</Link>
                    </div>
                </div>
            </section>

            {/* SECTION 02: Professional Snapshot */}
            <section style={{ padding: '4rem 2rem', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '3rem', WebkitTextStroke: '1px var(--color-text-primary)' }}>Professional Snapshot</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                    <div ref={cardRef1}
                        onMouseEnter={(e) => handleHover(e.currentTarget)}
                        onMouseLeave={(e) => handleLeave(e.currentTarget)}
                        style={{ backgroundColor: '#fff', border: '3px solid var(--color-border-strong)', borderRadius: 'var(--radius-md)', padding: '2rem', boxShadow: '6px 6px 0px var(--color-accent-primary)' }}>
                        <h3 style={{ fontSize: '2rem', color: 'var(--color-accent-primary)' }}>Software Developer</h3>
                        <p style={{ marginTop: '0.5rem', fontWeight: '500' }}>Focused on React, Node.js, and creating meaningful accessible tech with massive impact.</p>
                    </div>

                    <div ref={cardRef2}
                        onMouseEnter={(e) => handleHover(e.currentTarget)}
                        onMouseLeave={(e) => handleLeave(e.currentTarget)}
                        style={{ backgroundColor: '#fff', border: '3px solid var(--color-border-strong)', borderRadius: 'var(--radius-md)', padding: '2rem', boxShadow: '6px 6px 0px var(--color-accent-secondary)' }}>
                        <h3 style={{ fontSize: '2rem', color: 'var(--color-accent-secondary)' }}>Researcher</h3>
                        <p style={{ marginTop: '0.5rem', fontWeight: '500' }}>Exploring Quantum Computing and single-qubit phase gates using Qiskit. Pushing boundaries.</p>
                    </div>

                    <div ref={cardRef3}
                        onMouseEnter={(e) => handleHover(e.currentTarget)}
                        onMouseLeave={(e) => handleLeave(e.currentTarget)}
                        style={{ backgroundColor: '#fff', border: '3px solid var(--color-border-strong)', borderRadius: 'var(--radius-md)', padding: '2rem', boxShadow: '6px 6px 0px var(--color-accent-tertiary)' }}>
                        <h3 style={{ fontSize: '2rem', color: '#e85d04' }}>IEEE Student Leader</h3>
                        <p style={{ marginTop: '0.5rem', fontWeight: '500' }}>Chair of IEEE SSIT CUSB, organizing large-scale technical events and fostering community.</p>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Home;
