import React from 'react';

const Background = () => {
  return (
    <div className="relative bg-gradient-to-r from-red-100 to-lime-50 h-screen blur-2xl">
      <div className="rounded-lg -rotate-45 bg-green-500 h-64 w-96 absolute top-1/2 right-1/3 transform translate-x-1/2 -translate-y-1/2 skew-y-12"></div>
      <div className="rounded-full bg-pink-300 h-80 w-80 absolute top-1/2 right-2/4 transform translate-x-1/5 -translate-y-1/2"></div>
    </div>
  );
}

export default Background;
