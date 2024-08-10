// src/components/Bubble.tsx
import React from "react";
import "./Bubble.css";

interface BubbleProps {
  color: string;
  x: number;
  y: number;
}

const Bubble: React.FC<BubbleProps> = ({ color, x, y }) => {
  const style = {
    backgroundColor: color,
    left: `${x}px`,
    top: `${y}px`,
  };

  return <div className="bubble" style={style}></div>;
};

export default Bubble;
