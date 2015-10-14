Meteor.subscribe('showProducts');
Template.products.helpers({
	getCat: ()=>{
		return Session.get('selectedCategory');
	},
	getProducts: ()=>{
		if (Session.get('selectedCategory') == 'ALL') {
			return Products.find({});
		} else {
			return Products.find({cat:Session.get('selectedCategory')}).fetch();	
		}
		
	}
});

Template.products.events({
	'click #add-to-cart' () {
		if(Meteor.user()) {
			
			Meteor.call('addToCart', this._id, Meteor.userId(), this.name, this.price, this.cat)
			
		}else {
			sAlert.error('You must Sign-in first.', {
		    	effect: 'scale',
		    	position: 'bottom-right',
		    	timeout: 3000
		   	});
		}
	},
	'click #add-to-watchlist': function() {
		console.log(this.name)
	}

});
 
Template.products.rendered = ()=>{
	Session.set('selectedCategory', 'ALL')
}