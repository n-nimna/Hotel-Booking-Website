import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EventPlan = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://www.verobeachhotelandspa.com/images/1700-960/031-verola-studio-llc-e543722e.jpg",
    "https://duaelbluiumc3.cloudfront.net/Media/Images/InboundImages/Blog/beach-parties-in-vietnam-nha-trang.jpg",
    "https://eventsmanagementkerala.com/wp-content/uploads/2023/02/blog-2.27e5a04.webp"
  ];

  const nextSlide = () => {
    setCurrentSlide(prev => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(prev => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section id="wedding-and-events">
      <div className="w-full bg-white p-4">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Joyful Memories</h2>
          
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={images[currentSlide]}
              alt={`Event Slide ${currentSlide + 1}`}
              className="w-full h-[500px] object-cover"
            />
  
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
  
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
  
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === index 
                      ? 'w-4 bg-white' 
                      : 'w-2 bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
  
          <div className="mt-8 text-center">
            <button 
              className="bg-[#347EBF] text-white rounded-lg px-6 py-3 h-12 hover:bg-[#2868A6] transition-colors"
            >
              Plan Your Event With Us
            </button>
          </div>
        </div>
      </div><br /><br />
    </section>
  );
};

export default EventPlan;