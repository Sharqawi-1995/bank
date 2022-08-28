import React, { Component } from "react";

export default class Transaction extends Component {
  deleteTrans = () => {
    this.props.deleteTransaction(this.props.transaction._id);
  }

  render() {
    let transaction = this.props.transaction;

    return (
      <div className="Transaction">
        <p>Category:{transaction.category}</p>
        <p>
          Amount:
          <span style={{ color: transaction.amount >= 0 ? "green" : "red" }}>
            {transaction.amount}
          </span>
        </p>
        <p>vendor:{transaction.vendor}</p>
        <button onClick={this.deleteTrans}>Delete</button>
      </div>
    )
  }
}
