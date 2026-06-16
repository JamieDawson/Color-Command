import React, { useState } from "react";
import { Stage, Layer, Rect } from "react-konva";
import Konva from "konva";

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect
          x={50}
          y={50}
          width={1000}
          height={500}
          fillLinearGradientStartPoint={{ x: 0, y: 0 }}
          fillLinearGradientEndPoint={{ x: 500, y: 0 }}
          fillLinearGradientColorStops={[0, "red", 1, "blue"]}
          fillPriority="linear-gradient"
        />
      </Layer>
    </Stage>
  );
};

export default App;
