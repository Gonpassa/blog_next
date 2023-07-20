import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { password } = body;
  if (password === process.env.PASS) {
    return NextResponse.json({ success: true }, { status: 200 });
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
