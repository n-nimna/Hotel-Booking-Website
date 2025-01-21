import React from 'react';
import "./RoomsSection.css";
 // If it's in a parent directory


const RoomSection = () => {
  const rooms = [
    {
      title: "Standard Room",
      description: "A basic, comfortable room with essential amenities for budget conscious travelers",
      imageUrl: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80",
      link: "/standard-room"
    },
    {
      title: "Classical Room",
      description: "Elegantly decorated room with traditional styling and premium furnishings",
      imageUrl: "https://hips.hearstapps.com/hmg-prod/images/haver-skolnick-architects-portfolio-interiors-bedroom-1501108587-7963426-1584463298.jpg?crop=1.00xw:0.754xh;0,0.217xh&resize=1200:*",
      link: "/classical-room"
    },
    {
      title: "Suite Room",
      description: "Spacious room with luxury and premium comfort experience",
      imageUrl: "https://symphony.cdn.tambourine.com/caribe-royale-resort/media/caribe-royale-resort-disney-intro-stop2-6172f2f91fb1d-61771d77364e2-optimized.jpeg",
      link: "/suite-room"
    }
  ];

  return (
    <div id="rooms">
      <section className="room-section">
        <div className="room-grid">
          {rooms.map((room) => (
            <div key={room.title} className="room-card">
              <div className="room-image-container">
                <img src={room.imageUrl} alt={room.title} className="room-image" />
                <div className="room-overlay">
                  <h3 className="room-title">{room.title}</h3>
                  <p className="room-description">{room.description}</p>
                  <a href={room.link} className="room-link">
                    More About {room.title} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="button-container">
          <button className="serenity-button">Learn more →</button>
        </div>
      </section>
    </div>
  );
};

export default RoomSection;