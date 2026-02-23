import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        const { image } = data;

        if (!image) {
            return NextResponse.json({ error: "No image provided" }, { status: 400 });
        }

        // Simulate processing delay (state of the art feeling)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Simulation Logic
        // In a real app, this would process the image. 
        // For the demo, we return a "Low Risk" result to showcase the UI.

        const result = {
            status: "success",
            risk_level: "low",
            confidence: 96.5,
            message: "No significant anomalies detected. Regular monitoring is recommended.",
            model_info: "DermaCheck AI (Simulation Mode)"
        };

        return NextResponse.json(result);

    } catch (error) {
        console.error("Analysis API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error", details: String(error) },
            { status: 500 }
        );
    }
}
