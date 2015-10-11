Meteor.subscribe('showProducts');
Template.products.helpers({
	getCat: ()=>{
		return Session.get('selectedCategory');
	},
	getProducts: ()=>{
		if (Session.get('selectedCategory') == 'ALL') {
			return Products.find({});
		} else {
			return Products.find({cat:Session.get('selectedCategory')});	
		}
		
	}
});

Template.products.rendered = ()=>{
	Session.set('selectedCategory', 'ALL')
}