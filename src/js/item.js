import Backbone from "backbone";
import ItemView from "./item-view.js";

export default class Item extends Backbone.Model {
  initialize() {
    const itemName = this.get("name");
    console.log("name", itemName);
    // this.itemView = new ItemView({name: itemName});
  }
}
