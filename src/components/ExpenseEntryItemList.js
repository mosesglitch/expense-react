import React from "react";
import "./ExpenseEntryItemList.css";
class ExpenseEntryItemList extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind();
    this.handleMouseLeave = this.handleMouseLeave.bind();
    this.handleMouseOver = this.handleMouseOver.bind();
  }
  handleMouseEnter(e) {
    e.target.parentNode.classList.add("highlight");
  }
  handleMouseLeave(e) {
    e.target.parentNode.classList.remove("highlight");
  }
  handleMouseOver(e) {
    console.log("The mouse is at (" + e.clientX + ", " + e.clientY + ")");
  }
  render() {
    const lists = this.props.item.map((item) => (
      <tr
        key={item.id}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <td>{item.name}</td>
        <td>{item.amount}</td>
        <td>{new Date(item.spendDate).toDateString()}</td>
        <td>{item.category}</td>
      </tr>
    ));
    return (
      <table onMouseOver={this.handleMouseOver}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>{lists}</tbody>
      </table>
    );
  }
}
export default ExpenseEntryItemList;
