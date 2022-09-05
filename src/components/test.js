import React, { Component } from "react";
import "./test.css";

export default class Decision extends React.Component {
  state = {
    profit: 0,
    decision: "get working",
  };
  checkProfit = () => {
    console.log(this.state.decision);
    if (this.state.profit <= 10) {
      this.setState({
        decision: "keep up",
      });
    } else if (this.state.profit <= 20) {
      this.setState({
        decision: "Like that Lil Mongez",
      });
    } else {
      this.setState({
        decision: "Skyhigh",
      });
    }
  };
  add = () => {
    this.checkProfit();
    this.setState((state) => ({
      profit: this.state.profit + 5,
    }));
  };
  render() {
    const isLow = this.state.profit;
    console.log(isLow);
    if (isLow < 15) {
      return (
        <div className="wiggle">
          <p>we are currently at {this.state.profit}</p>
          <p>We are lagging behind, lets {this.state.decision}</p>
          <button onClick={() => this.add()}>Sell</button>
        </div>
      );
    } else {
      return (
        <div className="jiggle">
          <p>we are currently at {this.state.profit}</p>
          <p>We are okay, lets {this.state.decision}</p>
          <button onClick={() => this.add()}>Sell</button>
        </div>
      );
    }
  }
}
