import React from 'react';

const Background = () => {
  return (
    <div className="relative bg-gradient-to-r from-red-100 to-lime-50 h-screen blur-lg">
      <div className="bg-green-500 h-32 w-32 absolute top-200 left-1000"></div>
    </div>
  );
}

export default Background;
