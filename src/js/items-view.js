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
    this.itemTemplate = template(this.$("#item-template").html());
    this.searchResultTemplate = template(this.$("#search-result").html())
  }
  render(collection) {
    const items = collection.toJSON()

    this.itemsBlock.html(this.searchResultTemplate({ items: items }));

    // this.itemsBlock.html(this.itemTemplate({ items: items }));
  }
  showItems(collection) {

  }  
}

export default ItemsView;

