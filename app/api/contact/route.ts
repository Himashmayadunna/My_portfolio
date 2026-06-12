import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Resend API Key is missing in environment variables.");
      return NextResponse.json(
        { error: "Server configuration issue. Mail service is unavailable." },
        { status: 500 }
      );
    }

    // Call Resend REST API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "himashheshan193@gmail.com",
        subject: `[Portfolio Contact] ${subject || "New Message"}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 8px; background-color: #fafafa;">
            <h2 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px; margin-top: 0;">New Contact Form Message</h2>
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject || "Not Specified"}</p>
            <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />
            <p style="margin-bottom: 5px;"><strong>Message:</strong></p>
            <div style="white-space: pre-wrap; background: #ffffff; padding: 15px; border-radius: 6px; border: 1px solid #e2e8f0; line-height: 1.6; color: #4a5568;">${message}</div>
            <p style="font-size: 11px; color: #a0aec0; margin-top: 20px; text-align: center;">Sent automatically from Himash Portfolio Contact Form Handler</p>
          </div>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json();
      console.error("Resend API responded with an error:", errorData);
      return NextResponse.json(
        { error: errorData.message || "Failed to send email via Resend." },
        { status: resendResponse.status }
      );
    }

    const data = await resendResponse.json();
    return NextResponse.json({ success: true, id: data.id });
  } catch (error: any) {
    console.error("Contact API encountered an error:", error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
