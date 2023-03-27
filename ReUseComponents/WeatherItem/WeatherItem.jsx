import React from "react";
import "./WeatherItem.scss";
import rain from "./rain.png";
import cloud from "./cloud.png";
import sun from "./sun.png";
import umbrella from "./umbrella.png";
import wind from "./wind.png";
import "./WeatherItem.scss";
export default function WeatherItem({ item }) {
  console.log(item.clouds.all);
  let Img;
  switch (item?.weather[0]?.main) {
    case "Clouds":
      Img = cloud;
      break;
    case "Rain":
      Img = rain;
      break;
    case "Sun":
      Img = sun;
      break;
    default:
      Img = null;
      break;
  }
  return (
    <div className="Weather_Item ">
      <div
        className={
          item.Color
            ? "Weather_Item_Header Header_Black"
            : "Weather_Item_Header Header_White"
        }
      >
        <h3>{item.dt_txt.split(" ")[1]}</h3>
      </div>
      <div
        className={
          item.Color
            ? "Weather_Item_Main Main_Black"
            : "Weather_Item_Main Main_White"
        }
      >
        <div className="Weather_Item_Main_title">
          <img src={Img}></img>
          <h3 className="Temp">{Math.floor(item.main.feels_like - 273)}°C</h3>
        </div>
        <div className="Weather_Item_Main_AboutWeather">
          <div className="rainpercent">
            <img src={umbrella}></img>
            <h4>{item.pop * 100}%</h4>
          </div>
          <div className="wind">
            <img src={wind}></img>
            <h4>{item.wind.speed}m/s</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
