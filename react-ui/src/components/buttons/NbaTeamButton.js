import { Button } from "@mui/material";
import React from 'react';

export const NbaTeamButton = props => {
  return <Button variant="contained" target="_blank" size="large" sx={{
    m: 2,
    bgcolor: "#00003C"
  }} disableElevation onClick={props.fetchNbaData}>Fetch NBA Teams
  </Button>;
};