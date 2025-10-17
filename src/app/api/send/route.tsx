import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, project_type, message } = body;

    const data = await resend.emails.send({
      from: "Website Inquiry <noreply@cabinetconnect.net>", // CORRECTED
      to: ["info@cabinetconnect.net"], // CORRECTED
      subject: `New Project Inquiry from ${name}`,
      react: (
        <div>
          <h1>New Inquiry from your Website</h1>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Project Type:</strong> {project_type}
          </p>
          <p>
            <strong>Message:</strong>
          </p>
          <p>{message}</p>
        </div>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
