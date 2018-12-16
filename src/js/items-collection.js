import Item from "./item";

class itemsCollection extends Backbone.Collection {
  constructor(options) {
    super(options);
  }

  parse(response) {
    return response.items;
  }
}
export default itemsCollection;

