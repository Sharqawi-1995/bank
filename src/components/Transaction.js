import React, { Component } from "react";

export default class Transaction extends Component {
  deleteTrans = () => {
    this.props.deleteTransaction(this.props.transaction._id);
  };

  render() {
    let transaction = this.props.transaction;

    return (
      <div className="Transaction">
        Category:
        <p>{transaction.category}</p>
        Amount:
        <p>
          <span style={{ color: transaction.amount >= 0 ? "green" : "red" }}>
            {transaction.amount}
          </span>
        </p>
        Vendor:
        <p>{transaction.vendor}</p>
        <button onClick={this.deleteTrans}>Delete</button>
      </div>
    );
  }
}
