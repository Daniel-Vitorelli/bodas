import { AnimatePresence, motion } from "framer-motion";
import Section from "./Section.jsx";
import { event } from "../data.js";
import { useCountdown } from "../hooks/useCountdown.js";

function Unit({ value, label }) {
  const digits = String(value).padStart(2, "0").split("");
  return (
    <div className="unit">
      <div className="unit-digits">
        {digits.map((d, i) => (
          <span key={i} className="digit-slot">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={String(value) + i}
                className="digit"
                initial={{ y: -18, opacity: 0, rotateX: 90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                exit={{ y: 18, opacity: 0, rotateX: -90 }}
                transition={{ duration: 0.35, ease: [0.16, 0.82, 0.36, 1] }}
              >
                {d}
              </motion.span>
            </AnimatePresence>
          </span>
        ))}
      </div>
      <span className="unit-label">{label}</span>
    </div>
  );
}

export default function Countdown() {
  const { dias, horas, min, seg } = useCountdown(event.dateISO);

  return (
    <Section className="countdown-section">
      <div className="countdown-card">
        <span className="ornament" aria-hidden="true">✦</span>
        <p className="countdown-script">O grande dia chega em</p>
        <div className="countdown-units">
          <Unit value={dias} label="dias" />
          <Unit value={horas} label="horas" />
          <Unit value={min} label="min" />
          <Unit value={seg} label="seg" />
        </div>
        <p className="countdown-date">{event.fullDate}</p>
        <p className="countdown-time">
          <span className="dot" /> {event.time} <span className="dot" />
        </p>
      </div>
    </Section>
  );
}