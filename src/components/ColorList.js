import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
       { colors.map((color,index) => <li key={color} style={{ color: color[index] }}>{colors[index]}</li>)}
      
      </ol>
    </div>
  );
}

export default ColorList;
