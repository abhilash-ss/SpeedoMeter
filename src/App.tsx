import React from "react";
import SpeedoMeter from "./components/SpeedoMeter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SpeedoMeter
        trailStrokeColor="#070709"
        strokeColor="#F09934"
        percentage={80}
        innerText="kmh"
      />
    </div>
  );
}

export default App;
