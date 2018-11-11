var Person = Backbone.Model.extend({
  defaults: {
    name: 'User',
    age: 'Ifinite',
    job: 'Web dev' 
  },
  walk: function() {
		return this.get('name') + ' is walking.';
	}
});

var PeopleCollection = Backbone.Collection.extend({
	model: Person
});

var PersonView = Backbone.View.extend({
	initialize: function() {
		console.log('initialize!')
  },
  tagName: 'li',

	template: _.template( $('#person-id').html() ),
  
	initialize: function() {
		this.render();
	},
   
  render: function() {
    this.$el.html( this.template(this.model.toJSON()) );
  }
});

var person = new Person;
var personView = new PersonView({ model: person });

var people = [
	{
		name: 'Петр',
		age: 20,
		job: 'Таксист'
	},
	{
		name: 'Олег',
		job: 'Менеджер'
	},
	{
		name: 'Анна',
		age: 18,
		job: 'Студентка'
	}
]
var peopleCollection = new PeopleCollection(people)

