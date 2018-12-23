import { isEmpty } from "lodash";

class itemsCollection extends Backbone.Collection {
  constructor(options) {
    super(options);
  }

  parse(response) {
    return response.items;
  }

  fetchItems(inputValue) {
    const re = /[ ,]+/;
    const items = inputValue
      .split(re)
      .filter(item => !isNaN(item) && !isEmpty(item))
      .join(",");
    this.url = `https://www.sima-land.ru/api/v3/item/?sid=${items}`;
    this.fetch();
  }
}
export default itemsCollection;

