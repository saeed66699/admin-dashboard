import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TablePagination,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setRows } from "../tableSlice";

export const Muitable = () => {
  const [page, pagechange] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users?limit=4");
      const data = response.data.users;
      console.log(data);
      // Dispatch the action to update the Redux state
      dispatch(setRows(data));
    } catch (e) {
      console.log(e.message);
    }
  };
  const handleChangePage = (event, newPage) => {
    pagechange(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    pagechange(0);
  };
  const generateTableHeaders = () => {
    if (rows.length === 0) {
      return null;
    }
    const headers = [
      "Id",
      "FirstName",
      "LastName",
      "Age",
      "Email",
      "Phone",
      "University",
      "Address"
    ];
    return (
      <TableRow sx={{ backgroundColor: 'secondary' }}>
      {headers.map((header, index) => (
        <TableCell
          key={index}
          sx={{
            backgroundColor: "white",
            color: "#212121",
            fontWeight: "bold", // Set font weight to bold for header
          }}
        >
          {header}
        </TableCell>
      ))}
    </TableRow>    );
  };
  useEffect(() => {
    fetchData();
  }, []);
  const rows = useSelector((state) => state.table.rows);
  return (<>
      <Typography variant="h3">Users</Typography>
    <Paper sx={{ p: 1, m: 4 }}>
      <TableContainer component={Paper} sx={{boxShadow: "0px 0px 12px 4px rgba(0,0,0,0.1)"}}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead >{generateTableHeaders()}</TableHead>
          <TableBody>
            {rows &&
              rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((index) => {
                  return (
                    <TableRow key={index.id} justify="content-between">
                      <TableCell>{index.id}</TableCell>
                      <TableCell>{index.firstName}</TableCell>
                      <TableCell>{index.lastName}</TableCell>
                      <TableCell>{index.age}</TableCell>
                      <TableCell>{index.email}</TableCell>
                      <TableCell>{index.phone}</TableCell>
                      <TableCell>{index.university}</TableCell>
                      <TableCell>{index.company.address.address+"  "+''+index.company.address.city}</TableCell>
                     
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
        page={page}
        count={rows.length}
        component="div"
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPage={rowsPerPage}
        />
    </Paper>
        </>
  );
};
