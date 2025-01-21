import React from 'react';
import BookingForm from './BookingForm';

const Hero = () => {
  return (
    <div id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://www.1hotels.com/sites/1hotels.com/files/brandfolder/7b9bx9cbk65j9ngxk35fq7bv/Main_Pool_4w1440.png')"
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <p className="text-lg mb-2">Luxury Meets Coastal Paradise</p>
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-8">
          Welcome to AquaLuxe
        </h1>
        <BookingForm />
      </div>
    </div>
  );
};

export default Hero;