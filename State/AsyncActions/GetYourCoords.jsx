export const GetYuorCoord = (City) => {
  return async (dispatch) => {
    const res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${City}&limit=5&appid=9e2676b5d5179f93b75b68b95d3b7bf3`
    );
    const data = await res.json();
    console.log(data);
    dispatch({ type: "ADD_COORDS", payload: data[0] });
  };
};
