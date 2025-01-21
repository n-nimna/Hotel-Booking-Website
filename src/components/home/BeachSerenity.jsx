import React from 'react';
import "../styles/BeachSerenity.css"; // Adjust based on actual path

const BeachSerenity = () => {
  return (
    <section className="serenity-section py-3">
      <div className="serenity-container">
        <div className="serenity-grid">
          <div className="serenity-image-container">
            <img
              src="https://media.myboutiquehotel.com//storage/mbhmag/per-aquum.jpg"
              alt="AquaLuxe Beach"
              className="serenity-image"
            />
          </div>
          <div className="serenity-content">
            <h2>AquaLuxe Beach Serenity</h2>
            <p>
              AquaLuxe combines beachside tranquility with refined luxury, offering to serve as an unforgettable escape for its cherished guests. Our pristine shores provide the perfect backdrop for relaxation, adventure, and sustainability. With stunning ocean views, personalized service, and eco-conscious amenities, we strive to create an environment that seamlessly blends luxury with eco-friendly practices. AquaLuxe is a true coastal retreat, where we've created a climate of comfort and warmth.
            </p>
            <button className="serenity-button">
              Learn more →
            </button>
          </div>
        </div>
      </div><br />
    </section>
  );
};

export default BeachSerenity;