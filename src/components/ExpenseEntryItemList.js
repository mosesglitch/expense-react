import React from "react";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";

class ExpenseEntryItemList extends React.Component {
  constructor(props) {
    super(props);
  }
  fetchRemoteItems() {
    fetch("http://localhost:8000/api/expenses")
      // fetch api is used to fetch the item from the remote server.
      .then((res) => res.json())
      .then(
        (result) => {
          this.setItems(result);
          // setItems is used to format and store the items in the state.
        },

        (error) => {
          this.setState({
            isLoaded: false,
            error,
          });
        }
      );
  }
  componentDidMount() {
    this.fetchRemoteItems();
  }

  // life cycle api to load the items into the component during its mounting phase.
  deleteRemoteItem(id) {
    fetch("http://localhost:8000/api/expense/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => {
        this.fetchRemoteItems();
      });
  }
  render() {
    const StyledTableCell = withStyles((theme) => ({
      head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      body: {
        fontSize: 14,
      },
    }))(TableCell);
    const StyledTableRow = withStyles((theme) => ({
      root: {
        "&:nth-of-type(odd)": {
          backgroundColor: theme.palette.action.hover,
        },
      },
    }))(TableRow);
    const lists = this.props.items.map((item) => (
      <StyledTableRow key={item.id}>
        <StyledTableCell component="th" scope="row">
          {item.name}
        </StyledTableCell>
        <StyledTableCell align="right">{item.amount}</StyledTableCell>
        <StyledTableCell align="right">
          {new Date(item.spendDate).toDateString()}
        </StyledTableCell>
        <StyledTableCell align="right">{item.category}</StyledTableCell>
      </StyledTableRow>
    ));
    return (
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell align="right">Amount</StyledTableCell>
              <StyledTableCell align="right">Spend date</StyledTableCell>
              <StyledTableCell align="right">Category</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{lists}</TableBody>
        </Table>
      </TableContainer>
    );
  }
}
export default ExpenseEntryItemList;
