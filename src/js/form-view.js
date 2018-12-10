import { isEmpty, template } from "lodash";
import { $, jQuery } from "jquery";
import Backbone from "backbone";
import ItemsCollection from "./items-collection.js";

class FormView extends Backbone.View {
  constructor() {
    super({
      events: {
        "click .search-form__btn": "searchRequest"
      },
      el: "#addItem"
    });
  }

  initialize() {
    this.collection = new ItemsCollection();
    this.resultBlock = this.$(".result");
    this.template = template(this.$("#item-template").html());

    this.listenTo(this.collection, "sync", this.render);
  }

  render(collection) {
    this.resultBlock.html(this.template({ name: "test" }));
    console.log(collection.toJSON());
  }

  searchRequest(e) {
    const inputValue = this.$(".search-form__textarea").val();
    const re = /[ ,]+/;
    const items = inputValue
      .split(re)
      .filter(item => !isNaN(item) && !isEmpty(item))
      .join(",");

    console.log("items", items);
    if (items) {
      this.collection.url = `https://www.sima-land.ru/api/v3/item/?sid=${items}`;
      this.collection.fetch();
    }
  }
}

export default FormView;

// вью items, доработать шаблон,  пренести отрисовку,
