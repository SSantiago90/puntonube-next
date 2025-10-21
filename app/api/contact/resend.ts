import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Punto Nube <noreply@puntonube.com>', // This needs to be a verified domain in Resend
      to: ['contacto@puntonube.com'], // Change this to your email
      subject: `Nuevo mensaje de ${name} desde tu web`,
      replyTo: email,
      html: `
      <div>
        <p>Has recibido un nuevo mensaje de contacto:</p>
        <ul>
          <li><strong>Nombre:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
        <hr/>       
        <div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully', data });
  } catch (error) {
    return NextResponse.json(
      { error: `Something went wrong: ${error}` },
      { status: 500 }
    );
  }
}
