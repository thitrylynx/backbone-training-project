import FormView from "./form-view";
import Item from "./item";

class itemsCollection extends Backbone.Collection {
  constructor(options) {
    super(options);
    this.model = Item;
  }
  url(param) {
    return "https://www.sima-land.ru/api/v3/item/?sid=123456,1005002";
  }
  parse(response) {
    return response.items;
  }
}
export default itemsCollection;

console.log(123);

new FormView();
