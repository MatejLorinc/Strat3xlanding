import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { ico, nazevSpolecnosti, kontaktniOsoba, telefon, zprava } = body;

        // Validate required fields
        const errors: Record<string, string> = {};
        if (!ico?.trim()) errors.ico = 'IČO firmy je povinné';
        if (!nazevSpolecnosti?.trim()) errors.nazevSpolecnosti = 'Název společnosti je povinný';
        if (!kontaktniOsoba?.trim()) errors.kontaktniOsoba = 'Kontaktní osoba je povinná';
        if (!telefon?.trim()) errors.telefon = 'Telefon je povinný';

        if (Object.keys(errors).length > 0) {
            return NextResponse.json({ success: false, errors }, { status: 400 });
        }

        const emailBody = `Nová poptávka:

IČO firmy: ${ico.trim()}
Název společnosti: ${nazevSpolecnosti.trim()}
Kontaktní osoba: ${kontaktniOsoba.trim()}
Telefon: ${telefon.trim()}
Zpráva:
${zprava?.trim() || '(bez zprávy)'}`;

        const { data, error } = await resend.emails.send({
            from: process.env.EMAIL_FROM!,
            to: [process.env.EMAIL_TO!],
            subject: 'Nová poptávka z webu',
            text: emailBody,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({
                success: false,
                message: 'Nepodařilo se odeslat zprávu. Zkuste to prosím později.',
            }, { status: 500 });
        }

        console.log('Email sent successfully:', data?.id);
        return NextResponse.json({ success: true, message: 'Zpráva byla úspěšně odeslána.' }, { status: 200 });
    } catch (err) {
        console.error('Server error:', err);
        return NextResponse.json({
            success: false,
            message: 'Nastala neočekávaná chyba. Zkuste to prosím později.',
        }, { status: 500 });
    }
}
