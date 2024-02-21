import { NextRequest, NextResponse } from "next/server";
import { BetaTester } from "@/models/betatester";
import "@/gemini-secure/db";
import { CookieSetter, TokenGenerate, isAuthorized } from "@/utils/features";

export async function POST(req: NextRequest, context: any) {
  try {
    const { params } = context;

    if (params.gemini != process.env.SECURITY_KEY) {
      return new NextResponse(
        JSON.stringify({
          Authorization: false,
          Behaviour: "Illegal Activity Detected From The Client",
        })
      );
    }

    const { Key } = await req.json();
    const tester = await BetaTester.findOne({ KEY: Key });

    if (tester) {
      const token = TokenGenerate(Key);
      CookieSetter(token, true);
      return new NextResponse(JSON.stringify({ ok: true }));
    }
    return new NextResponse(JSON.stringify({ ok: false }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Error while requesting" })
    );
  }
}


export async function GET(req: NextRequest, context: any) {
  try {
    const { params } = context;

    if (params.gemini != process.env.SECURITY_KEY) {
      return new NextResponse(
        JSON.stringify({
          Authorization: false,
          Behaviour: "Illegal Activity Detected From The Client",
        })
      );
    }
  return new NextResponse(JSON.stringify({ KEY: isAuthorized() }));
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "API error" }));
  }
  
}

export async function DELETE(req: NextRequest, context: any) {
  try {
    const { params } = context;

    if (params.gemini != process.env.SECURITY_KEY) {
      return new NextResponse(
        JSON.stringify({
          Authorization: false,
          Behaviour: "Illegal Activity Detected From The Client",
        })
      );
    }
    CookieSetter("",false)
  return new NextResponse(JSON.stringify({ ok: true }));
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "API error" }));
  }
  
}
