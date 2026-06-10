import { AnalysisResults } from "@/lib/types";
import { FEATURES } from "@/lib/features";

export function generatePDFReport(
  results: AnalysisResults,
  nameA: string,
  nameB: string,
  relationship: string
): void {
  const date = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  const getColor = (score: number) =>
    score >= 75 ? "#4ADE80" : score >= 50 ? "#D4A853" : score >= 30 ? "#F97316" : "#EF4444";

  const getLabel = (score: number) =>
    score >= 75 ? "Strong Match" : score >= 50 ? "Moderate Match" : score >= 30 ? "Weak Match" : "Low Match";

  const featureRows = FEATURES.map((f) => {
    const r = results.features?.[f.id];
    if (!r || r.score === null || r.score === undefined) return "";
    const color = getColor(r.score);
    const barWidth = r.score;
    return `
      <div style="padding: 12px 0; border-bottom: 1px solid #1E2730;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 18px;">${f.icon}</span>
            <span style="font-size: 14px; font-weight: 600; color: #C8D1DA;">${f.label}</span>
          </div>
          <span style="font-size: 14px; font-weight: 700; color: ${color};">${r.score}%</span>
        </div>
        <div style="height: 6px; background: #1E2730; border-radius: 3px; margin-bottom: 6px;">
          <div style="height: 100%; width: ${barWidth}%; background: ${color}; border-radius: 3px;"></div>
        </div>
        ${r.note ? `<p style="font-size: 12px; color: #6B7B8D; margin: 0; line-height: 1.5;">${r.note}</p>` : ""}
        ${r.subDetail ? `<p style="font-size: 11px; color: #4A5568; font-family: monospace; margin: 4px 0 0;">Sub-scores: ${r.subDetail}</p>` : ""}
      </div>
    `;
  }).join("");

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>KinDNA Report — ${nameA || "Person A"} & ${nameB || "Person B"}</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #0D1117; color: #E0E6ED; }
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      </style>
    </head>
    <body>
      <div style="max-width: 700px; margin: 0 auto; padding: 40px 30px;">

        <!-- Header -->
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 32px; padding-bottom: 20px; border-bottom: 1px solid #1E2730;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="font-size: 28px; font-weight: 900; background: linear-gradient(to right, #D4A853, #E8C97A); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">KinDNA</div>
          </div>
          <div style="text-align: right;">
            <p style="font-size: 11px; color: #6B7B8D;">DNA Resemblance Report</p>
            <p style="font-size: 11px; color: #6B7B8D;">${date}</p>
          </div>
        </div>

        <!-- Names -->
        <div style="text-align: center; margin-bottom: 32px;">
          <p style="font-size: 12px; color: #D4A853; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px;">Comparing</p>
          <div style="display: flex; align-items: center; justify-content: center; gap: 16px;">
            <span style="font-size: 22px; font-weight: 700; color: #D4A853;">${nameA || "Person A"}</span>
            <span style="font-size: 14px; color: #6B7B8D;">×</span>
            <span style="font-size: 22px; font-weight: 700; color: #53A8D4;">${nameB || "Person B"}</span>
          </div>
          ${relationship ? `<p style="font-size: 13px; color: #6B7B8D; margin-top: 6px;">${relationship}</p>` : ""}
        </div>

        <!-- Overall Score -->
        <div style="background: #131920; border: 1px solid #1E2730; border-radius: 16px; padding: 28px; text-align: center; margin-bottom: 24px;">
          <p style="font-size: 12px; color: #6B7B8D; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px;">Overall DNA Match</p>
          <div style="font-size: 72px; font-weight: 900; color: ${getColor(results.overall_score)}; line-height: 1;">${results.overall_score}%</div>
          <p style="font-size: 14px; color: ${getColor(results.overall_score)}; font-weight: 600; margin-top: 8px;">${getLabel(results.overall_score)}</p>
          <p style="font-size: 14px; color: #9BA8B6; margin-top: 12px; line-height: 1.6; max-width: 480px; margin-left: auto; margin-right: auto;">${results.verdict}</p>
          <p style="font-size: 12px; color: #4A5568; margin-top: 10px;">${results.analyzed_count} features analyzed</p>
        </div>

        <!-- Feature Scores -->
        <div style="background: #131920; border: 1px solid #1E2730; border-radius: 16px; padding: 24px; margin-bottom: 24px;">
          <h3 style="font-size: 12px; font-weight: 700; color: #6B7B8D; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 4px;">Feature Breakdown</h3>
          ${featureRows}
        </div>

        <!-- Disclaimer -->
        <div style="background: #131920; border: 1px solid #1E2730; border-radius: 12px; padding: 16px;">
          <p style="font-size: 11px; color: #4A5568; line-height: 1.6;">
            KinDNA is for entertainment purposes only. Results are AI-generated visual similarity scores and should not be used as genetic, medical, or legal evidence. © 2026 KinDNA · kindna.app
          </p>
        </div>

      </div>
    </body>
    </html>
  `;

  const win = window.open("", "_blank");
  if (!win) return;
  win.document.write(html);
  win.document.close();
  win.focus();
  setTimeout(() => {
    win.print();
  }, 500);
}