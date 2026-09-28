import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data.success) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('Failed to send message.');
            }
        } catch (error) {
            setStatus('Error connecting to the server. Please try again later.');
        }
    };

    return (
        <div className="page" style={{ maxWidth: '600px' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Contact</h1>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                Interested in collaboration, research, or discussing open source? Reach out below.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="name" style={{ fontWeight: '500' }}>Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--border-radius-sm)', fontSize: '1rem' }}
                    />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="email" style={{ fontWeight: '500' }}>Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--border-radius-sm)', fontSize: '1rem' }}
                    />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="subject" style={{ fontWeight: '500' }}>Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        style={{ padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--border-radius-sm)', fontSize: '1rem' }}
                    />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="message" style={{ fontWeight: '500' }}>Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        style={{ padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--border-radius-sm)', fontSize: '1rem', resize: 'vertical' }}
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        padding: '1rem',
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        border: 'none',
                        borderRadius: 'var(--border-radius-sm)',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                    }}
                >
                    Send Message
                </button>

                {status && <p style={{ marginTop: '1rem', fontWeight: '500' }}>{status}</p>}
            </form>
        </div>
    );
};

export default Contact;
