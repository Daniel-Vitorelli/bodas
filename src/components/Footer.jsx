import Section from "./Section.jsx";
import { event } from "../data.js";

export default function Footer() {
  return (
    <Section className="footer-section">
      <div className="footer-divider" aria-hidden="true">
        <span /><i /><span />
      </div>
      <p className="footer-script">{event.names.display}</p>
      <p className="footer-text">
        {event.years} anos juntos — {event.marriedDate}
      </p>
      <p className="footer-note">Feito com amor para celebrar o Jubileu de Ouro.</p>
    </Section>
  );
}