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

var person = new Person;
