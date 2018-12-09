import { isEmpty } from "lodash";
import { $, jQuery } from "jquery";
import Backbone from "backbone";
import ItemsCollection from "./items-collection.js";

class FormView extends Backbone.View {
  constructor() {
    super();
    this.events = {
      "click .search-form__btn": "searchRequest"
    };
    this.delegateEvents(this.events);
    this.setElement("#addItem");
  }

  initialize() {
    this.collection = new ItemsCollection();
    this.listenTo(this.collection, "sync", this.render);
    this.render();
  }

  searchRequest(e) {
    const inputValue = this.$('.search-form__textarea').val()
    const re = /[ ,]+/
    const items = inputValue.split(re)
      .filter(item => !isNaN(item) && !isEmpty(item))
      .join(',')
    
    console.log('items', items)
    if (items) {
      this.collection.url = `https://www.sima-land.ru/api/v3/item/?sid=${items}`
      this.collection.fetch();
    }
  }
}

export default FormView;


