"use client";

export function AnimatedHeroGradient() {
  return (
    <>
      <style>{`
        @keyframes heroBlob1 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1);
          }
          25% {
            transform: translate(18%, -20%) scale(1.12);
          }
          50% {
            transform: translate(35%, 8%) scale(0.92);
          }
          75% {
            transform: translate(12%, 22%) scale(1.08);
          }
        }
        @keyframes heroBlob2 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1);
          }
          25% {
            transform: translate(-25%, 18%) scale(1.15);
          }
          50% {
            transform: translate(-40%, -12%) scale(1.05);
          }
          75% {
            transform: translate(-12%, -22%) scale(0.92);
          }
        }
        @keyframes heroBlob3 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1);
          }
          25% {
            transform: translate(22%, 25%) scale(1.18);
          }
          50% {
            transform: translate(-18%, 15%) scale(0.88);
          }
          75% {
            transform: translate(28%, -18%) scale(1.1);
          }
        }
      `}</style>
      <div className="absolute inset-[3.38%_-1.63%_8.04%_-28.8%] pointer-events-none overflow-visible">
        <div className="-scale-y-100 relative w-[2504.229px] h-[760px] opacity-70">
          {/* Blue/lavender blob */}
          <div
            className="absolute rounded-full will-change-transform"
            style={{
              width: "900px",
              height: "500px",
              left: "10%",
              top: "8%",
              background:
                "radial-gradient(ellipse at center, rgba(154, 180, 245, 0.85) 0%, rgba(139, 156, 247, 0.4) 40%, transparent 70%)",
              filter: "blur(90px)",
              animation: "heroBlob1 20s ease-in-out infinite",
            }}
          />
          {/* Pink/magenta blob */}
          <div
            className="absolute rounded-full will-change-transform"
            style={{
              width: "800px",
              height: "480px",
              right: "12%",
              top: "2%",
              background:
                "radial-gradient(ellipse at center, rgba(224, 90, 158, 0.85) 0%, rgba(217, 70, 168, 0.4) 40%, transparent 70%)",
              filter: "blur(90px)",
              animation: "heroBlob2 20s ease-in-out infinite",
            }}
          />
          {/* Deep purple accent blob */}
          <div
            className="absolute rounded-full will-change-transform"
            style={{
              width: "650px",
              height: "420px",
              left: "30%",
              top: "15%",
              background:
                "radial-gradient(ellipse at center, rgba(160, 56, 182, 0.6) 0%, rgba(196, 77, 174, 0.25) 40%, transparent 70%)",
              filter: "blur(90px)",
              animation: "heroBlob3 20s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </>
  );
}
