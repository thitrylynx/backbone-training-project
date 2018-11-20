import _ from 'lodash';
import * as jQuery from 'jquery';
import Backbone from "backbone";
import ItemView from "./item-view";

var m = new Backbone.Collection();
m.url = () => {
  return "https://www.sima-land.ru/api/v3/item/?sid=123456";
};
m.listenTo(m, "sync", console.log);
m.fetch();
console.log(m);
var a = new ItemView();

// `$(function() {
// 	// пространство имён
// 	window.App = {
// 		Models: {},
// 		Collections: {},
// 		Views:{}
// 	};

// 	// шаблон
// 	window.template = function(id) {
// 		return _.template( $('#' + id).html() );
//     };

//     // Модель товара
// 	App.Models.Item = Backbone.Model.extend({})



//     // Колекция товаров
// 	App.Collections.Item = Backbone.Collection.extend({
// 		model: App.Models.Item
//     });

//     // Отображение товаров
// 	App.Views.Items = Backbone.View.extend({
// 		tagName: 'ul',
// 		initialize: function() {
// 			this.collection.on('add', this.addOne, this );
// 		},
// 		render: function() {
// 			this.collection.each(this.addOne, this);
// 			return this;
// 		},
// 		addOne: function(item) {
//             var itemView = new App.Views.Item({ model: item });
//             this.$el.append(itemView.render().el);
// 		}
// 	});

// 	App.Views.AddItem = Backbone.View.extend({
// 		el: '#addItem',

// 		events: {
// 			'submit' : 'submit'
// 		},

// 		initialize: function() {
// 		},
// 		submit: function(e) {
// 			e.preventDefault();
//             var newItemTitle =  $(e.currentTarget).find('.search-form__textarea').val();
//             window.Backend.load(newItemTitle)
//             console.log(newItemTitle);
//             this.collection.add(newItem);
// 		}
// 	});

// 	window.itemsCollection = new App.Collections.Item();
// 	var itemsView = new App.Views.Items({ collection: itemsCollection});
// 	$('.items').html(itemsView.render().el);
// 	var addItemsView = new App.Views.AddItem({ collection: itemsCollection });
// });
