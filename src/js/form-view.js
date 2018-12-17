import { isEmpty } from "lodash";
import { $, jQuery } from "jquery";
import Backbone from "backbone";
import ItemsCollection from "./items-collection.js";
import ItemsView from "./items-view.js";

class FormView extends Backbone.View {
  constructor() {
    super({
      events: {
        "click .search-form__btn": "searchRequest"
      },
      el: ".wrapper"
    });
  }

  initialize() {
    this.collection = new ItemsCollection(); // создаем коллекцию
    this.itemsView = new ItemsView(); // создаем вью

    // слушатель - отрисовывает элемент при успешном ответе
    this.listenTo(this.collection, "sync", this.render);
  }

  render(collection) {
    // отправить коллеккцию во вью
    this.itemsView.render(collection);
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
      // @TODO перенести в коллекцию, добавить функ. фетч айтемс (Ппринимает айтемс), юрл парсер (строит ссылку).
      // @TODO Добавить шаблон (скрытие html/шаблон) результата поиска и найденных товаров.
      this.collection.url = `https://www.sima-land.ru/api/v3/item/?sid=${items}`;
      this.collection.fetch();
    }
  }
}

export default FormView;
