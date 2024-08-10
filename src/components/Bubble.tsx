import React from "react";

interface BubbleProps {
  color: string;
  size: number;
}

const Bubble: React.FC<BubbleProps> = ({ color, size }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        borderRadius: "50%",
        border: "1px solid #000",
        display: "inline-block",
        margin: "2px",
      }}
    />
  );
};

export default Bubble;
