import React from 'react';

const Privacy = () => {
    return (
        <div className="page" style={{ maxWidth: '800px' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Privacy Policy</h1>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem' }}>Last updated: September 28, 2026</p>

            <section style={{ marginBottom: '2rem' }}>
                <h2>1. Information Collection</h2>
                <p>
                    This website collects information when you voluntarily submit it through the Contact form.
                    The information collected includes your Name, Email address, Subject, and your direct Message.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2>2. Use of Information</h2>
                <p>
                    The information provided is solely for the purpose of communicating back with you regarding professional collaboration,
                    research inquiries, or event coordination. It is not shared, sold, or distributed to third parties.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2>3. Data Storage and Security</h2>
                <p>
                    Submissions are stored securely using MongoDB via an Express backend instance. We utilize industry-standard practices to protect
                    your data, but note that no transmission over the internet is completely immune to risks.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2>4. User Rights & Contact</h2>
                <p>
                    You have the right to request deletion of any contact messages you have previously sent.
                    For any privacy concerns or data requests, please reach out directly through the Contact page.
                </p>
            </section>
        </div>
    );
};

export default Privacy;
