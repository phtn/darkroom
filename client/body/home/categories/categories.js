Template.categories.helpers({
	category: ()=>{
		Meteor.subscribe('showCategories');
		return Categories.find()
	}
});

Template.categories.events({
	'click .panel-list': (e)=>{
		console.log(e.target.id);
		Session.set('selectedCategory', e.target.id.toUpperCase());
	}
})