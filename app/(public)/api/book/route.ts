import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, service, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER, // your inbox
            subject: `New Booking: ${service}`,
            html: `
                <h2>New Booking Request</h2>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Service:</b> ${service}</p>
                <p><b>Message:</b> ${message}</p>
            `,
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error("Error sending email:", error);
        return Response.json(
            { success: false, error: "Email failed" },
            { status: 500 }
        );
    }
}