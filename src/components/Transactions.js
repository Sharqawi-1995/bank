import React, { Component } from "react";
import Transaction from "./Transaction";

export default class Transactions extends Component {
  getColor = () => {
    return this.props.getBalance() <= 500 ? "red" : "green";
  };
  render() {
    return (
      <div className="Transactions">
        <h4>
          Balance:
          <span style={{ color: this.getColor() }}>
            {this.props.getBalance()}
          </span>
        </h4>
        <div className="transactions">
          {this.props.data.map((t, index) => {
            return (
              <Transaction
                key={index}
                transaction={t}
                deleteTransaction={this.props.deleteTransaction}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
