import React, { Component } from "react";
import { observer } from "mobx-react";
class Item extends Component {
  constructor() {
    super();
    this.state = {
      countClick: 0,
    };
  }
  buyItem = () => {
    this.props.store.buyItem(this.props.item.name);
  };

  changePrice = () => {
    this.setState(
      {
        countClick: !this.state.countClick,
      },
      function () {
        if (!this.state.countClick) {
          let newPrice = prompt("please put the new price");
          this.props.store.changePrice(this.props.item.name, newPrice);
        }
      }
    );
  };

  render() {
    let item = this.props.item;
    return (
      <div className="item">
        <li onClick={this.changePrice}>{item.name}</li>
        <li>{item.quantity}</li>
        <li>{item.price}</li>
        <button onClick={this.buyItem}>buy button</button>
      </div>
    );
  }
}

export default observer(Item);
