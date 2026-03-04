import React from "react";
import { AbsoluteFill } from "remotion";

const Pill: React.FC<{
  label: string;
  active?: boolean;
  icon?: "spark" | "wrench" | "none";
}> = ({ label, active, icon = "none" }) => {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 18px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.18)",
        background: active ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)",
        boxShadow: active
          ? "inset 0 0 0 1px rgba(255,255,255,0.05)"
          : "none",
        color: active ? "rgba(255,255,255,0.95)" : "rgba(210,220,240,0.6)",
        fontSize: 18,
        letterSpacing: 0.2,
        lineHeight: 1,
        whiteSpace: "nowrap",
      }}
    >
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: 999,
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.55) 24%, rgba(88,140,255,0.35) 52%, rgba(140,80,255,0.3) 100%)",
          border: "1px solid rgba(255,255,255,0.22)",
          boxShadow: "0 2px 6px rgba(0,0,0,0.35)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
          color: "rgba(15,20,30,0.75)",
        }}
      >
        🧑‍💼
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span>{label}</span>
        {icon !== "none" ? (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 18,
              height: 18,
              opacity: 0.8,
              marginLeft: 2,
            }}
          >
            {icon === "wrench" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 7.5a6 6 0 0 1-8.1 5.6L7.2 18.8a2.2 2.2 0 0 1-3.1 0 2.2 2.2 0 0 1 0-3.1l5.7-5.7A6 6 0 0 1 16.5 3c.2 0 .5 0 .7 0l-3.2 3.2 2.8 2.8L20.9 5c.1.8.1 1.6.1 2.5Z"
                  stroke="rgba(255,255,255,0.85)"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2l2.2 6.2L20.5 10l-6.3 1.8L12 18l-2.2-6.2L3.5 10l6.3-1.8L12 2Z"
                  stroke="rgba(255,255,255,0.85)"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>
        ) : null}
      </div>
    </div>
  );
};

const SampleCard: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div
      style={{
        width: 285,
        height: 175,
        borderRadius: 10,
        background: "rgba(34, 39, 55, 0.35)",
        border: "1px solid rgba(255,255,255,0.16)",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.03)",
        padding: 22,
        color: "rgba(240,245,255,0.95)",
        fontSize: 20,
        lineHeight: 1.35,
      }}
    >
      {text}
    </div>
  );
};

const IconButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      width: 44,
      height: 44,
      borderRadius: 999,
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.10)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.03)",
    }}
  >
    {children}
  </div>
);

export const AgentSwarmBuildScreen: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        width: 1536,
        height: 1115,
        background:
          "radial-gradient(1200px 700px at 50% 75%, rgba(35,55,135,0.35) 0%, rgba(12,16,42,0.0) 55%), linear-gradient(180deg, #070a22 0%, #070b26 35%, #060920 100%)",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "115px 115px",
          backgroundPosition: "0 0",
          opacity: 0.14,
          filter: "blur(0px)",
        }}
      />
      {/* vignette */}
      <div
        style={{
          position: "absolute",
          inset: -10,
          background:
            "radial-gradient(1100px 650px at 50% 55%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Title */}
        <div
          style={{
            marginTop: 145,
            fontSize: 92,
            fontWeight: 900,
            letterSpacing: -1.5,
            color: "white",
            textShadow: "0 6px 28px rgba(0,0,0,0.45)",
          }}
        >
          What's cooking, good looking?
        </div>

        {/* Input panel */}
        <div
          style={{
            marginTop: 34,
            width: 1240,
            height: 200,
            borderRadius: 18,
            background:
              "linear-gradient(90deg, rgba(115,60,255,0.10) 0%, rgba(50,50,85,0.36) 35%, rgba(245,190,65,0.10) 100%)",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow:
              "0 16px 60px rgba(0,0,0,0.40), inset 0 0 0 1px rgba(255,255,255,0.03)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* gradient border */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 18,
              padding: 0,
              boxShadow:
                "inset 0 0 0 6px rgba(0,0,0,0), inset 0 0 0 1px rgba(255,255,255,0.05)",
              border: "6px solid transparent",
              borderImage:
                "linear-gradient(90deg, #7a4bff 0%, rgba(170,145,200,0.55) 55%, #d4b13b 100%) 1",
              opacity: 0.95,
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: 28,
              left: 32,
              right: 32,
              color: "rgba(210,220,240,0.42)",
              fontSize: 24,
              letterSpacing: 0.2,
            }}
          >
            Ask Agent Swarm to create an AI sales assistant...
          </div>

          {/* left agent chip */}
          <div
            style={{
              position: "absolute",
              left: 36,
              bottom: 36,
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 18px",
              borderRadius: 999,
              background:
                "linear-gradient(90deg, rgba(122,75,255,0.65) 0%, rgba(210,170,120,0.55) 100%)",
              border: "1px solid rgba(255,255,255,0.20)",
              boxShadow: "0 10px 24px rgba(0,0,0,0.28)",
              color: "white",
              fontSize: 22,
            }}
          >
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: 999,
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.55) 28%, rgba(110,160,255,0.35) 60%, rgba(160,100,255,0.35) 100%)",
                border: "1px solid rgba(255,255,255,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
                color: "rgba(20,25,40,0.7)",
              }}
            >
              🧑‍💼
            </div>
            <div style={{ fontWeight: 500 }}>Agent Swarm</div>
          </div>

          {/* right controls */}
          <div
            style={{
              position: "absolute",
              right: 36,
              bottom: 34,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <IconButton>
              <svg width="20" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 7.5V6.2A5 5 0 0 1 12 1a5 5 0 0 1 5 5.2v1.3"
                  stroke="rgba(220,230,250,0.8)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <rect
                  x="6.2"
                  y="7.5"
                  width="11.6"
                  height="14.5"
                  rx="3"
                  stroke="rgba(220,230,250,0.8)"
                  strokeWidth="1.8"
                />
              </svg>
            </IconButton>
            <IconButton>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 14a3.5 3.5 0 0 0 3.5-3.5V6.2A3.5 3.5 0 0 0 12 2.7 3.5 3.5 0 0 0 8.5 6.2v4.3A3.5 3.5 0 0 0 12 14Z"
                  stroke="rgba(220,230,250,0.8)"
                  strokeWidth="1.8"
                />
                <path
                  d="M6 10.5c0 3.4 2.7 6.2 6 6.2s6-2.8 6-6.2"
                  stroke="rgba(220,230,250,0.8)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M12 16.7v4.2"
                  stroke="rgba(220,230,250,0.8)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </IconButton>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 18px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.03)",
                color: "rgba(220,230,250,0.35)",
                fontSize: 22,
                fontWeight: 600,
              }}
            >
              <span>Send</span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3.5 11.3l16.8-7.3-6.7 17.4-2.6-7.1-7.5-3Z"
                  fill="rgba(220,230,250,0.35)"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Pills */}
        <div
          style={{
            marginTop: 26,
            width: 1240,
            display: "flex",
            flexDirection: "column",
            gap: 18,
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: 18, justifyContent: "center" }}>
            <Pill label="Agent Swarm" />
            <Pill label="General Agent" active />
            <Pill label="Slides Agent" active />
            <Pill label="Deep Research Agent" active />
          </div>
          <div style={{ display: "flex", gap: 18, justifyContent: "center" }}>
            <Pill label="Data Analyst" active />
            <Pill label="Docs Agent" active />
            <Pill label="Video Agent" active />
            <Pill label="Image Agent" active />
            <Pill label="Build Your Own" active icon="wrench" />
          </div>
        </div>

        {/* sample prompts */}
        <div
          style={{
            marginTop: 38,
            width: 1240,
            color: "rgba(215,225,245,0.55)",
            fontSize: 26,
            fontWeight: 600,
          }}
        >
          Sample prompts
        </div>

        <div
          style={{
            marginTop: 16,
            width: 1240,
            display: "flex",
            gap: 22,
          }}
        >
          <SampleCard text={"What can this agency\ndo?"} />
          <SampleCard
            text={
              "Build a full launch\npackage: research,\nslides, docs, and\ncreative assets."
            }
          />
          <SampleCard
            text={
              "Analyze my data and\nthen turn insights into\na polished executive\ndeck."
            }
          />
          <SampleCard
            text={
              "Coordinate a\nworkflow for proposal\ndoc + promo visuals +\nshort product video."
            }
          />
        </div>

        {/* down button */}
        <div
          style={{
            position: "absolute",
            bottom: 70,
            width: 56,
            height: 56,
            borderRadius: 999,
            background: "rgba(255,255,255,0.10)",
            border: "1px solid rgba(255,255,255,0.16)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow:
              "0 10px 26px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.04)",
            color: "rgba(255,255,255,0.85)",
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 9l6 6 6-6"
              stroke="rgba(235,245,255,0.85)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 4l6 6 6-6"
              stroke="rgba(235,245,255,0.55)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={0.7}
              transform="translate(0,6)"
            />
          </svg>
        </div>
      </div>
    </AbsoluteFill>
  );
};