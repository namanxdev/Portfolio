import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Naman Gupta — AI Engineer | Building AI systems that work in production";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "64px 72px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* Blue glow top-right */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 65%)",
          }}
        />
        {/* Purple glow bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "250px",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.16) 0%, transparent 65%)",
          }}
        />
        {/* Subtle dot grid right side */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: "480px",
            backgroundImage:
              "radial-gradient(circle, #222 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.4,
          }}
        />

        {/* Navbar simulation */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "52px",
          }}
        >
          <div
            style={{
              color: "#ededed",
              fontSize: "22px",
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}
          >
            NAMAN.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "#111",
              border: "1px solid #1e1e1e",
              borderRadius: "999px",
              padding: "6px 16px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#22c55e",
              }}
            />
            <span style={{ color: "#ededed", fontSize: "13px", letterSpacing: "0.08em" }}>
              AVAILABLE
            </span>
          </div>
        </div>

        {/* Label */}
        <div
          style={{
            color: "#555",
            fontSize: "13px",
            letterSpacing: "0.15em",
            marginBottom: "20px",
          }}
        >
          AI ENGINEER · AGENT BUILDER · OPEN SOURCE
        </div>

        {/* Main headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: "68px",
              fontWeight: 800,
              color: "#ededed",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: "8px",
            }}
          >
            I build AI systems
          </div>
          <div
            style={{
              fontSize: "68px",
              fontWeight: 800,
              color: "#3b82f6",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: "28px",
            }}
          >
            that work in production.
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "#666",
              lineHeight: 1.5,
              maxWidth: "580px",
            }}
          >
            Currently shipping RAG pipelines and multi-agent workflows at
            Infradock.ai. Previously at Oldowan Innovations & Yantram Medtech.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #1e1e1e",
            paddingTop: "20px",
          }}
        >
          <div style={{ display: "flex", gap: "24px" }}>
            {["LangGraph", "RAG", "FastAPI", "MCP", "pgvector"].map((tag) => (
              <div
                key={tag}
                style={{
                  background: "#111",
                  border: "1px solid #1e1e1e",
                  borderRadius: "6px",
                  padding: "4px 12px",
                  color: "#888",
                  fontSize: "13px",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          <div style={{ color: "#444", fontSize: "15px" }}>namangupta.dev</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
