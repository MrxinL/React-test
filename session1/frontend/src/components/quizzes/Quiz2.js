import React from "react";

import Typography from "@mui/material/Typography";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import Quiz2CreatorsTable from "./Quiz2CreatorsTable";

const Quiz2 = () => {
  return (
    <Box>
      <Typography variant="body1">Implement following features:</Typography>
      <List dense>
        <ListItem>
          <ListItemText
            primary="1. Show `Email` column in the table"
            secondary={
              <>
                The data is loaded from{" "}
                <strong>`frontend/src/data/quiz2.json`</strong> and there is an
                `email` field in each object. You should show this field in the
                following table by modifying the code in{" "}
                <strong>
                  `frontend/src/components/quizzes/Quiz2CreatorsTable.js`
                </strong>
                .
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="2. Complete the `Add` feature"
            secondary={
              <>
                You should complete the `Add` feature by adding a new row to the
                table. You should modify files{" "}
                <strong>
                  `frontend/src/components/quizzes/Quiz2CreatorsTable.js`
                </strong>{" "}
                and <strong>`frontend/src/redux/slices/marketplace.js`</strong>.
              </>
            }
          />
        </ListItem>
        <Quiz2CreatorsTable />
      </List>
    </Box>
  );
};

export default Quiz2;
