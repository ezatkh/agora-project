import "./App.css";
import React, { Component } from "react";
import Market from "./components/market";
import { observer } from "mobx-react";

class App extends Component {
  render() {
    return (
      <div>
        <Market store={this.props.store} />
      </div>
    );
  }
}
export default App;
