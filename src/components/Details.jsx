import { motion } from "framer-motion";
import Section from "./Section.jsx";
import { event } from "../data.js";

const wrap = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 0.82, 0.36, 1] } },
};

const Icon = ({ name, size = 22 }) => {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "calendar":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="3" y="5" width="18" height="16" rx="3" />
          <path d="M3 10h18M8 3v4M16 3v4" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" />
          <circle cx="12" cy="10" r="2.6" />
        </svg>
      );
    default:
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 3c-3 0-4 4-4 7H6.5a1.5 1.5 0 0 0 0 3H8l2 8h4l2-8h1.5a1.5 1.5 0 0 0 0-3H16c0-3-1-7-4-7Z" />
        </svg>
      );
  }
};

const cards = [
  { icon: "calendar", title: "Data", text: event.fullDate },
  { icon: "clock", title: "Horário", text: event.time },
  { icon: "pin", title: "Local", text: event.location, sub: event.address },
  { icon: "bowtie", title: "Traje", text: event.dressCode },
];

export default function Details() {
  return (
    <Section className="details-section">
      <div className="section-head">
        <span className="section-kicker">Anotem aí</span>
        <h2 className="section-title">Quando &amp; Onde</h2>
        <p className="section-sub">Tudo o que você precisa saber para a nossa festa</p>
      </div>

      <motion.div className="details-grid" variants={wrap} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
        {cards.map((c) => (
          <motion.div
            key={c.title}
            className="detail-card"
            variants={card}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="detail-icon">
              <Icon name={c.icon} />
            </div>
            <h3 className="detail-title">{c.title}</h3>
            <p className="detail-text">{c.text}</p>
            {c.sub && <p className="detail-sub">{c.sub}</p>}
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}