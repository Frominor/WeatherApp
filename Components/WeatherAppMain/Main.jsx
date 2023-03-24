import React from "react";
import './Main.scss'
import { debounce } from "lodash-es";
import { useDispatch, useSelector } from "react-redux";
import { GetYuorCoord } from "../../State/AsyncActions/GetYourCoords";
import { GetWeather } from "../../State/AsyncActions/GetWeather";
import WeatherItem from "../../ReUseComponents/WeatherItem/WeatherItem";
export default function Main(){
   
    const State=useSelector((state)=>state.WeatherReducer)
    const dispatch=useDispatch()
  const SetCityName=(e)=>{
  let City=e.target.value
    dispatch(GetYuorCoord(City))
   
  }
  
  const makeRequest=React.useCallback(
    debounce((e)=>{
        return SetCityName(e)
    },300),
  [])
   async function FindWeatherInfo(){
    console.log(String(new Date()).split(':'))
         dispatch(GetWeather(State))
  }
  
    return(
        <div className="Weather_Main">
         <div className="Weather_Main_Input Input">
            <div className="Blur">
            <input placeholder="Find Your Location" onChange={(e)=>makeRequest(e)}></input>
            <button onClick={FindWeatherInfo}>Find</button>
            </div>
            
         </div>
         <div className="Weather_Main_ShowWeather">
            
            <h1 className="WeatherFor">Погода на {String(new Date()).split(' ')[0]+' ' +' '+String(new Date()).split(' ')[1]+' '+' '+String(new Date()).split(' ')[2] +' ' +`В городе ${''}`}</h1>
            {console.log(State.Weather)}
            {State?.Weather?.map((item)=>{
                return <WeatherItem item={item}></WeatherItem>
            })}
         </div>
        </div>
    )
}