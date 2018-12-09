import Backbone from "backbone";
import { template } from "lodash";
import ItemsCollection from "./items-collection.js";

class ItemView extends Backbone.View {
  constructor(props) {
    super(props);
  }
  initialize() {
    this.render()
  }
  render(){
    console.log('name thi', this)
    const tempalteEl = template(document.getElementById('item').innerHTML)
    const result = tempalteEl(this.item.itemName);
    document.write( result );
  }
}

export default ItemView;