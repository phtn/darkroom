Meteor.methods({
	removeAllData: ()=> {
		Products.remove({});
	},
	insertProduct: ()=> {
		Products.insert({name: 'Rambo', price: 300, cat: 'KNIVES'});
	},
	addToCart: function(id,owner,name,price,cat) {
		Cart.insert({
			productId: id,
			owner: owner,
			name: name,
			price: price,
			cat: cat
		})
	},
	removeProduct: (id)=> {
		Products.remove({_id: id})
	},
	removeFromCart: function(id) {
		Cart.remove({_id: id})
	}
});