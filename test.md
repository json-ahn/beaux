import * as React from "react";
import {WorldMap} from "react-svg-worldmap";
import "./App.css";


function createTextLabels(width) {
  const labels = [
    { label: "VANCOUVER", x: 0.083 * width, y: 0.30 * width },
    { label: "JAPAN", x: 0.90 * width, y: 0.45 * width },
    { label: "HAWAII", x: 0.083 * width, y: 0.48 * width },
    { label: "SEOUL", x: 0.82 * width, y: 0.30 * width},
  ]

  const handleClick = (label) => {
    window.location.href = `https://www.google.ca/${label.label}`;
  }

  if (width < 550) {
    return labels.map(label => ({
      ...label,
      style: { ...label.style, fontSize: "70%" },
      onClick: () => handleClick(label),
    }));
  }

  return labels.map((label) => ({
    ...label,
    onClick: () => handleClick(label),
  }));
}

function App() {
  const data = [
    { country: "us", value: 331883986 }, // united states
    { country: "jp", value: 161062905 }, // japan
    { country: "kr", value: 141944641 }, // korea
    { country: "ca", value: 123114514 }, // canada
  ];

  return (
    <div className="App">
      <WorldMap
        color="skyblue"
        size="xxl"
        data={data}
        
        onClickFunction={() => alert('hi')}
        textLabelFunction={createTextLabels}
        text="hello"
        tooltipTextColor="yellow"
      />

      
    </div>
  );
}

export default App;