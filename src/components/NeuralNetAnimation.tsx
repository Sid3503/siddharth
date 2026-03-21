import { motion } from "framer-motion";

/**
 * Soft animated orbs — the empty-state visual for the project preview panel.
 * Three slowly drifting blurred gradient blobs — same vibe as Linear / Vercel.
 */
const AnimatedOrbs = () => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">

    {/* Orb 1 — shiny white, large */}
    <motion.div
      className="absolute rounded-full"
      style={{
        width: 160,
        height: 160,
        background: "radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)",
        filter: "blur(36px)",
      }}
      animate={{ x: [-30, 20, -30], y: [-20, 30, -20] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Orb 2 — light grey, medium */}
    <motion.div
      className="absolute rounded-full"
      style={{
        width: 120,
        height: 120,
        background: "radial-gradient(circle, rgba(200,200,200,0.4) 0%, transparent 70%)",
        filter: "blur(28px)",
      }}
      animate={{ x: [40, -20, 40], y: [20, -30, 20] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Orb 3 — deep grey, small */}
    <motion.div
      className="absolute rounded-full"
      style={{
        width: 90,
        height: 90,
        background: "radial-gradient(circle, rgba(100,100,100,0.35) 0%, transparent 70%)",
        filter: "blur(20px)",
      }}
      animate={{ x: [0, -40, 0], y: [-40, 10, -40] }}
      transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Subtle crosshair centrepiece */}
    <motion.svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="relative z-10"
      animate={{ opacity: [0.15, 0.35, 0.15] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="0.8" />
      <line x1="12" y1="2" x2="12" y2="22" stroke="white" strokeWidth="0.8" />
      <line x1="2" y1="12" x2="22" y2="12" stroke="white" strokeWidth="0.8" />
    </motion.svg>
  </div>
);

export default AnimatedOrbs;
