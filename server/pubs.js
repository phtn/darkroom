Meteor.publish('showCategories', ()=>{
	return Categories.find({})
});

Meteor.publish('showProducts', ()=>{
	return Products.find({})
});
