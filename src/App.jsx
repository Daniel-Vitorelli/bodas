import { useState } from "react";
import "./App.css";
import FloatingDecor from "./components/FloatingDecor.jsx";
import Confetti from "./components/Confetti.jsx";
import Envelope from "./components/Envelope.jsx";
import LetterHero from "./components/LetterHero.jsx";
import Countdown from "./components/Countdown.jsx";
import Details from "./components/Details.jsx";
import RSVP from "./components/RSVP.jsx";
import Footer from "./components/Footer.jsx";
import { event } from "./data.js";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const burst = () => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 3200);
  };

  return (
    <div className="app">
      <FloatingDecor />
      {confetti && <Confetti />}

      {!opened ? (
        <div className="intro-screen">
          <header className="intro-head">
            <p className="intro-eyebrow">Convite especial</p>
            <h1 className="intro-title">
              {event.names.display}
              <span className="intro-title-sub">{event.years} Anos de Amor</span>
            </h1>
            <p className="intro-sub">Uma carta preparada com carinho só para você.</p>
          </header>

          <Envelope onBurst={burst} onOpen={() => setOpened(true)} />

          <p className="intro-hint">Toque no lacre para abrir</p>
        </div>
      ) : (
        <main className="content">
          <LetterHero />
          <Countdown />
          <Details />
          <RSVP />
          <Footer />
        </main>
      )}
    </div>
  );
}