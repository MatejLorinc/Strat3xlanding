import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Validate required env vars at startup
const requiredEnvVars = ['RESEND_API_KEY', 'EMAIL_FROM', 'EMAIL_TO'];
for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
        console.error(`❌ Missing required environment variable: ${envVar}`);
        process.exit(1);
    }
}

const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
    try {
        const { ico, nazevSpolecnosti, kontaktniOsoba, telefon, zprava } = req.body;

        // Validate required fields
        const errors = {};
        if (!ico?.trim()) errors.ico = 'IČO firmy je povinné';
        if (!nazevSpolecnosti?.trim()) errors.nazevSpolecnosti = 'Název společnosti je povinný';
        if (!kontaktniOsoba?.trim()) errors.kontaktniOsoba = 'Kontaktní osoba je povinná';
        if (!telefon?.trim()) errors.telefon = 'Telefon je povinný';

        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ success: false, errors });
        }

        const emailBody = `Nová poptávka:

IČO firmy: ${ico.trim()}
Název společnosti: ${nazevSpolecnosti.trim()}
Kontaktní osoba: ${kontaktniOsoba.trim()}
Telefon: ${telefon.trim()}
Zpráva:
${zprava?.trim() || '(bez zprávy)'}`;

        const { data, error } = await resend.emails.send({
            from: process.env.EMAIL_FROM,
            to: [process.env.EMAIL_TO],
            subject: 'Nová poptávka z webu',
            text: emailBody,
        });

        if (error) {
            console.error('Resend error:', error);
            return res.status(500).json({
                success: false,
                message: 'Nepodařilo se odeslat zprávu. Zkuste to prosím později.',
            });
        }

        console.log('Email sent successfully:', data?.id);
        return res.status(200).json({ success: true, message: 'Zpráva byla úspěšně odeslána.' });
    } catch (err) {
        console.error('Server error:', err);
        return res.status(500).json({
            success: false,
            message: 'Nastala neočekávaná chyba. Zkuste to prosím později.',
        });
    }
});

app.listen(PORT, () => {
    console.log(`✅ API server running on http://localhost:${PORT}`);
});
