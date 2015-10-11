Meteor.startup(()=>{
	if( Categories.find().count() === 0) {
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
});