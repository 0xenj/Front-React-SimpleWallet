import React from "react";

const Dashboard = () => {
    return (
      <div className="border-double border-2 border-white backdrop-saturate-125 bg-white/30 backdrop-opacity-80 backdrop-filter backdrop-blur-2xl rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-extrabold mb-4">Dashboard</h1>
        <div className="flex flex-col gap-2">
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-2">Total funds</h2>
            <p className="text-gray-700 font-medium">000000000000000000000</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-2">Total funds locked</h2>
            <p className="text-gray-700 font-medium">000000000000000000000</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-2">Rewards token total supply</h2>
            <p className="text-gray-700 font-medium">000000000000000000000</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-2">Protocol gains</h2>
            <p className="text-gray-700 font-medium">000000000000000000000</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;