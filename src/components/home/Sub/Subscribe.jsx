import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing email:', email);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      <h2 className="text-lg font-medium mb-6 text-gray-800">
        STAY IN TOUCH
      </h2>
      <p className="text-black font-bold text-2xl mb-4">
        Join our email. First to know about specials, events and more!
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-600 transition-colors"
          style={{
            backgroundColor: '#347EBF',
            color: 'white'
          }}
        >
          Subscribe
        </button>
      </form>
      <br />
    </div>
  );
};

export default Subscribe;