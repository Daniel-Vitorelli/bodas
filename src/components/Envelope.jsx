import { useState } from "react";
import { motion } from "framer-motion";
import { event } from "../data.js";

export default function Envelope({ onBurst, onOpen }) {
  const [opened, setOpened] = useState(false);
  const [ending, setEnding] = useState(false);

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
    setTimeout(() => onBurst?.(), 1100);
    setTimeout(() => setEnding(true), 1500);
    setTimeout(() => onOpen?.(), 2050);
  };

  return (
    <div className="scene">
      <div className="env-halo" aria-hidden="true" />

      <motion.div
        className="envelope"
        initial={{ y: 60, opacity: 0 }}
        animate={
          ending
            ? { y: -26, scale: 0.96, opacity: 0 }
            : { y: 0, opacity: 1 }
        }
        transition={
          ending
            ? { duration: 0.55, ease: "easeIn" }
            : { type: "spring", stiffness: 90, damping: 16 }
        }
      >
        <div className="env-back" />

        <motion.div
          className="letter"
          animate={opened ? { y: -64 } : { y: 0 }}
          initial={{ y: 0 }}
          transition={{ type: "spring", stiffness: 130, damping: 15, delay: opened ? 0.55 : 0 }}
        >
          <span className="letter-monogram">{event.names.monogram}</span>
          <p className="letter-label">convite</p>
        </motion.div>

        <div className="env-pocket env-pocket--left" />
        <div className="env-pocket env-pocket--right" />
        <div className="env-pocket env-pocket--bottom" />

        <motion.div
          className="flap"
          initial={false}
          animate={opened ? { rotateX: 180 } : { rotateX: 0 }}
          transition={{ type: "spring", stiffness: 130, damping: 14, delay: opened ? 0.15 : 0 }}
        />

        <span className="env-gloss" aria-hidden="true">
          <motion.span
            className="env-shine"
            initial={{ rotate: 18, opacity: 1 }}
            animate={{ rotate: 18, opacity: opened ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
        </span>

        <span className="env-stamp" aria-hidden="true">50</span>

        {opened && (
          <span className="seal-rays" aria-hidden="true">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="seal-ray" style={{ transform: `rotate(${i * 30}deg)` }}>
                <motion.span
                  className="seal-ray-bar"
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: [0, 1, 1], opacity: [0, 1, 0] }}
                  transition={{ duration: 0.5, delay: 0.03 + i * 0.014, ease: "easeOut" }}
                />
              </span>
            ))}
          </span>
        )}

        <motion.button
          className="seal"
          type="button"
          aria-label="Abrir convite"
          onClick={handleOpen}
          initial={false}
          animate={opened ? { scale: 1.7, rotate: 24, opacity: 0 } : { scale: 1, rotate: 0, opacity: 1 }}
          transition={opened ? { duration: 0.32, ease: "easeOut" } : {}}
          whileHover={opened ? {} : { scale: 1.08 }}
          whileTap={opened ? {} : { scale: 0.94 }}
        >
          <span className="seal-drip seal-drip--b" />
          <span className="seal-drip seal-drip--bl" />
          <span className="seal-drip seal-drip--br" />
          <span className="seal-drip seal-drip--t" />
          <span className="seal-shine" />
          <span className="seal-ring">
            <span className="seal-label">{event.names.monogram}</span>
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
}