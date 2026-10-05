import { motion } from "framer-motion";
import { event } from "../data.js";

const wrap = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 0.82, 0.36, 1] } },
};

const shimmer = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 14, delay: 0 },
  },
};

/* a moldura da foto é um motion.div: a rotação precisa vir do framer-motion,
   senão o transform inline sobrescreve o `transform` do CSS */
const photoItem = {
  hidden: { opacity: 0, y: 24, rotate: -1.4 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: -1.4,
    transition: { duration: 0.6, ease: [0.16, 0.82, 0.36, 1] },
  },
};

const sparkles = [
  { left: "18%", top: "22%", size: 5, duration: 4 },
  { left: "83%", top: "18%", size: 4, duration: 5 },
  { left: "25%", top: "74%", size: 4, duration: 4.5 },
  { left: "80%", top: "64%", size: 5, duration: 5.5 },
];

export default function LetterHero() {
  const photo = event.photo;

  return (
    <motion.section
      className="letter-hero"
      variants={shimmer}
      initial="hidden"
      animate="visible"
    >
      <div className="letter-card">
        <div className="lettersheet" aria-hidden="true">
          {sparkles.map((s, i) => (
            <motion.span
              key={i}
              className="card-sparkle"
              style={{ left: s.left, top: s.top, width: s.size, height: s.size }}
              animate={{ y: [0, -16], opacity: [0, 0.85, 0] }}
              transition={{ duration: s.duration, repeat: Infinity, ease: "easeInOut", delay: i * 1.1 }}
            />
          ))}
        </div>

        <span className="corner corner--tl" aria-hidden="true" />
        <span className="corner corner--tr" aria-hidden="true" />
        <span className="corner corner--bl" aria-hidden="true" />
        <span className="corner corner--br" aria-hidden="true" />

        <motion.div className="letter-inner" variants={wrap} initial="hidden" animate="visible">

          <motion.div className="lh-rings" variants={item}>
            <svg viewBox="0 0 120 70" width="120" height="70" aria-hidden="true">
              <circle cx="42" cy="35" r="27" fill="none" stroke="#c9a227" strokeWidth="2.5" />
              <circle cx="78" cy="35" r="27" fill="none" stroke="#c9a227" strokeWidth="2.5" />
            </svg>
          </motion.div>

          <motion.p className="lh-eyebrow" variants={item}>
            {event.title}
          </motion.p>

          <motion.h1 className="lh-names" variants={item}>
            {event.names.display}
          </motion.h1>

          <motion.p className="lh-script" variants={item}>
            Você está convidado para celebrar
          </motion.p>
          <motion.p className="lh-subtitle" variants={item}>
            50 anos de casados
          </motion.p>

          <motion.div className="lh-divider" variants={item} aria-hidden="true">
            <span /><i /><span />
          </motion.div>

          <motion.div className="photo-frame" variants={photoItem}>
            <div className="photo-frame-inner">
              {photo ? (
                <img src={photo} alt={`${event.names.display} — foto`} className="photo-img" />
              ) : (
                <div className="photo-fallback">
                  <span className="photo-monogram">{event.names.monogram}</span>
                  <span className="photo-sub">{event.years} anos</span>
                </div>
              )}
            </div>
          </motion.div>
          <motion.p className="photo-caption" variants={item}>
            Desde {event.marriedDate}
          </motion.p>

          {event.message.map((text, i) => (
            <motion.p key={i} className="lh-message" variants={item}>
              {text}
            </motion.p>
          ))}

          <motion.div className="lh-footer" variants={item}>
            <span className="lh-signature">{event.signature}</span>
            <span className="lh-sign-names">{event.names.display}</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}