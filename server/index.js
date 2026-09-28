import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Simple contact submission endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // In a real app we would use Mongoose:
        // const Contact = mongoose.model('Contact', new mongoose.Schema({ name: String, email: String, subject: String, message: String, date: { type: Date, default: Date.now } }));
        // const newContact = new Contact({ name, email, subject, message });
        // await newContact.save();

        console.log('Received contact submission:', { name, email, subject });
        res.status(200).json({ success: true, message: 'Message received successfully!' });
    } catch (error) {
        console.error('Contact submission error:', error);
        res.status(500).json({ error: 'Server error during submission' });
    }
});

// For production, serve the frontend build
// app.use(express.static(path.join(__dirname, '../dist')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../dist', 'index.html'));
// });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
