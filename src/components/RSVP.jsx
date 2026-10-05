import Section from "./Section.jsx";
import { event } from "../data.js";

export default function RSVP() {
  const waLink = `https://wa.me/${event.whatsapp}?text=${encodeURIComponent(
    `Olá! Recebemos o convite das Bodas de Ouro de ${event.names.display} e teremos o prazer de confirmar nossa presença!`
  )}`;

  return (
    <Section className="rsvp-section">
      <div className="rsvp-card">
        <span className="ornament" aria-hidden="true">❀</span>
        <h2 className="rsvp-title">Confirme sua presença</h2>
        <p className="rsvp-text">
          Sua resposta faz toda a diferença. Envie uma mensagem pelo WhatsApp
          confirmando que você estará conosco neste dia tão especial.
        </p>
        <a className="btn-whatsapp" href={waLink} target="_blank" rel="noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.2c-.3.8-1.5 1.5-2.6 1.7-.6.1-1.6.1-2.6-.2A13.8 13.8 0 0 1 6.2 14.3a10.6 10.6 0 0 1-1.7-2.3 4.6 4.6 0 0 1-.3-2.3c.1-.8.9-1.6 1.4-1.9h.4l.2.2c.2.4.5 1.3.6 1.4l.2.4c0 .1 0 .2-.1.3l-.3.4a1.5 1.5 0 0 0-.1.3 8.2 8.2 0 0 0 4.3 3.2c.2.1.4 0 .6-.2l.8-1c.3-.2.4-.2.6-.1.4.2 1.5.7 1.7 1l.3.4c.1.2.1.4 0 .7Z" />
          </svg>
          Confirmar pelo WhatsApp
        </a>
        <p className="rsvp-phone">
          Ou pelo WhatsApp <strong>{event.phoneDisplay}</strong>
        </p>
      </div>

      {event.showMap && (
        <a className="map-card" href={event.mapLink} target="_blank" rel="noreferrer">
          <div className="map-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" />
              <circle cx="12" cy="10" r="2.6" />
            </svg>
          </div>
          <div>
            <span className="map-title">{event.location}</span>
            <span className="map-sub">Ver como chegar no mapa →</span>
          </div>
        </a>
      )}
    </Section>
  );
}