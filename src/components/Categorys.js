import React, { Component } from "react";
import Category from "./Category";
import axios from "axios";

export default class Categorys extends Component {
  constructor() {
    super();
    this.state = {
      categorys: [],
    };
  }

  async componentDidMount() {
    let categorys = await axios.get("http://localhost:3200/categorys");
    this.setState({ categorys: categorys.data });
  }

  render() {
    return (
      <div className="categorys">
        {this.state.categorys.map((c, index) => {
          return <Category key={index} category={c} />;
        })}
      </div>
    );
  }
}
