export const GetWeather = (State) => {
  return async (dispatch) => {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${State.Coords.lat}&lon=${State.Coords.lon}&appid=9e2676b5d5179f93b75b68b95d3b7bf3`
    );
    let data = await res.json();
    let final = [];
    while (final.length <= 30) {
      final.push(data.list[final.length]);
    }
    data.list = final;
    dispatch({ type: "ADD_WEATHER", payload: data });
  };
};
