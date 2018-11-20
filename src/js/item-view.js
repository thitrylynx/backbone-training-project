import _ from 'lodash';
import {$,jQuery} from 'jquery';
import Backbone from "backbone";

class ItemView extends Backbone.View {
  initialize() {
    console.log(this);
  }
  constructor() {
    
		super();
		this.tagName = 'div';
		this.template = this.$("#itemTemplate")
		this.events = {
			'click button': 'buttonClick'
		};
		this.listenTo(this.model, 'change', this.render);
  }
  render() {
    const template = this.template(this.model.toJSON());
    this.$el.html( template );
    return this;
  }
}

export default ItemView;


