import React, { Component } from "react";
import { observer } from "mobx-react";
import Item from "./item";
class Market extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };
  addItem = () => {
    this.props.store.addItem(this.state.input);
    this.setState({
      input: "",
    });
  };
  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          value={this.state.input}
          type="text"
        />
        <button onClick={this.addItem}>add item</button>
        {this.props.store.list.map((item, index) => (
          <Item item={item} key={index} store={this.props.store} />
        ))}
      </div>
    );
  }
}

export default observer(Market);
