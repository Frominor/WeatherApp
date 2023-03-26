import React, { useRef } from "react";
import "./Main.scss";
import { debounce } from "lodash-es";
import { useDispatch, useSelector } from "react-redux";
import { GetYuorCoord } from "../../State/AsyncActions/GetYourCoords";
import { GetWeather } from "../../State/AsyncActions/GetWeather";
import WeatherItem from "../../ReUseComponents/WeatherItem/WeatherItem";
export default function Main() {
  const State = useSelector((state) => state.WeatherReducer);
  const Slider = useRef(null);
  const ref = useRef("");
  const dispatch = useDispatch();
  const SetCityName = () => {
    const City = ref.current.value;
    dispatch(GetYuorCoord(City));
  };
  const makeRequest = React.useCallback(
    debounce(() => {
      return SetCityName();
    }, 500),
    []
  );
  async function FindWeatherInfo() {
    ref.current.value = "";
    dispatch(GetWeather(State));
  }

  return (
    <div className="Weather_Main">
      <div className="Weather_Main_Input Input">
        <div className="Blur">
          <input
            placeholder="Find Your Location"
            onChange={() => makeRequest()}
            ref={ref}
          ></input>
          <button onClick={FindWeatherInfo}>Find</button>
        </div>
      </div>
      <div className="Weather_Main_ShowWeather" ref={Slider}>
        {State.Weather.map((item) => {
          return <WeatherItem item={item}></WeatherItem>;
        })}
      </div>
      {State.Weather.length > 0 ? (
        <div className="BtnFindWeather">
          <button
            onClick={() => {
              Slider.current.childNodes.forEach((item) => {
                item.style = `transform:translateX(-385px)`;
              });
            }}
          >
            Узнать погоду на сегодня
          </button>
          <button
            onClick={() => {
              Slider.current.childNodes.forEach((item) => {
                item.style = `transform:translateX(-2300px)`;
              });
            }}
          >
            Узнать погоду на завтра
          </button>
          <button
            onClick={() => {
              Slider.current.childNodes.forEach((item) => {
                item.style = `transform:translateX(-4190px)`;
              });
            }}
          >
            Узнать погоду на послезавтра
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
