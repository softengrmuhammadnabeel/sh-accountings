import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req, res) {
    if (req.method !== 'POST') return res.status(405).end();
    const body = await req.json();
    const { firstName, lastName, email, message, industry , companyName , phoneNumber} =body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `📨 Message from ${firstName} ${lastName} | Clear Horizon Accountants`,
      text: `
    From: ${firstName} ${lastName} <${email}>
    ${industry ? `Industry: ${industry}` : ''}
    ${companyName ? `Company Name: ${companyName}` : ''}
    ${phoneNumber? `Phone Number: ${phoneNumber}` : ''}
    Message: ${message}
      `,
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 10px; padding: 20px; background: #f9f9f9;">
          <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid #ddd;">
            <h2 style="margin: 0; color: #004080;">Clear Horizon Accountants</h2>
            <p style="margin: 5px 0; color: #888;">New Contact Message Received</p>
          </div>
    
          <div style="padding: 20px 0;">
            <p><strong>👤 Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>📧 Email:</strong> ${email}</p>
            ${industry ? `<p><strong>🏭 Industry:</strong> ${industry}</p>` : ''}
            ${companyName ? `<p><strong>🏢 Company:</strong> ${companyName}</p>` : ''}
            ${phoneNumber? `<p><strong>📞 Phone Number:</strong> ${phoneNumber}</p>` : ''}
            <p><strong>💬 Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `
    };
    


    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (err) {

        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
