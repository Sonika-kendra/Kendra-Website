import { NextResponse } from "next/server";
import { sendEmail } from "@lib/services";

export async function POST(req: Request) {
  try {
    const { name, company, email } = await req.json();

    if (!name || !company || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await sendEmail({
      to: email,
      subject: "New Lead Request – Market Analysis",
      html: `
        <h3>New Lead</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
