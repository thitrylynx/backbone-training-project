// import _ from "lodash";
import { $, jQuery } from "jquery";
import Backbone from "backbone";
import itemsCollection from "./index.js";

class FormView extends Backbone.View {
  constructor() {
    super();
    this.events = {
      "click .search-form__btn": "buttonClick"
    };
    this.delegateEvents(this.events);
    this.setElement("#addItem");
  }

  initialize() {
    console.log("initializing view");
    // collection.on("add", this.render, this);
    this.collection = new itemsCollection();

    this.listenTo(this.collection, "sync", this.render);
    this.render();
    console.log(this);
  }
  render(collection) {
    console.log(this.collection);
  }
  buttonClick(e) {
    this.collection.fetch();
    console.log("123", this.collection.url());
  }
}

export default FormView;

// общая форма -> при клике -> загружаются элементы в коллекцию -> вью слушает, sync (успешно) -> отрисовывет элементы

// вынести из индекс в отдельную коллекцию, в индексе импортировать все файлы
//
