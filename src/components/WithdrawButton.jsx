import React from "react";

function MyComponent() {
  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        placeholder="Enter an amount"
        className="w-36 h-8 border border-gray-400 rounded-md px-3 py-2 mb-4"
      />
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-full w-36 h-8 flex items-center justify-center">
        Withdraw
      </button>
    </div>
  );
}

export default MyComponent;
