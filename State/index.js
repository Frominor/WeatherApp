import { applyMiddleware, combineReducers, createStore } from "redux";
import { WeatherReducer } from "./WeatherReducer/WeatherReducer";
import thunk from "redux-thunk";
const rootReducer=combineReducers({
    WeatherReducer
}   
)
export const store=createStore(rootReducer,applyMiddleware(thunk))