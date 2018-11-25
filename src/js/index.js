import FormView from "./form-view";
import Item from "./item";

class itemsCollection extends Backbone.Collection {
  constructor(options) {
    super(options)
    this.model = Item
  }
  url () {
    return "https://www.sima-land.ru/api/v3/item/?sid=123456";
  }
}
export default itemsCollection;

window.m = new itemsCollection();

window.m.fetch();
console.log(window.m);
