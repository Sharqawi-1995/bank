import React, { Component } from "react";

export default class Category extends Component {
  render() {
    let category = this.props.category;
    return (
      <div className="category">
        Category:
        <span className="id">{category._id}</span>
        Totale Amounts:
        <span
          className="sum"
          style={{ color: category.sum >= 0 ? "green" : "red" }}
        >
          {category.sum}
        </span>
      </div>
    );
  }
}
