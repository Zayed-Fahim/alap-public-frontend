import React from "react";

const Welcome = () => {
  return (
    <div className="flex gap-3 flex-col">
      <h1 className="text-4xl font-semibold flex items-center">
        Welcome! Zayed Fahim.
        <span className="ml-2 animate-wave text-3xl">🙌</span>
      </h1>
      <p className="text-xl font-semibold">Click on any chat to start messaging!</p>
    </div>
  );
};

export default Welcome;
