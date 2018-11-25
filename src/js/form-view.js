import _ from "lodash";
import { $, jQuery } from "jquery";
import Backbone from "backbone";

class FormView extends Backbone.View {
  initialize () {
    console.log("initializing view");
    collection.on('add', this.render, this);
    this.events = {
			'click .search-form__btn': 'buttonClick'
		};
    this.render();
  }
  render() {
    onsole.log('collection', collection)
  }
  buttonClick(e) {
    console.log("something");
  }
}

export default FormView;

// общая форма -> при клике -> загружаются элементы в коллекцию -> вью слушает, sync (успешно) -> отрисовывет элементы
