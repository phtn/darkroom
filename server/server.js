Meteor.startup(()=>{
	if( Categories.find().count() === 0 ) {
		Categories.insert({
			categoriesArray: [
				{name: 'knives',
				 title: 'KNIVES'},
				{name: 'tools',
				 title: 'TOOLS'},
				{name: 'computers',
				 title: 'COMPUTERS'},
				{name: 'guitars',
				 title: 'GUITARS'}
			]
		})
	}

	if( Products.find().count() === 0 ) {
		Products.insert({name: 'Damascus', price: 1299, cat: 'KNIVES'});
		Products.insert({name: 'Jungle Bolo', price: 1699, cat: 'KNIVES'});
		Products.insert({name: 'Screwer', price: 485, cat: 'TOOLS'});
		Products.insert({name: 'Nail Gun', price: 26, cat: 'TOOLS'});
		Products.insert({name: 'Pliers', price: 50, cat: 'TOOLS'});
	}

	if( Cart.find().count() === 0) {
		Cart.insert({
			qty: 1,
			name: 'Shuriken',
			price: 5
		});
	}
});