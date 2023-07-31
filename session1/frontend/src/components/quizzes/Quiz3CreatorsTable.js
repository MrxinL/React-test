import * as React from "react";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "../../redux/store";
import { Button, Stack, TextField } from "@mui/material";
import {
  addNewQuiz3Creators,
  getQuiz3Creators,
} from "../../redux/slices/marketplace";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Quiz3CreatorsTable = () => {
  const dispatch = useDispatch();

  const { quiz3Creators } = useSelector((state) => state.marketplace);

  const [newCreator, setNewCreator] = useState({});

  useEffect(() => {
    dispatch(getQuiz3Creators());
  }, [dispatch]);

  const handleChange = ({ field, value }) => {
    const creator = { ...newCreator, [field]: value };
    setNewCreator(creator);
  };

  const handleAddButtonPressed = async () => {
    /* Quiz #3 - 1. Complete the `Add` feature */
    /* Your code goes here */
    await dispatch(addNewQuiz3Creators(newCreator))
    dispatch(getQuiz3Creators())
  };

  const renderAddNewCreator = () => {
    const { id = "", name = "", phone = "", email = "" } = newCreator || {};
    return (
      <Stack direction="row" spacing={1}>
        <TextField
          label="ID"
          value={id}
          onChange={(event) =>
            handleChange({
              field: "id",
              value: event.target.value,
            })
          }
        />
        <TextField
          label="Name"
          value={name}
          onChange={(event) =>
            handleChange({
              field: "name",
              value: event.target.value,
            })
          }
        />
        <TextField
          label="Phone"
          value={phone}
          onChange={(event) =>
            handleChange({
              field: "phone",
              value: event.target.value,
            })
          }
        />
        <TextField
          label="Email"
          value={email}
          onChange={(event) =>
            handleChange({
              field: "email",
              value: event.target.value,
            })
          }
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddButtonPressed}
        >
          Add
        </Button>
      </Stack>
    );
  };

  /* Quiz #2 - 1. Show `Email` column in the table */
  /* Modify the code below */
  return (
    <Stack direction="column" spacing={2}>
      <TableContainer component={Paper} sx={{ my: 2 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {quiz3Creators.map((row) => {
              const { id, name, phone } = row || {};
              return (
                <StyledTableRow key={row.name}>
                  <StyledTableCell>{id}</StyledTableCell>
                  <StyledTableCell>{name}</StyledTableCell>
                  <StyledTableCell>{phone}</StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {renderAddNewCreator()}
    </Stack>
  );
};

export default Quiz3CreatorsTable;
