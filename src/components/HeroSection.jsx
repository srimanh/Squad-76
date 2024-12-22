import React, { useEffect, useState } from "react";
import "../styling/HeroSection.css";
import groupPhoto from "../assets/pic.jpg";

function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const fullText = ["76 souls, one purpose -", "excellence in unity"];

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;

    //  Function to type the text with a delay
    const typeLine = () => {
      if (lineIndex < fullText.length) {
        if (charIndex <= fullText[lineIndex].length) {
          setTypedText((_prev) =>
            lineIndex === 0
              ? `${fullText[0].slice(0, charIndex)}`
              : `${fullText[0]}<br>${fullText[1].slice(0, charIndex)}`
          );
          
          charIndex++;
          setTimeout(typeLine, 100);
        } else {
          lineIndex++;
          charIndex = 0;
          setTimeout(typeLine, 500);
        }
      }
    };

    typeLine();
  }, []);

  return (
    <section id="hero" className="hero-section">
      {/* Typing Animation */}
      <div className="typing-container">
        <h1
          className="typing-text"
          dangerouslySetInnerHTML={{ __html: typedText }}
        ></h1>
      </div>

      {/* Content Box */}
      <div className="hero-content-box">
        <div className="content-left" >
          <p >
            Squad 76 embodies creativity,
            <br />
            teamwork, and excellence.
            <br />
            United by a shared vision, we
            <br />
            innovate, inspire, and achieve
            <br />
            together, embracing challenges
            <br />
            to create meaningful impact
            <br />
            through collaboration and
            <br />
            dedication.
          </p>
        </div>
        <div className="content-right">
          <img
            src={groupPhoto}
            alt="Squad 76 Group"
            className="group-photo"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
