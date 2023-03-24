const InitialState={
  Weather:[],
  Coords:[],
  Color:true
}
const CHANGE_COLOR='CHANGE_COLOR'
const ADD_COORDS='ADD_COORDS'
const ADD_WEATHER='ADD_WEATHER'
export const WeatherReducer=(state=InitialState,action)=>{
     switch(action.type){
          case CHANGE_COLOR:
            return {...state,Color:action.payload};
            case 'ADD_COORDS':return {...state,Coords:action.payload};
            case 'ADD_WEATHER':return {...state,Weather:action.payload.filter((item)=>{
              console.log(item.dt_txt.split(' ')[0].split('-')[2])
              console.log(String(new Date()).split(':')[0].split(' ')[2])
              if(item.dt_txt.split(' ')[0].split('-')[2]==String(new Date()).split(':')[0].split(' ')[2]){
                return item

              }else{

              }
            })}
        default:return {...state}
     }
}