import React from "react";

import Typography from "@mui/material/Typography";
import { Box, List, ListItem, ListItemText } from "@mui/material";

const Quiz1 = () => {
  return (
    <Box>
      <Typography variant="body1">
        Go through the project and explain the followings:
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText
            primary="1. How the project is structured"
            secondary="Identify the core components for both backend and frontend."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="2. Life of a request"
            secondary="How does the application handle the HTTP request http://localhost:8080? And what about the API request http://localhost:8080/api/v1?"
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Quiz1;
