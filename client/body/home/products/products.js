Template.products.helpers({
	getCat: ()=>{
		return Session.get('selectedCategory');
	}
})