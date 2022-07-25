import { Grid, Box } from "@mui/material";
import React from 'react';

export function TeamButtonGrid(props) {
    return (<Grid item xs={6}>
        <div xs={3}>
            {props.teams.length > 0 && <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)'
            }}>
                {props.teams.map(team => <button key={team.id} variant="contained" size="small" onClick={() => props.fetchWeatherData(team.city)} class="team-entry" id={team.id}>
                    {team.full_name}
                </button>)}
            </Box>}
        </div>
    </Grid>);
}