import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city:"delhi",
    feelslike: 24.32,
    temp: 25.05,
    tempMin: 34.21,

    tempMax: 25.06,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (newInfo) =>{
    setWeatherInfo(newInfo);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App Created Prabhat</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
