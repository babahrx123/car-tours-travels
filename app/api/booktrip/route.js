import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(req) {
  const { message } = await req.json();

  if (!message) {
    return NextResponse.json(
      {
        message: "Please provide a valid message to send",
      },
      { status: 400 }
    );
  }

  try {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = twilio(accountSid, authToken);
    const ownerNumber = process.env.CAB_OWNER_PHONE_NUMBER;

    const messageResponse = await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: ownerNumber,
    });

    return NextResponse.json({
      message: "Message sent successfully!",
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "An error occurred",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
