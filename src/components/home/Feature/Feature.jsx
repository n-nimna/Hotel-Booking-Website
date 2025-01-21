import React from 'react';

const Features = () => {
  const features = [
    {
      icon: (
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          className="h-8 w-8 text-sky-400"
          stroke="currentColor"
        >
          <path 
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
        </svg>
      ),
      title: 'Easy Booking',
      description: 'Simple and fast reservation process designed to save to time and eliminate booking.'
    },
    {
      icon: (
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          className="h-8 w-8 text-sky-400"
          stroke="currentColor"
        >
          <path 
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
        </svg>
      ),
      title: 'Friendly Interface',
      description: 'User-friendly design that makes navigation, finding information easy for all users.'
    },
    {
      icon: (
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          className="h-8 w-8 text-sky-400"
          stroke="currentColor"
        >
          <path 
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
        </svg>
      ),
      title: 'Responsibility',
      description: 'Committed providing reliable services with accountability and care for every guest.'
    },
    {
      icon: (
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          className="h-8 w-8 text-sky-400"
          stroke="currentColor"
        >
          <path 
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
        </svg>
      ),
      title: '24/7 Support',
      description: 'Round-the-clock assistance to address any questions, issues, ensuring seamless.'
    }
  ];

  return (
    <div className="py-3 bg-white mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Why you choose us
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-l text-gray-600">
            Choose us for exceptional service, luxurious comfort, and unforgettable experiences tailored to your needs, ensuring a memorable stay with unmatched attention to detail.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900 text-center">
                {feature.title}
              </h3>
              <p className="mt-5 text-base text-gray-500 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div><br />
    </div>
  );
};

export default Features;