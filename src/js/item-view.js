import _ from "lodash";
import { $, jQuery } from "jquery";
import Backbone from "backbone";

class formView extends Backbone.View {
  initialize() {
    this.tagName = "div";
    this.template = this.$("#itemTemplate");
    this.events = {
      "click .search-form__btn": "buttonClick"
    };
    this.listenTo(this.model, "change", this.render);
    console.log(this);
  }
  buttonClick() {
    console.log("something");
  }
  render() {
    const template = this.template(this.model.toJSON());
    this.$el.html(template);
    return this;
  }
}

export default ItemView;

// общая форма -> при клике -> загружаются элементы в коллекцию -> вью слушает, sync (успешно) -> отрисовывет элементы
