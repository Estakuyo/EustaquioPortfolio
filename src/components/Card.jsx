import "./Card.css";
import { useState } from "react";

export default function Card({ title, image, alt, description, repo }) {
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  function flipCard() {
    setIsCardFlipped((prev) => !prev);
  }

  function handleButtonClick(e) {
    e.stopPropagation();
    window.open(repo, "_blank");
  }

  return (
    <div className="card-container" onClick={flipCard}>
      <div className={`card-flipper ${isCardFlipped ? "flipped" : ""}`}>
        <article className="card card-front">
          <img src={image} alt={alt} />
          <h2>{title}</h2>
        </article>
        <article className="card back-card card-back">
          <p>{description}</p>
          <button onClick={handleButtonClick}>View On Github</button>
        </article>
      </div>
    </div>
  );
}
