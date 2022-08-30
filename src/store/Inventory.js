import { observable, action, makeObservable } from "mobx";
import { Item } from "../store/item";

export class Inventory {
  constructor() {
    this.list = [];

    makeObservable(this, {
      list: observable,
      addItem: action,
      buyItem: action,
      changePrice: action,
    });
  }

  addItem = (name, price = 0, quantity = 1) => {
    this.list.map((item, index) => {
      if (item.name === name) item.quantity += quantity;
      else if (index === this.list.length - 1) {
        let newItem = new Item(name, price, quantity);
        this.list.push(newItem);
      }
    });
  };

  buyItem = (name) => {
    this.list.map((currentItem, index) => {
      if (currentItem.name === name) currentItem.quantity -= 1;
      if (currentItem.quantity === 0) this.list.splice(index, 1);
    });
  };

  changePrice = (name, price) => {
    this.list.map((currentItem) => {
      if (currentItem.name === name) currentItem.price = price;
    });
  };
}
