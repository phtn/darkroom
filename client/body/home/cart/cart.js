Template.cart.events({
	'click #insertProduct'() {
		Meteor.call('insertProduct')
	},
	'click #remove-item'() {
		Meteor.call('removeFromCart', this._id)
	}

});

Template.cart.helpers({
	cartCount () {
		Meteor.subscribe('showCart');
		return Cart.find({owner: Meteor.userId()}).count()
	},
	cartItems () {
		if( Meteor.user()) {
			Meteor.subscribe('showCart');
			return Cart.find(); 
		}
	},
	subTotal () {
		return (getTotal()).toFixed(2)
	},
	tax () {
		var taxRate = 0.065;
		return (getTotal() * taxRate).toFixed(2)
	},
	total () {
		var taxRate = 0.065;
		var tax = getTotal() * taxRate;
		return (getTotal() + tax).toFixed(2)
	}
});

var getTotal = ()=> {
	let totalArr=[];
		let sum=0;
		Cart.find({owner:Meteor.userId()}).map(function(doc) {
		  let price = doc.price * doc.qty;
			totalArr.push(price)
		});
		for (i=0; i < totalArr.length; i++) {
				sum += totalArr[i];
		}
		return sum;
	
}
