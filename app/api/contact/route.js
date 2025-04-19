import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req, res) {
    if (req.method !== 'POST') return res.status(405).end();
    const body = await req.json();
    const { firstName, lastName, email, message } =body;
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
        text: `From: ${firstName} ${lastName} <${email}>\n\n${message}`,
        html: `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 10px; padding: 20px; background: #f9f9f9;">
        <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid #ddd;">
          <h2 style="margin: 0; color: #004080;">Clear Horizon Accountants</h2>
          <p style="margin: 5px 0; color: #888;">New Contact Message Received</p>
        </div>
  
        <div style="padding: 20px 0;">
          <p><strong>👤 Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #004080;">${email}</a></p>
          <p><strong>📝 Message:</strong></p>
          <blockquote style="border-left: 4px solid #004080; margin: 10px 0; padding-left: 15px; color: #333;">
            ${message?.replace(/\n/g, '<br>')}
          </blockquote>
        </div>
  
        <div style="text-align: center; border-top: 1px solid #ddd; padding-top: 15px; font-size: 0.9em; color: #888;">
          <p>This message was sent via the <strong>Clear Horizon Accountants</strong> website contact form.</p>
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
