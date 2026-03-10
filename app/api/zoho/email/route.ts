import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactEmailPayload = {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  message?: unknown;
};

function toText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as ContactEmailPayload;
    console.info("[zoho-email] Contact form request received.");

    const firstName = toText(payload.firstName);
    const lastName = toText(payload.lastName);
    const email = toText(payload.email);
    const phone = toText(payload.phone);
    const company = toText(payload.company);
    const message = toText(payload.message);

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "firstName, lastName, email, and message are required." },
        { status: 400 }
      );
    }

    const smtpUser = process.env.ZOHO_SMTP_USER;
    const smtpPassword = process.env.ZOHO_SMTP_PASSWORD;
    const adminEmails = process.env.ADMIN_EMAILS;

    if (!smtpUser || !smtpPassword || !adminEmails) {
      return NextResponse.json(
        { error: "Missing Zoho SMTP configuration." },
        { status: 500 }
      );
    }

    const smtpHost = process.env.ZOHO_SMTP_HOST || "smtp.zoho.eu";
    const smtpPort = Number(process.env.ZOHO_SMTP_PORT || 465);
    const smtpSecure = smtpPort === 465;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPassword
      }
    });

    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "N/A");
    const safeCompany = escapeHtml(company || "N/A");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

    await transporter.sendMail({
      from: process.env.ZOHO_SMTP_FROM || smtpUser,
      to: adminEmails,
      replyTo: email,
      subject: `New Contact Form Enquiry: ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>First Name:</strong> ${safeFirstName}</p>
        <p><strong>Last Name:</strong> ${safeLastName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Company:</strong> ${safeCompany}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[zoho-email] Failed to process request:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal Server Error" },
      { status: 500 }
    );
  }
}
