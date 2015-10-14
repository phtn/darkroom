Meteor.methods({
	removeAllData () {
		Products.remove({});
	},
	insertProduct () {
		Products.insert({name: 'Rambo', price: 300, cat: 'KNIVES'});
	},
	addToCart (id,owner,name,price,cat, total) {
		if( Cart.find({productId: id}).count() === 0){
			Cart.insert({
				productId: id,
				qty: 1,
				owner: owner,
				name: name,
				price: price,
				cat: cat,
				total: total
			})
		}else {
			Cart.update({ productId: id}, {$inc: {qty: 1}})
		}
	},
	removeProduct (id) {
		Products.remove({_id: id})
	},
	removeFromCart (id) {
		Cart.remove({_id: id})
	}
});

