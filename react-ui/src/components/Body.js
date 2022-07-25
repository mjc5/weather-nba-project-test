import { WeatherCard } from './body/WeatherCard';
import { Grid } from "@mui/material";
import React, { useState } from 'react'
import { InstructionButton } from "./buttons/InstructionButton";
import { EmailButton } from "./buttons/EmailButton";
import { TeamButtonGrid } from "./body/TeamButtonGrid";
import { NbaTeamButton } from "./buttons/NbaTeamButton";

export const Body = () => {
  const [teams, setTeams] = useState([])
  const [weather, setWeather] = useState(0)

  const fetchNbaData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/nba")
      if (!response.ok) {
        throw new Error("nba error")
      }
      const data = await response.json()
      setTeams(data.data)
    } catch (error) {
      console.log(error.message)
    }
  }


  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch("http://localhost:5000/api/weather?city=" + city)
      if (!response.ok) {
        throw new Error("weather error")
      }
      const data = await response.json()
      setWeather(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div class="team-container">
      <InstructionButton />
      <EmailButton />
      <NbaTeamButton fetchNbaData={fetchNbaData} />

      <Grid container spacing={3}>
        <TeamButtonGrid teams={teams} fetchWeatherData={fetchWeatherData}></TeamButtonGrid>

        <Grid item xs={6} justifyContent="center" direction="column" alignItems="center">
          <WeatherCard weather={weather} />
        </Grid>
      </Grid>
    </div>
  )
}