Template.cart.events({
	'click #insertProduct'() {
		Meteor.call('insertProduct')
	},
	'click #remove-item'() {
		Meteor.call('removeFromCart', this._id)
	}

});

Template.cart.helpers({
	cartItems () {
		if( Meteor.user()) {
			Meteor.subscribe('showCart');
			return Cart.find(); 
		}
	},
	total () {
		let totalArr=[];
		let sum=0;
		Cart.find({owner:Meteor.userId()}).map(function(doc) {
		  let price = doc.price * doc.qty;
		  
			totalArr.push(price)
			//console.log(totalArr);
			
			
			
			
		});
		for (i=0; i < totalArr.length; i++) {
				sum += totalArr[i];
		}

		return sum;
		
	}
});

