import React from "react";
import './WeatherItem.scss'
import rain from './rain.png'
import cloud from './cloud.png'
import sun from './sun.png'
import './WeatherItem.scss'
export default function WeatherItem({city,Weather,item}){
    console.log(item)
    return(
        <div className="Weather_Item">
         <div className="Weather_Item_Header">

         </div>
         <div className="Weather_Item_Main">
            <div className="Weather_Item_Main_title">
            <h4>{'asas'}</h4>
            </div>
            <div className="Weather_Item_Main_AboutWeather">
               <h3 className="Temp">{Math.floor(item.main.feels_like-273)}°C</h3>
               <h3>{item.dt_txt.split(' ')[1]}</h3>
               <img src={sun}></img>
            </div>
         </div>
        </div>
    )
}