import React, { useRef, useControls } from "react";
import { WorldMap } from "react-svg-worldmap";
import "./App.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function createTextLabels(width) {
  const labels = [
    { label: "YVR", x: 0.083 * width, y: 0.3 * width },
    { label: "TYO", x: 0.9 * width, y: 0.45 * width },
    { label: "HNL", x: 0.083 * width, y: 0.48 * width },
    { label: "ICN", x: 0.82 * width, y: 0.3 * width },
  ];

  // {({ zoomIn, zoomOut, resetTransform, positionX, positionY }) => (
  //   <React.Fragment>
  //     <button onClick = {zoomIn}>+</button>
  //   </React.Fragment>
  // )}

  const handleClick = (label) => {
    // window.location.href = `localhost:5174/${label.label}`;
    <button onClick={() => zoomIn(label)}>${label}</button>;
    console.log("testing");
  };

  if (width < 550) {
    return labels.map((label) => ({
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
    { country: "us", value: "(X Visits)" }, // united states
    { country: "jp", value: "(1 Visits)" }, // japan
    { country: "kr", value: "(X Visits)" }, // korea
    { country: "ca", value: "(Current Home)" }, // canada
  ];

  const transformOptions = {
    initialScale: 1,
    minScale: 0.5,
    maxScale: 2
  }

  return (
    <TransformWrapper
      initialScale={1}
      options={transformOptions}
      initialPositionX={100}
      initialPositionY={100}
    >
      {({ zoomIn, zoomOut, resetTransform, positionX, positionY, ...rest }) => (
        <React.Fragment>
          
          <button onClick = {() => zoomIn()}>+</button>
          <button onClick = {() => zoomOut()}>-</button>
          <button onClick = {() => resetTransform()}>x</button>
          
          <TransformComponent>
            <div className="App">
              <WorldMap
                color="skyblue"
                size="xxl"
                data={data}
                title="JJJ EYES"
                onClickFunction={() => alert("hi")}
                textLabelFunction={createTextLabels}
                text="hello"
                tooltipTextColor="yellow"
              />
            </div>
          </TransformComponent>
        </React.Fragment>
      )}
    </TransformWrapper>
  );
}

export default App;
