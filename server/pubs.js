Meteor.publish('showUser', ()=> {
	return Meteor.users.find({})
});

Meteor.publish('showCategories', ()=> {
	return Categories.find({})
});

Meteor.publish('showProducts', ()=> {
	return Products.find({})
});
Meteor.publish('showCart', ()=> {
	return Cart.find({});
})
