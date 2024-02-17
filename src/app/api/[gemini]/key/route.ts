import { NextRequest, NextResponse } from "next/server";
import { BetaTester } from "@/models/betatester";
import "@/gemini-secure/db";
export async function POST(req: NextRequest, context: any) {
    try {
        const { params } = context;
        
        if (params.gemini != process.env.SECURITY_KEY) {
            return new NextResponse(JSON.stringify({ Authorization: false, Behaviour: "Illegal Activity Detected From The Client" }));
        }
        const {Key}=await req.json();
        const tester = await BetaTester.findOne();
        if (Key==tester.KEY) {
            return new NextResponse(JSON.stringify({ ok:true}));
        }
        return new NextResponse(JSON.stringify({ ok:false}));
    } catch (error) {
        return new NextResponse(JSON.stringify({ error: "Error while requesting" }));
    }
}
