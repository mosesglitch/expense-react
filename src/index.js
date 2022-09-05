import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ExpenseEntryItemList from "./components/ExpenseEntryItemList";
import MessageWithEvent from "./components/MessageWithEvents";

const message = ReactDOM.createRoot(document.getElementById("message"));
message.render(
  <div>
    <MessageWithEvent name="React" />
    <MessageWithEvent name="React developer" />
  </div>
);
const items = [
  {
    id: 1,
    name: "Pizza",
    amount: 80,
    spendDate: "2020-10-10",
    category: "Food",
  },
  {
    id: 2,
    name: "Grape Juice",
    amount: 30,
    spendDate: "2020-10-12",
    category: "Food",
  },
  {
    id: 3,
    name: "Cinema",
    amount: 210,
    spendDate: "2020-10-16",
    category: "Entertainment",
  },
  {
    id: 4,
    name: "Java Programming book",
    amount: 242,
    spendDate: "2020-10-15",
    category: "Academic",
  },
  {
    id: 5,
    name: "Mango Juice",
    amount: 35,
    spendDate: "2020-10-16",
    category: "Food",
  },
  {
    id: 6,
    name: "Dress",
    amount: 2000,
    spendDate: "2020-10-25",
    category: "Cloth",
  },
  {
    id: 7,
    name: "Tour",
    amount: 2555,
    spendDate: "2020-10-29",
    category: "Entertainment",
  },
  {
    id: 8,
    name: "Meals",
    amount: 300,
    spendDate: "2020-10-30",
    category: "Food",
  },
  {
    id: 9,
    name: "Mobile",
    amount: 3500,
    spendDate: "2020-11-02",
    category: "Gadgets",
  },
  {
    id: 10,
    name: "Exam Fees",
    amount: 1245,
    spendDate: "2020-11-04",
    category: "Academic",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ExpenseEntryItemList item={items} />);