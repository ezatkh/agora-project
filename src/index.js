import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Item } from "../src/store/item";
import { Inventory } from "../src/store/Inventory";

let hat = new Item("hat", 12, 5);
let watch = new Item("watch", 90, 6);
let inventory = new Inventory();
inventory.list.push(hat);
inventory.list.push(watch);
ReactDOM.render(<App store={inventory} />, document.getElementById("root"));

reportWebVitals();
