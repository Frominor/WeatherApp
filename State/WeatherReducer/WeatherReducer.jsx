const InitialState={
  Weather:[],
  Coords:[],
  Color:false
}
const CHANGE_COLOR='CHANGE_COLOR'
const ADD_COORDS='ADD_COORDS'
const ADD_WEATHER='ADD_WEATHER'
export const WeatherReducer=(state=InitialState,action)=>{
     switch(action.type){
          case CHANGE_COLOR:
            return {...state,Color:action.payload};
            case 'ADD_COORDS':return {...state,Coords:action.payload};
            case 'ADD_WEATHER':return {...state,Weather:action.payload.list.filter((item)=>{
           
                item.name=action.payload.city.name
                state.Color=!state.Color
                item.Color=state.Color
                return item
              
            })}
        default:return {...state}
     }
}