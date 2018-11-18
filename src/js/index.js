$(function() {	
	// пространство имён
	window.App = {
		Models: {},
		Collections: {},
		Views:{}	
	};

	// шаблон
	window.template = function(id) {
		return _.template( $('#' + id).html() );
    };
    
    // Модель товара
	App.Models.Item = Backbone.Model.extend({})

    // Отображение товара
	App.Views.Item = Backbone.View.extend({
		initialize: function () {  
		},
		tagName: 'div',
		template: template('itemTemplate'),
		render: function () {
			var template = this.template(this.model.toJSON());
			this.$el.html( template );
			return this;
		}
    });
    
    // Колекция товаров
	App.Collections.Item = Backbone.Collection.extend({
		model: App.Models.Item
    });
    
    // Отображение товаров
	App.Views.Items = Backbone.View.extend({
		tagName: 'ul',
		initialize: function() {
			this.collection.on('add', this.addOne, this );
		},
		render: function() {
			this.collection.each(this.addOne, this);
			return this;
		},
		addOne: function(item) {
            var itemView = new App.Views.Item({ model: item });
            this.$el.append(itemView.render().el);
		}
	});

	App.Views.AddItem = Backbone.View.extend({
		el: '#addItem',

		events: {
			'submit' : 'submit'
		},

		initialize: function() {
		},
		submit: function(e) {
			e.preventDefault();
            var newItemTitle =  $(e.currentTarget).find('.search-form__textarea').val();
            window.Backend.load(newItemTitle)
            console.log(newItemTitle);
            this.collection.add(newItem);
		}
	});

	window.itemsCollection = new App.Collections.Item();
	var itemsView = new App.Views.Items({ collection: itemsCollection});
	$('.items').html(itemsView.render().el);
	var addItemsView = new App.Views.AddItem({ collection: itemsCollection });
});


