import React, { Component } from "react";
import { Cookie, Muffin } from "../../render-props/clickers";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  addClick = (value) => {
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count + value,
    }));
  };

  render() {
    return (
      <>
        <div id="result">Count {this.state.count}</div>
        <Cookie onClick={this.addClick} />
        <Muffin handleClick={this.addClick} />
      </>
    );
  }
}

export { Counter };
