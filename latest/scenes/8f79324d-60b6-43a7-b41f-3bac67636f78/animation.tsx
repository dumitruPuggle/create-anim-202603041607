import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

// Runtime-provided in the template environment
declare const AttachedImages: string[];

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const AnimatedPill: React.FC<{
  label: string;
  active?: boolean;
  icon?: "spark" | "wrench" | "none";
  i: number;
}> = ({ label, active, icon = "none", i }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const t = spring({
    frame: frame - (42 + i * 3),
    fps,
    config: { damping: 14, stiffness: 160, mass: 0.9 },
  });

  const pop = interpolate(t, [0, 1], [0.92, 1]);
  const y = interpolate(t, [0, 1], [10, 0]);
  const a = t;

  // subtle active shimmer moving across the pill
  const shimmerX = interpolate(frame, [0, 180], [-160, 240]);

  return (
    <div
      style={{
        position: "relative",
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
        transform: `translateY(${y}px) scale(${pop})`,
        opacity: a,
        overflow: "hidden",
      }}
    >
      {active ? (
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: `translateX(${shimmerX}px)`,
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.10) 45%, rgba(255,255,255,0) 75%)",
            width: 140,
            opacity: 0.55,
            filter: "blur(0.2px)",
            pointerEvents: "none",
          }}
        />
      ) : null}

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

const AnimatedSampleCard: React.FC<{ text: string; i: number }> = ({
  text,
  i,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const t = spring({
    frame: frame - (92 + i * 4),
    fps,
    config: { damping: 16, stiffness: 150, mass: 0.9 },
  });

  const y = interpolate(t, [0, 1], [18, 0]);
  const s = interpolate(t, [0, 1], [0.98, 1]);

  return (
    <div
      style={{
        width: 285,
        height: 175,
        borderRadius: 10,
        background: "rgba(10,14,26,0.35)",
        border: "1px solid rgba(255,255,255,0.16)",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.03)",
        padding: 22,
        color: "rgba(240,245,255,0.95)",
        fontSize: 20,
        lineHeight: 1.35,
        transform: `translateY(${y}px) scale(${s})`,
        opacity: t,
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
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // background fade
  const bgA = clamp01(interpolate(frame, [0, 18], [0, 1]));

  // subtle parallax drift
  const driftX = interpolate(frame, [0, 240], [0, -18]);
  const driftY = interpolate(frame, [0, 240], [0, 10]);

  // title entrance
  const titleT = spring({
    frame: frame - 10,
    fps,
    config: { damping: 14, stiffness: 120, mass: 1 },
  });
  const titleY = interpolate(titleT, [0, 1], [18, 0]);
  const titleBlur = interpolate(titleT, [0, 1], [6, 0]);

  // panel entrance
  const panelT = spring({
    frame: frame - 24,
    fps,
    config: { damping: 16, stiffness: 140, mass: 1 },
  });
  const panelY = interpolate(panelT, [0, 1], [26, 0]);
  const panelS = interpolate(panelT, [0, 1], [0.985, 1]);

  // caret blink (fake typing)
  const caretOn = Math.floor(frame / 18) % 2 === 0;

  // down button pulse
  const pulse = 1 + 0.03 * Math.sin((frame / fps) * Math.PI * 2 * 0.8);
  const downA = clamp01(interpolate(frame, [110, 140], [0, 1]));

  // glow sweep on the input border
  const sweep = interpolate(frame, [0, 180], [-500, 1200]);

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
          backgroundPosition: `${driftX}px ${driftY}px`,
          opacity: 0.14 * bgA,
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
          opacity: bgA,
        }}
      />

      {/* subtle floating blobs */}
      <div
        style={{
          position: "absolute",
          left: -220,
          top: 120,
          width: 520,
          height: 520,
          borderRadius: 999,
          background:
            "radial-gradient(circle at 30% 30%, rgba(122,75,255,0.22) 0%, rgba(122,75,255,0.06) 45%, rgba(0,0,0,0) 70%)",
          filter: "blur(6px)",
          transform: `translate(${driftX * 0.6}px, ${driftY * 0.6}px)`,
          opacity: 0.9 * bgA,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: -240,
          bottom: -140,
          width: 620,
          height: 620,
          borderRadius: 999,
          background:
            "radial-gradient(circle at 40% 40%, rgba(245,190,65,0.16) 0%, rgba(245,190,65,0.06) 42%, rgba(0,0,0,0) 70%)",
          filter: "blur(8px)",
          transform: `translate(${driftX * -0.5}px, ${driftY * -0.5}px)`,
          opacity: 0.9 * bgA,
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
            transform: `translateY(${titleY}px)`,
            filter: `blur(${titleBlur}px)`,
            opacity: titleT,
          }}
        >
          What should we build?
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
            transform: `translateY(${panelY}px) scale(${panelS})`,
            opacity: panelT,
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

          {/* border glow sweep */}
          <div
            style={{
              position: "absolute",
              inset: -2,
              transform: `translateX(${sweep}px)`,
              width: 420,
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.18) 40%, rgba(255,255,255,0) 80%)",
              opacity: 0.35,
              pointerEvents: "none",
              filter: "blur(0.6px)",
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
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span>Ask Agent Swarm to create an AI sales assistant...</span>
            <span
              style={{
                width: 10,
                height: 22,
                borderRadius: 2,
                background: caretOn
                  ? "rgba(210,220,240,0.42)"
                  : "rgba(210,220,240,0.0)",
              }}
            />
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
                overflow: "hidden",
              }}
            >
              <Img
                src={AttachedImages?.[0]}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
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
            {(
              [
                { label: "Agent Swarm", active: false, icon: "none" },
                { label: "General Agent", active: true, icon: "none" },
                { label: "Slides Agent", active: true, icon: "none" },
                { label: "Deep Research Agent", active: true, icon: "none" },
              ] as const
            ).map((p, i) => (
              <AnimatedPill key={p.label} i={i} {...p} />
            ))}
          </div>
          <div style={{ display: "flex", gap: 18, justifyContent: "center" }}>
            {(
              [
                { label: "Data Analyst", active: true, icon: "none" },
                { label: "Docs Agent", active: true, icon: "none" },
                { label: "Video Agent", active: true, icon: "none" },
                { label: "Image Agent", active: true, icon: "none" },
                { label: "Build Your Own", active: true, icon: "wrench" },
              ] as const
            ).map((p, j) => (
              <AnimatedPill key={p.label} i={4 + j} {...p} />
            ))}
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
            opacity: clamp01(interpolate(frame, [78, 100], [0, 1])),
            transform: `translateY(${interpolate(frame, [78, 100], [10, 0])}px)`,
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
          <AnimatedSampleCard i={0} text={"What can this agency\ndo?"} />
          <AnimatedSampleCard
            i={1}
            text={
              "Build a full launch\npackage: research,\nslides, docs, and\ncreative assets."
            }
          />
          <AnimatedSampleCard
            i={2}
            text={
              "Analyze my data and\nthen turn insights into\na polished executive\ndeck."
            }
          />
          <AnimatedSampleCard
            i={3}
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
            transform: `scale(${pulse})`,
            opacity: downA,
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