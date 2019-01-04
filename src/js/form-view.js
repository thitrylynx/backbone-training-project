import { $, jQuery } from "jquery";
import Backbone from "backbone";
import ItemsCollection from "./items-collection.js";
import ItemsView from "./items-view.js";
import SearchResultView from "./search-result-view.js";

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
    this.itemsView = new ItemsView(); // создаем вью (карточка товара)
    this.searchResultView = new SearchResultView(); // создаем вью (результат поиска)

    // слушатель - отрисовывает элемент при успешном ответе
    this.listenTo(this.collection, "sync", this.render);
  }

  render(collection) {
    // отправить коллеккцию во вью
    this.searchResultView.render(collection);
    // this.itemsView.render(collection);
  }

  searchRequest(e) {
    const inputValue = this.$(".search-form__textarea").val();
    if(inputValue) {
      this.collection.fetchItems(inputValue)
      this.$(".search-form--js").addClass( "hidden")
    }
  }
}

export default FormView;
