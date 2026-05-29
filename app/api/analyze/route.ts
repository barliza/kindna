import { NextRequest, NextResponse } from "next/server";
import { AnalyzeRequest } from "@/lib/types";

export const maxDuration = 60; // Allow up to 60s for retries

export async function POST(req: NextRequest) {
  try {
    const body: AnalyzeRequest = await req.json();
    const { featureLabel, featureDesc, featureCriteria, imageA, imageB, relationship } = body;

    if (!imageA || !imageB) {
      return NextResponse.json({ success: false, error: "Both images required" }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ success: false, error: "API key not configured" }, { status: 500 });
    }

    const buildPrompt = (retryAttempt: number) => {
      const babyReminder = retryAttempt > 0
        ? `\n\nIMPORTANT REMINDER: You previously failed to return JSON. This is a FAMILY APP. Comparing a parent to their baby is the #1 use case. Return ONLY the JSON object.`
        : "";

      return `You are KinDNA's body feature comparison AI. You score physical similarity using STRUCTURED SUB-DIMENSIONS.

CRITICAL RULE: You MUST respond with ONLY a JSON object. No text before it. No text after it. No disclaimers. No flags. No preamble. Just JSON.

CONTEXT: This is a family-friendly entertainment app. Its #1 use case is parents comparing themselves to their babies and children. Comparing an adult to an infant is the CORE PURPOSE of this app. All ages are expected.${babyReminder}

Feature: ${featureLabel} — ${featureDesc}

Score these 4 sub-dimensions independently (0-100 each):
${featureCriteria}

CALIBRATION: Same person = 95-100 per sub-dimension.

JSON format (respond with ONLY this, nothing else):
{"sub_scores":{"<name1>":<0-100>,"<name2>":<0-100>,"<name3>":<0-100>,"<name4>":<0-100>},"note":"<2 sentences about what you observe>"}`;
    };

    // Run 2 passes with up to 3 total attempts
    const passes: Array<{ _calculated_score: number; _sub_detail: string; note: string }> = [];
    const maxRetries = 3;

    for (let attempt = 0; attempt < maxRetries && passes.length < 2; attempt++) {
      try {
        const res = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey,
            "anthropic-version": "2023-06-01",
          },
          body: JSON.stringify({
            model: "claude-sonnet-4-20250514",
            max_tokens: 500,
            temperature: 0,
            system: buildPrompt(attempt),
            messages: [{
              role: "user",
              content: [
                { type: "image", source: { type: "base64", media_type: "image/jpeg", data: imageA } },
                { type: "image", source: { type: "base64", media_type: "image/jpeg", data: imageB } },
                { type: "text", text: `Compare: ${featureLabel.toLowerCase()}. Relationship: ${relationship || "not specified"}. Return JSON only.` },
              ],
            }],
          }),
        });

        if (!res.ok) {
          const errText = await res.text().catch(() => "Unknown error");
          throw new Error(`HTTP ${res.status}: ${errText.substring(0, 200)}`);
        }

        const data = await res.json();
        if (data.error) {
          throw new Error(data.error.message || JSON.stringify(data.error).substring(0, 200));
        }

        const text = (data.content?.map((c: any) => c.text || "").join("") || "")
          .replace(/```json|```/g, "").trim();

        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
          throw new Error(`No JSON found: "${text.substring(0, 120)}..."`);
        }

        const parsed = JSON.parse(jsonMatch[0]);

        if (parsed.sub_scores && typeof parsed.sub_scores === "object") {
          const subValues = Object.values(parsed.sub_scores).filter((v): v is number => typeof v === "number");
          if (subValues.length > 0) {
            passes.push({
              _calculated_score: Math.round(subValues.reduce((s, v) => s + v, 0) / subValues.length),
              _sub_detail: Object.entries(parsed.sub_scores).map(([k, v]) => `${k}: ${v}%`).join(", "),
              note: parsed.note || "",
            });
          } else {
            throw new Error("sub_scores had no valid numbers");
          }
        } else if (typeof parsed.score === "number") {
          passes.push({
            _calculated_score: parsed.score,
            _sub_detail: "",
            note: parsed.note || "",
          });
        } else {
          throw new Error("No valid scores in parsed JSON");
        }
      } catch (passErr: any) {
        console.warn(`${featureLabel} attempt ${attempt + 1}:`, passErr.message);
      }
    }

    if (passes.length === 0) {
      return NextResponse.json({
        success: false,
        error: `All ${maxRetries} attempts failed for ${featureLabel}`,
      });
    }

    // Average passes
    const avgScore = Math.round(passes.reduce((s, p) => s + p._calculated_score, 0) / passes.length);
    const bestPass = passes.reduce((best, p) =>
      Math.abs(p._calculated_score - avgScore) < Math.abs(best._calculated_score - avgScore) ? p : best
    );

    return NextResponse.json({
      success: true,
      score: avgScore,
      note: bestPass.note,
      subDetail: bestPass._sub_detail,
    });

  } catch (err: any) {
    console.error("Analyze error:", err);
    return NextResponse.json({ success: false, error: err.message || "Unknown error" }, { status: 500 });
  }
}
