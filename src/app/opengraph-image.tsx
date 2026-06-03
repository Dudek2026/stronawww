import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "DUDEK Car Studio — Detailing premium · Kościelec";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          background:
            "radial-gradient(120% 80% at 70% 0%, rgba(31,184,206,0.18) 0%, transparent 55%), #050505",
          color: "#f2f2f0",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        {/* Top — eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            fontFamily: "ui-monospace, SFMono-Regular, monospace",
            fontSize: 18,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#1fb8ce",
          }}
        >
          <span>Detailing Studio</span>
          <span style={{ display: "block", width: 40, height: 1, background: "rgba(31,184,206,0.5)" }} />
          <span style={{ color: "#c8ccd0" }}>Kościelec · Wielkopolska</span>
        </div>

        {/* Middle — main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 130,
              fontWeight: 700,
              letterSpacing: -4,
              lineHeight: 1,
              color: "#f2f2f0",
              display: "flex",
            }}
          >
            Twoje Auto.
          </div>
          <div
            style={{
              fontSize: 130,
              fontWeight: 700,
              fontStyle: "italic",
              letterSpacing: -4,
              lineHeight: 1,
              color: "#1fb8ce",
              display: "flex",
            }}
          >
            Nasza Pasja.
          </div>
        </div>

        {/* Bottom — brand strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            paddingTop: 32,
            borderTop: "1px solid rgba(200,204,208,0.18)",
            fontFamily: "ui-monospace, SFMono-Regular, monospace",
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#6b6e72",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ color: "#c8ccd0", fontSize: 22, letterSpacing: 2 }}>DUDEK Car Studio</span>
            <span>Korekta lakieru · Powłoki ceramiczne · Detailing</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
            <span style={{ color: "#1fb8ce", fontSize: 22, letterSpacing: 2 }}>661 310 206</span>
            <span>dudekcarstudio.pl</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
