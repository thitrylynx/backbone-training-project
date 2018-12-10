import Item from "./item";

class itemsCollection extends Backbone.Collection {
  constructor(options) {
    super(options);
    // this.model = Item;
  }

  parse(response) {
    return response.items;
  }
}
export default itemsCollection;
