import { NextRequest, NextResponse } from "next/server";
import { BetaTester } from "@/models/betatester";

export async function POST(req: NextRequest, context: any) {
    try {
        const { params } = context;

        if (params.gemini != process.env.SECURITY_KEY) {
            return new NextResponse(JSON.stringify({ Authorization: false, Behaviour: "Illegal Activity Detected From The Client" }));
        }
        const {key}=await req.json();
        const tester = await BetaTester.findOne();
        if (key===tester.KEY) {
            return new NextResponse(JSON.stringify({ ok:true}));
        } else {
            
        }
        return new NextResponse(JSON.stringify({ ok:false}));
    } catch (error) {
        return new NextResponse(JSON.stringify({ error: "Error while requesting" }));
    }
}
