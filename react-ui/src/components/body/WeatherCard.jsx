import React from "react";
import {Card} from "@mui/material";

export function WeatherCard({
  weather
}) {
  return <Card>
            {weather !== 0 && <div class="weather-container" align="center" sx={{
      p: 1
    }}>
                <h1>{weather.location.name}</h1>
                <img src={weather.current.condition.icon} alt="weather icon" />
                <h3>{weather.current.condition.text}</h3>
                <h3>{weather.current.temp_f}°F but it feels like {weather.current.feelslike_f}°F</h3>
                <h3>{weather.current.uv} UV</h3>
                <h4>{weather.current.humidity} humidity</h4>
              </div>}
          </Card>;
}
  