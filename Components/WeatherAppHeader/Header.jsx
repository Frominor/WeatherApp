import React from "react";
import cloud from "./cloud.png";
import "./Header.scss";
export default function Header() {
  return (
    <div className="Header">
      <div className="Header_Left_Side">
        <div className="WeatherLogo">
          <img src={cloud}></img>
        </div>
        <div className="Title">
          <h1>Weather App</h1>
          <p>made by Frominor</p>
        </div>
      </div>
      <div className="Header_Right_Side"></div>
    </div>
  );
}
