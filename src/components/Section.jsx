import { motion } from "framer-motion";

export default function Section({ children, className = "", ...props }) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, ease: [0.16, 0.82, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.section>
  );
}