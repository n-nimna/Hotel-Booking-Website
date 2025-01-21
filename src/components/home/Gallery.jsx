import React from 'react';
import "../styles/Gallery.css";


const Gallery = () => {
  const galleryImages = [
    'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80',
    'https://travel.rakuten.com/contents/sites/contents/files/styles/max_1300x1300/public/2023-06/beachside-hotels_4.jpg?itok=d154q3Qk'
  ];

  const galleryImage = [
    'https://cdn.prod.website-files.com/62e3e4071daebd0b1c41ef63/66fe93453f033de0ad22353e_the-loren-bermuda-social-preview.jpg',
    'https://www.amarehotels.com/wp-content/uploads/2018/05/amare-ibiza-belvue-02.jpg',
    'https://www.seaside-santorini.com/sites/seaside-santorini/files/photos/28.jpg'
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <h2 className="gallery-title">Check Out Hotel Gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="gallery-image"
              />
            </div>
          ))}
        </div>
        <br />

        <div className="gallery-grid">
          {galleryImage.map((image, index) => (
            <div key={index} className="gallery-item">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="gallery-image"
              />
            </div>
          ))}
        </div>

        <div className="button-container">
          <button className="serenity-button">Learn more →</button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;