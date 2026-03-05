import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // 1) Job Application Path
        if (body.type === "jobApplication") {
            const { jobTitle, jmeno, prijmeni, email, telefon, linkedin, zprava, cvBase64, cvName } = body;

            const errors: Record<string, string> = {};
            if (!jmeno?.trim()) errors.jmeno = 'Jméno je povinné';
            if (!prijmeni?.trim()) errors.prijmeni = 'Příjmení je povinné';
            if (!email?.trim() || !/^\S+@\S+\.\S+$/.test(email)) errors.email = 'Zadejte platný e-mail';
            if (!telefon?.trim()) errors.telefon = 'Telefon je povinný';

            if (Object.keys(errors).length > 0) {
                return NextResponse.json({ success: false, errors }, { status: 400 });
            }

            const textBody = `Nová žádost o práci: ${jobTitle}\n\nJméno: ${jmeno} ${prijmeni}\nE-mail: ${email}\nTelefon: ${telefon}\nLinkedIn: ${linkedin || '-'}\n\nZpráva:\n${zprava || '-'}`;

            const htmlBody = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; color: #1f2937;">
                <div style="background-color: #000000; padding: 24px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold; letter-spacing: -0.5px;">Nová žádost o práci</h1>
                    <p style="color: #a038b6; margin: 8px 0 0 0; font-size: 18px; font-weight: 600;">${jobTitle}</p>
                </div>
                <div style="padding: 32px 24px; background-color: #ffffff;">
                    <div style="margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid #e5e7eb;">
                        <h2 style="font-size: 16px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px 0;">Kontaktní údaje</h2>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr><td style="padding: 8px 0; font-weight: bold; width: 120px;">Jméno:</td><td style="padding: 8px 0;">${jmeno} ${prijmeni}</td></tr>
                            <tr><td style="padding: 8px 0; font-weight: bold;">E-mail:</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #a038b6; text-decoration: none;">${email}</a></td></tr>
                            <tr><td style="padding: 8px 0; font-weight: bold;">Telefon:</td><td style="padding: 8px 0;">${telefon}</td></tr>
                            <tr><td style="padding: 8px 0; font-weight: bold;">LinkedIn:</td><td style="padding: 8px 0;">${linkedin ? `<a href="${linkedin.startsWith('http') ? linkedin : `https://${linkedin}`}" style="color: #a038b6; text-decoration: none;">${linkedin}</a>` : '<span style="color: #9ca3af;">(nevyplněno)</span>'}</td></tr>
                        </table>
                    </div>
                    <div>
                        <h2 style="font-size: 16px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px 0;">Zpráva uchazeče</h2>
                        <div style="background-color: #f3f4f6; padding: 16px; border-radius: 6px; font-style: ${zprava ? 'normal' : 'italic'}; color: ${zprava ? '#1f2937' : '#9ca3af'}; white-space: pre-wrap;">
                            ${zprava || 'Uchazeč nezanechal žádnou zprávu.'}
                        </div>
                    </div>
                </div>
                <div style="background-color: #f9fafb; padding: 16px; text-align: center; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
                    ${cvBase64 ? 'Uchazeč přiložil životopis v příloze tohoto e-mailu.' : 'Uchazeč nepřiložil životopis.'}
                </div>
            </div>
            `;

            const { data, error } = await resend.emails.send({
                from: process.env.EMAIL_FROM!,
                to: [process.env.EMAIL_TO_JOB_APPLICATIONS!],
                subject: `Nová žádost o pozici: ${jobTitle}`,
                text: textBody,
                html: htmlBody,
                attachments: cvBase64 ? [{ content: cvBase64, filename: cvName || 'CV.pdf' }] : undefined,
            });

            if (error) {
                console.error('Resend error:', error);
                return NextResponse.json({ success: false, message: 'Nepodařilo se odeslat zprávu.' }, { status: 500 });
            }

            return NextResponse.json({ success: true, message: 'Zpráva byla úspěšně odeslána.' }, { status: 200 });
        }


        // 2) Default Path: Compatibility Check (Zjistěte, zda jsme pro vás)
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

        const textBody = `Nová poptávka - Ověření kompatibility:\n\nIČO: ${ico}\nSpolečnost: ${nazevSpolecnosti}\nOsoba: ${kontaktniOsoba}\nTelefon: ${telefon}\nZpráva:\n${zprava || '-'}`;

        const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; color: #1f2937;">
            <div style="background-color: #000000; padding: 24px; text-align: center;">
                <p style="color: #6b7280; font-size: 12px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase; margin: 0 0 8px 0;">Ověření kompatibility</p>
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold; letter-spacing: -0.5px;">Nová poptávka z webu</h1>
            </div>
            <div style="padding: 32px 24px; background-color: #ffffff;">
                <div style="margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid #e5e7eb;">
                    <h2 style="font-size: 16px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px 0;">Firemní údaje</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr><td style="padding: 8px 0; font-weight: bold; width: 150px;">Název společnosti:</td><td style="padding: 8px 0;">${nazevSpolecnosti}</td></tr>
                        <tr><td style="padding: 8px 0; font-weight: bold;">IČO:</td><td style="padding: 8px 0;">${ico}</td></tr>
                        <tr><td style="padding: 8px 0; font-weight: bold;">Kontaktní osoba:</td><td style="padding: 8px 0;">${kontaktniOsoba}</td></tr>
                        <tr><td style="padding: 8px 0; font-weight: bold;">Telefon:</td><td style="padding: 8px 0;">${telefon}</td></tr>
                    </table>
                </div>
                <div>
                    <h2 style="font-size: 16px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px 0;">Zpráva</h2>
                    <div style="background-color: #f3f4f6; padding: 16px; border-radius: 6px; font-style: ${zprava ? 'normal' : 'italic'}; color: ${zprava ? '#1f2937' : '#9ca3af'}; white-space: pre-wrap;">
                        ${zprava || 'Zájemce nezanechal žádnou zprávu.'}
                    </div>
                </div>
            </div>
            <div style="background-color: #f9fafb; padding: 16px; text-align: center; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
                Odesláno z formuláře Zjistěte zda jsme pro vás - STRAT3X
            </div>
        </div>
        `;

        const { data, error } = await resend.emails.send({
            from: process.env.EMAIL_FROM!,
            to: [process.env.EMAIL_TO_LEADS!],
            subject: 'Nová poptávka z webu - Ověření kompatibility',
            text: textBody,
            html: htmlBody,
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
