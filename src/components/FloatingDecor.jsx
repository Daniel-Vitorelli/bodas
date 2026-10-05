const sparkleTones = ["#c9a227", "#e3c767", "#f3e9c8", "#a67c00"];

/* gerado uma única vez fora do render: `Math.random` durante a renderização
   é sinalizado como impuro pelo React Compiler (e reexecutaria a cada render) */
const sparkles = Array.from({ length: 18 }, (_, i) => ({
  left: Math.random() * 94 + 3 + "%",
  top: Math.random() * 92 + 4 + "%",
  size: 3 + Math.random() * 6,
  delay: Math.random() * 6,
  duration: 6 + Math.random() * 6,
  tone: sparkleTones[i % sparkleTones.length],
}));

export default function FloatingDecor() {
  return (
    <div className="decor" aria-hidden="true">
      <div className="decor-glow decor-glow--a" />
      <div className="decor-glow decor-glow--b" />
      <div className="decor-bokeh decor-bokeh--1" />
      <div className="decor-bokeh decor-bokeh--2" />
      <div className="decor-bokeh decor-bokeh--3" />
      <div className="decor-ring decor-ring--lg" />
      <div className="decor-ring decor-ring--sm" />
      {sparkles.map((s, i) => (
        <span
          key={i}
          className="decor-sparkle"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            background: s.tone,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}