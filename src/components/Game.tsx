import React, { useState } from "react";
import Board from "./Board";
import Shooter from "./Shooter";

const initialBubbles = [
  ["red", "green", "blue", "yellow", "purple"],
  ["yellow", "blue", "green", "red", "purple"],
  ["purple", "red", "yellow", "blue", "green"],
];

const Game: React.FC = () => {
  const [bubbles, setBubbles] = useState<string[][]>(initialBubbles);

  const shootBubble = (color: string) => {
    // Handle the shooting logic (e.g., find the matching bubbles and remove them)
    console.log(`Shooting bubble with color: ${color}`);
  };

  return (
    <div className="game-container">
      <h1>Bubble Shooter</h1>
      <Board rows={3} columns={5} bubbleSize={40} bubbles={bubbles} />
      <Shooter bubbleSize={40} shootBubble={shootBubble} />
    </div>
  );
};

export default Game;
