import React, { useEffect, useRef } from "react";
import "../styling/News.css";
import groupPhoto from "../assets/pic.jpg"; 
import groupPhoto2 from "../assets/image2.png";
import groupPhoto3 from "../assets/image3.png";
import groupPhoto4 from "../assets/image4.png";


const Timeline = () => {
  const timelineRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    timelineRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
  }, []);

  const timelineEvents = [
    {
      title: "🎉 Squad Launch",
      date: "Aug 19 , 2024",
      desc: "We officially launched Squad 76 with a successful inaugural event.",
      image: groupPhoto,
    },
    {
      title: "🥳 Onam Festival",
      date: "Sep 14 , 2024",
      desc: "Onam celebrations are better when shared with an amazing squad. one unforgettable!",
      image: groupPhoto2,
    },
    {
      title: "🥳  Diwali Fete",
      date: "Oct 26 , 2024",
      desc: "We officially launched Squad 76 with a successful inaugural event.",
      image: groupPhoto3,
    },
    {
      title: "🥳 DevFest(GDG)   ",
      date: "🥳 DevFest(GDG)   ",
      desc: "Had an amazing time participating in DevFest GDG! It was a fantastic opportunity to learn from industry experts, connect with fellow developers, and explore the latest trends in technology.",
      image: groupPhoto4,
    },
  ];

  return (
    <section className="timeline-section" style={{ backgroundColor: "#D0FF00" }}>
      <h2 className="timeline-title">Squad News & Events</h2>
      <div className="timeline-container">
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            ref={(el) => (timelineRef.current[index] = el)}
          >
            <div className="timeline-content">
              <img src={event.image} alt={event.title} className="timeline-image" />
              <h3>{event.title}</h3>
              <p className="timeline-date">{event.date}</p>
              <p className="timeline-para">{event.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
