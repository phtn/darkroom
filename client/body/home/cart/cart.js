Template.cart.events({
	'click #insertProduct': ()=>{
		Meteor.call('insertProduct')
	},
	'click #remove-item': function() {
		Meteor.call('removeFromCart', this._id)
	}

});

Template.cart.helpers({
	cartItems: ()=> {
		if( Meteor.user()) {
			Meteor.subscribe('showCart');
			return Cart.find(); 
		}
	}
});