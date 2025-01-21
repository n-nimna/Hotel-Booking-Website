import React from 'react';
import { Calendar } from 'lucide-react';

const BookingForm = () => {
  return (
    <div
      className="w-full max-w-6xl bg-white rounded-lg shadow-xl p-6"
      style={{
        backdropFilter: 'blur(1px)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Arrival Date */}
        <div className="relative">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Arrival date
          </label>
          <div className="relative">
            <input
              type="date"
              className="w-full p-2 border rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-green-600"
              defaultValue="2022-06-04"
            />
            <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Departure Date */}
        <div className="relative">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Departure date
          </label>
          <div className="relative">
            <input
              type="date"
              className="w-full p-2 border rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-green-600"
              defaultValue="2022-06-04"
            />
            <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Number of People */}
        <div className="relative">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Number of people
          </label>
          <div className="relative">
            <input
              type="number"
              min="1"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
        </div>

        {/* Book Now Button - Aligned with inputs */}
        <div className="relative flex items-end">
          <button
            className="w-full rounded-lg px-6 py-2 hover:bg-blue-600 transition-colors h-11"
            style={{
              backgroundColor: '#347EBF',
              color: '#fff',
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;