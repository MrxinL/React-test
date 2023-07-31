import React from "react";

import Typography from "@mui/material/Typography";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import Quiz3CreatorsTable from "./Quiz3CreatorsTable";

const Quiz3 = () => {
  return (
    <Box>
      <Typography variant="body1">
        Now you have finished `Quiz2`. As you can see the creator data is loaded
        from <strong>`frontend/src/data/quiz2.json`</strong> rather than the
        server. In this quiz, you need to implement `Add` feature on the server
        side so when you refresh the page, the data won't get lost.
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText
            primary="1. Complete the `Add` feature"
            secondary={
              <>
                This is similar to the previous quiz. The files you need to
                modify are{" "}
                <strong>
                  `frontend/src/components/quizzes/Quiz3CreatorsTable.js`
                </strong>{" "}
                and <strong>`frontend/src/redux/slices/marketplace.js`</strong>.
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="2. Send a POST request to the server"
            secondary={
              <>
                In <strong>`frontend/src/redux/slices/marketplace.js`</strong>,
                send a POST request to the server with the new creator data.
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="3. On server side, handle the POST request sent from the previous step"
            secondary={
              <>
                In <strong>`backend/api/routes/v1/quiz/route.js`</strong>,
                complete the code to handle the POST request sent from the
                client. You need to store the new added creator on the server
                side so that you can access it when you refresh the page.
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="4. (Optional) Better experience with auto-refresh"
            secondary={
              <>
                As soon as you added a new creator, the table should be
                refreshed automatically (without refreshing the entire page).
              </>
            }
          />
        </ListItem>

        <Quiz3CreatorsTable />
      </List>
    </Box>
  );
};

export default Quiz3;
