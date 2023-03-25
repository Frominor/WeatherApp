import React, { useRef } from "react";
import './Main.scss'
import { curry, debounce } from "lodash-es";
import { useDispatch, useSelector } from "react-redux";
import { GetYuorCoord } from "../../State/AsyncActions/GetYourCoords";
import { GetWeather } from "../../State/AsyncActions/GetWeather";
import WeatherItem from "../../ReUseComponents/WeatherItem/WeatherItem";
export default function Main(){
    const State=useSelector((state)=>state.WeatherReducer)
    const Slider=useRef(null)
    const dispatch=useDispatch()
  const SetCityName=(e)=>{ 
    const City=e.target.value
    dispatch(GetYuorCoord(City))
   
  }
  const makeRequest=React.useCallback(
    debounce((e)=>{
        return SetCityName(e)
    },300),
  [])
   async function FindWeatherInfo(){
         dispatch(GetWeather(State))
  }
    return(
        <div className="Weather_Main">
          <button onClick={()=>{
            console.log(Slider.current.childNodes)
             Slider.current.childNodes.forEach((item)=>{
              item.style='transform:translateX(-1900px)'
             })
          }}></button>
          <button onClick={()=>{
            Slider.current.childNodes.forEach((item)=>{
              item.style='transform:translateX(+1900px)'
            })
          }}>BTN</button>
         <div className="Weather_Main_Input Input">
            <div className="Blur">
            <input placeholder="Find Your Location" onChange={(e)=>makeRequest(e)} ></input>
            <button onClick={FindWeatherInfo}>Find</button>
            </div>
            
         </div>
         <div className="Weather_Main_ShowWeather" ref={Slider}>
            {State.Weather.map((item)=>{
                return <WeatherItem item={item}></WeatherItem>
            })}
         </div>
        </div>
    )
}