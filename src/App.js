import "./App.css";
import React, { Component } from "react";
import Transactions from "./components/Transactions";
import axios from "axios";
import Operations from "./components/Operations";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Categorys from "./components/Categorys";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
    };
  }

  async componentDidMount() {
    let transactions = await axios.get("http://localhost:3200/transactions");
    this.setState({ transactions: transactions.data });
  }

  addTransaction = async (transaction) => {
    await axios.post("http://localhost:3200/transaction", transaction);
    let transactions = await axios.get("http://localhost:3200/transactions");
    this.setState({ transactions: transactions.data });
  };

  deleteTransaction = async (transactionID) => {
    await axios.delete(`http://localhost:3200/transaction/${transactionID}`);
    let transactions = await axios.get("http://localhost:3200/transactions");
    this.setState({ transactions: transactions.data });
  };

  getBalance = () => {
    let totalAmount = 0;
    let transactions = this.state.transactions;
    transactions.forEach((element) => {
      totalAmount += element.amount;
    });
    return totalAmount;
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="mainLinks">
            <Link to="/">Home</Link>
            <Link to="/operations">Add Transaction</Link>
            <Link to="/categorys">Categorys</Link>
          </div>

          <Routes>
            <Route
              path="/"
              element={
                <Transactions
                  data={this.state.transactions}
                  deleteTransaction={this.deleteTransaction}
                  getBalance={this.getBalance}
                />
              }
            />
            <Route
              path="/operations"
              element={<Operations addTransaction={this.addTransaction} />}
            />
            <Route path="/categorys" element={<Categorys/>} />
          </Routes>
        </div>
      </Router>
    );
  }
}
