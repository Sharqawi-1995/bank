import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Operations extends Component {
  constructor() {
    super();
    this.state = {
      amount: "",
      category: "",
      vendor: "",
    };
  }

  deposit = () => {
    let amount = this.state.amount;
    let vendor = this.state.vendor;
    let category = this.state.category;
    if (
      amount.trim().length !== 0 &&
      category.trim().length !== 0 &&
      vendor.trim().length !== 0
    ) {
      let transaction = { amount, category, vendor };
      this.props.addTransaction(transaction);
    } else {
      alert("please fill all fields");
    }
  };

  Withdraw = () => {
    let amount = this.state.amount;
    let vendor = this.state.vendor;
    let category = this.state.category;
    if (
      amount.trim().length !== 0 &&
      category.trim().length !== 0 &&
      vendor.trim().length !== 0
    ) {
      let transaction = { amount: -amount, category, vendor };
      this.props.addTransaction(transaction);
    } else {
      alert("please fill all fields");
    }
  };

  handleAmount = (e) => {
    this.setState({ amount: e.target.value });
  };

  handleCategory = (e) => {
    this.setState({ category: e.target.value });
  };

  handleVendor = (e) => {
    this.setState({ vendor: e.target.value });
  };

  render() {
    return (
      <div className="Operations">
        <div>
          <div className="OpsInput">
            Amount:
            <input
              id="amount-input"
              type="number"
              value={this.state.amount}
              onChange={this.handleAmount}
            />
            Category:
            <input
              id="category-input"
              type="text"
              value={this.state.category}
              onChange={this.handleCategory}
            />
            Vendor:
            <input
              id="vendor-input"
              type="text"
              value={this.state.vendor}
              onChange={this.handleVendor}
            />
          </div>

          <button className="depositButton" onClick={this.deposit}>
            <Link className="link" to="/">
              Deposit
            </Link>
          </button>

          <button className="withdrawButton" onClick={this.Withdraw}>
            <Link className="link" to="/">
              Withdraw
            </Link>
          </button>
        </div>
      </div>
    );
  }
}
