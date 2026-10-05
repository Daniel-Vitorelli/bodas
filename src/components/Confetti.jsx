import { motion } from "framer-motion";
import { palette } from "../data.js";

const SHAPES = ["rect", "rect", "rect", "circle", "ring", "ring"];

/* gerado uma única vez fora do render: `Math.random` durante a renderização
   é sinalizado como impuro pelo React Compiler (e reexecutaria a cada render) */
const pieces = Array.from({ length: 70 }, (_, i) => {
  const angle = (Math.PI / 180) * (i * 6.3 + Math.random() * 4);
  const dist = 150 + Math.random() * 260;
  const rot = Math.round(Math.random() * 720 - 360);
  return {
    size: 5 + Math.random() * 8,
    cx: Math.cos(angle) * dist,
    cy: Math.sin(angle) * dist,
    rot,
    delay: Math.random() * 0.15,
    duration: 1.5 + Math.random() * 1.1,
    shape: SHAPES[i % SHAPES.length],
    color: palette[Math.floor(Math.random() * palette.length)],
  };
});

export default function Confetti() {
  return (
    <div className="confetti" aria-hidden="true">
      {pieces.map((p, i) => (
        <motion.span
          key={i}
          className={`confetti-piece confetti-piece--${p.shape}`}
          style={{
            width: p.size,
            height: p.size,
            background: p.shape === "ring" ? "transparent" : p.color,
            borderColor: p.color,
            left: "50%",
            top: "50%",
          }}
          initial={{ x: 0, y: 0, opacity: 0, scale: 0.4 }}
          animate={{
            x: [0, p.cx, p.cx * 0.94],
            y: [0, p.cy, p.cy + 150],
            rotate: [0, p.rot, p.rot * 2],
            opacity: [0, 1, 0],
            scale: [0.4, 1, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            times: [0, 0.5, 1],
            ease: ["easeOut", "easeOut", "easeIn"],
          }}
        />
      ))}
    </div>
  );
}