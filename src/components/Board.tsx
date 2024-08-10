import React from "react";
import Bubble from "./Bubble";

interface BoardProps {
  rows: number;
  columns: number;
  bubbleSize: number;
  bubbles: string[][];
}

const Board: React.FC<BoardProps> = ({
  rows,
  columns,
  bubbleSize,
  bubbles,
}) => {
  return (
    <div>
      {bubbles.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex" }}>
          {row.map((color, colIndex) => (
            <Bubble key={colIndex} color={color} size={bubbleSize} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
