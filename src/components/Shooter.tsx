import React, { useState } from "react";
import Bubble from "./Bubble";

interface ShooterProps {
  bubbleSize: number;
  shootBubble: (color: string) => void;
}

const Shooter: React.FC<ShooterProps> = ({ bubbleSize, shootBubble }) => {
  const [currentBubble, setCurrentBubble] = useState<string>("red");

  const handleShoot = () => {
    shootBubble(currentBubble);
    // Logic to change to the next bubble color can be added here
    setCurrentBubble("blue"); // Example: set next bubble color to blue
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Bubble color={currentBubble} size={bubbleSize} />
      <br />
      <button onClick={handleShoot} style={{ marginTop: "10px" }}>
        Shoot
      </button>
    </div>
  );
};

export default Shooter;
