import React, { useState } from "react";
import "../styling/Gallery.css"; 
import aug from "../assets/augest.jpg"
import sep from "../assets/sep.jpg"
import out from "../assets/out.jpg"
import nov from "../assets/nov.jpg"
import dec from "../assets/dec.jpg"


const cityData = {
  Aug: { image: aug, text: " The beginning of something extraordinary! 🌟 This month marks the launch of our squad, where every step forward is fueled by passion, teamwork, and ambition. Here’s to new beginnings, unforgettable moments, and a journey we’ll make together!" },
  Sep: { image: sep, text: "September brought us closer as a squad, and Onam made it even more special! 🌸✨ From the vibrant pookalam to the delicious sadya, we celebrated traditions and created unforgettable memories together. Here’s to more joy, unity, and blessings this festive season! Happy Onam from our squad!" },
  Oct: { image: out, text: "October was lit with joy as we celebrated Diwali with the squad! 🪔✨ From the sparkle of diyas to the laughter we shared, it was a festival of lights and memories. Here's to more moments of happiness and togetherness!" },
  Nov: { image: nov, text: "November was all about growth and learning! 🚀 Our squad powered through the FOSS technical event, exploring new ideas and making unforgettable memories. Here's to innovation, teamwork, and endless possibilities!" },
  Dec: { image: dec, text: "December wrapped up our first semester with a bang at DevFest! 🚀🎉 Our squad learned, innovated, and celebrated every moment. Cheers to the memories made and the exciting journey ahead!" },
};

function Gallery() {
  const [popupData, setPopupData] = useState(null);

  const handleCityClick = (month) => {
    setPopupData(cityData[month] || { text: "No data available for this month.", image: "" });
  };

  const closePopup = () => {
    setPopupData(null);
  };

  return (
    <section id="gallery" >
      <div className="map-container">
        {/* Map Cities */}
        {Object.keys(cityData).map((month) => (
          <div
            key={month}
            className={`map-city`}
            data-month={month}
            onClick={() => handleCityClick(month)}
          >
            📍
          </div>
        ))}

        {/* Popup */}
        {popupData && (
          <div className={`popup-container ${popupData ? "show" : ""}`}>
            {popupData.image && (
              <img
                src={popupData.image}
                alt={popupData.text}
                className="popup-image"
              />
            )}
            <div className="popup-text">{popupData.text}</div>
            <button className="go-back-button" onClick={closePopup}>
              Go Back
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
