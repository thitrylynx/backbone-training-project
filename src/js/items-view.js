import { template } from "lodash";
import { $, jQuery } from "jquery";
import Backbone from "backbone";

class ItemsView extends Backbone.View {
  constructor() {
   super({
      el: ".wrapper"
    });
  }
  initialize() {
    this.itemsBlock = this.$(".items");
    this.template = template(this.$("#item-template").html());
  }
  render(collection) {
    const items = collection.toJSON()
    this.itemsBlock.html(this.template({ items: items }));
  }    
}

export default ItemsView;

