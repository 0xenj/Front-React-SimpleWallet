import React from "react";

function Header() {
  return (
    <div className="relative w-64 h-12">
      <div className="absolute inset-0 backdrop-filter backdrop-blur-lg backdrop-saturate-100 backdrop-opacity-150"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white font-serif text-4xl font-bold">Rewards token total supply</h1>
      </div>
    </div>
  );
}

export default Header;