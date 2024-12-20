import React, { useEffect, useRef, useState } from "react";
import "../styling/Members.css";
import sibi from "../assets/sibi.png";
import ajay from "../assets/ajay.png";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import circleBig from "../assets/circle1.png";
import circleSmall from "../assets/circleSmall.png";  
import backgroundBlob from "../assets/backgroundBlob1.png";
import chatCloud from "../assets/chatCloud.png";
import rigthCircle from "../assets/rightc.png"
import squadMembers from "../data/squadMembers";

function Members() {
  const sectionRef = useRef();
  const squadRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [keyPressed, setKeyPressed] = useState(0);

  // Intersection Observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current.querySelectorAll(".mentor-box");
    const squadElements = squadRef.current.querySelectorAll(".squad-container");

    [...elements, ...squadElements].forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setCurrentIndex((prevIndex) =>
          prevIndex < squadMembers.length - 1 ? prevIndex + 1 : 0
        );
        setKeyPressed((prev) => prev + 1);
      }
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : squadMembers.length - 1
        );
        setKeyPressed((prev) => prev + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const currentMember = squadMembers[currentIndex];

  return (
    <>
      {/* Supporters Section */}
      <section id="members" className="members-section" style={{ backgroundColor: "#D0FF00" }} ref={sectionRef}>
        <h2 className="section-heading">Supporters</h2>
        <div className="mentor-container">
          <div className="mentor-box animate-left">
            <img src={ajay} alt="Mentor 1" className="mentor-image" />
            <h3 className="mentor-name">Ajay</h3>
            <p className="mentor-position">Program Mentor</p>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className="icon" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" className="icon" />
              </a>
              
            </div>
          </div>
          <div className="mentor-box animate-right">
            <img src={sibi} alt="Mentor 2" className="mentor-image" />
            <h3 className="mentor-name">SibiShree</h3>
            <p className="mentor-position">Technical Mentor</p>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className="icon" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" className="icon" />
              </a>
              
            </div>
          </div>
        </div>
      </section>
      <h1 className="section-headings">Squadmates</h1>
      {/* Squad Members Section */}
      <section id="squadmates" className="members-section"  ref={squadRef}>
  {/* Background Animations */}
  <img
    src={circleBig}
    alt="Circle Big"
    className={`background-circle big key-${keyPressed}`}
  />
  <img
    src={circleSmall}
    alt="Circle Small"
    className={`background-circle small key-${keyPressed}`}
  />
  <img
    src={backgroundBlob}
    alt="Blob"
    className={`background-blob key-${keyPressed}`}
  />
  <img
    src={chatCloud}
    alt="Chat"
    className={`chat-cloud key-${keyPressed}`}
  />
  <img
    src={rigthCircle}
    alt="rightCircle"
    className={`rightcircle right key-${keyPressed}`}
  />

  {/* Squad Member Content */}
  <div className="squad-container key-animation">
    <img
      src={currentMember.image}
      alt={currentMember.name}
      className="member-image"
    />
    <div className="member-details">
      <h2 className="member-name">
        <span className="hello-text">Hello</span> <br />
        <span className="im-text">I m   </span>
        <span className="name-text">{currentMember.name}</span>
      </h2>
      <p className="member-position">{currentMember.position}</p>
      <p className="member-description">{currentMember.description}</p>

      {/* Chat Text */}
      <div className="chat-text">{currentMember.chat}</div>

      {/* Social Icons */}
      <div className="social-icon">
        <a
          href={currentMember.social.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a
          href={currentMember.social.github}
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default Members;
