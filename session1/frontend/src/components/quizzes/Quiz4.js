import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useDispatch, useSelector } from "../../redux/store";
import {
  queryQuiz4Creators,
  queryQuiz4CreatorsBaseline,
} from "../../redux/slices/marketplace";

const Quiz4 = () => {
  const dispatch = useDispatch();

  const { queryQuiz4CreatorsResponse, queryQuiz4CreatorsBaselineResponse } =
    useSelector((state) => state.marketplace);

  const [tag, setTag] = useState("baby");

  const handleChange = (event) => {
    setTag(event.target.value);
  };

  const handleQueryButtonPressed = () => {
    dispatch(queryQuiz4CreatorsBaseline(tag));
    dispatch(queryQuiz4Creators(tag));
  };

  const renderQueryResults = () => {
    const { results: resultsBaseline, cost: costBaseline } =
      queryQuiz4CreatorsBaselineResponse || {};
    const { results, cost } = queryQuiz4CreatorsResponse || {};

    if (!queryQuiz4CreatorsBaselineResponse || !queryQuiz4CreatorsResponse) {
      return null;
    }

    return (
      <Stack direction="column">
        <Box>
          <Typography variant="subtitle1">BASELINE</Typography>
          <Typography variant="body1">
            {`Cost: ${costBaseline}, Results: ${resultsBaseline.length}`}
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1">YOUR VERSION</Typography>
          <Typography variant="body1">
            {`Cost: ${cost}, Results: ${results.length}`}
          </Typography>
        </Box>
      </Stack>
    );
  };

  return (
    <Box>
      <Typography variant="body1" paragraph>
        In file <strong>`backend/api/routes/v1/quiz.route.js`</strong>, modify
        the API `queryQuiz4Creators` to make it more efficient.
      </Typography>
      <Typography variant="body2" paragraph>
        Hint: you can pre-process the data `quiz4Influencers` beforehand.
      </Typography>

      <Box sx={{ my: 2 }}>
        <Stack direction="row" spacing={2}>
          <TextField label="Tag" value={tag} onChange={handleChange} />
          <Button
            variant="contained"
            color="primary"
            onClick={handleQueryButtonPressed}
          >
            Query
          </Button>
        </Stack>
      </Box>

      {renderQueryResults()}
    </Box>
  );
};

export default Quiz4;
