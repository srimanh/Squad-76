import React, { useEffect, useRef } from "react";
import "../styling/News.css";
import groupPhoto from "../assets/pic.jpg"; 
import groupPhoto2 from "../assets/image2.png";
import groupPhoto3 from "../assets/image3.png";
import groupPhoto4 from "../assets/image4.png";

const News = () => {
  // useRef to store references to each timeline event item
  const timelineRef = useRef([]);

  // Effect to observe when each timeline item becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add "show" class to the element when it is in the viewport
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 } // Trigger observer when 20% of the element is visible
    );

    // Attach observer to each timeline item
    timelineRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
  }, []); // Empty dependency array means this effect runs only once

  // Array containing events for the timeline
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
      desc: "Onam celebrations are better when shared with an amazing squad. One unforgettable!",
      image: groupPhoto2,
    },
    {
      title: "🥳 Diwali Fete",
      date: "Oct 26 , 2024",
      desc: "We celebrated Diwali with lights, fun, and togetherness.",
      image: groupPhoto3,
    },
    {
      title: "🥳 DevFest (GDG)",
      date: "Nov 10 , 2024",
      desc: "Had an amazing time participating in DevFest GDG! It was a fantastic opportunity to learn from industry experts, connect with fellow developers, and explore the latest trends in technology.",
      image: groupPhoto4,
    },
  ];

  return (
    <section className="timeline-section" style={{ backgroundColor: "#D0FF00" }}>
      {/* Section Title */}
      <h2 className="timeline-title">Squad News & Events</h2>

      <div className="timeline-container">
        {/* Loop through each event and display it */}
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`} // Alternate left/right alignment for items
            ref={(el) => (timelineRef.current[index] = el)} // Store reference of each item for the IntersectionObserver
          >
            <div className="timeline-content">
              {/* Event image */}
              <img src={event.image} alt={event.title} className="timeline-image" />
              {/* Event title */}
              <h3>{event.title}</h3>
              {/* Event date */}
              <p className="timeline-date">{event.date}</p>
              {/* Event description */}
              <p className="timeline-para">{event.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
