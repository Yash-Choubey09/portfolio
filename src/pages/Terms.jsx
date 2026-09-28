import React from 'react';

const Terms = () => {
    return (
        <div className="page" style={{ maxWidth: '800px' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Terms & Conditions</h1>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem' }}>Last updated: September 28, 2026</p>

            <section style={{ marginBottom: '2rem' }}>
                <h2>1. Website Usage</h2>
                <p>
                    This portfolio website is designed for professional networking, demonstrating projects, and showcasing research.
                    By accessing the site, you agree not to use the contact features for spam or malicious purposes.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2>2. Intellectual Property</h2>
                <p>
                    All proprietary project descriptions, personal research work, architectural diagrams, and personal photographs
                    are the intellectual property of Yash Choubey unless otherwise stated. Referenced external organizations (IEEE, Galgotias University, etc.) retain their respective rights.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2>3. External Links</h2>
                <p>
                    This website contains external links to GitHub repositories, deployed projects, and institutional websites.
                    The site owner is not responsible for the privacy practices or the content of those external domains.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2>4. Limitation of Liability</h2>
                <p>
                    Information provided on this website (such as academic standing, research publications) is accurate to the best
                    of the owner's knowledge at the time of publishing. The owner assumes no liability for errors or omissions.
                </p>
            </section>
        </div>
    );
};

export default Terms;
