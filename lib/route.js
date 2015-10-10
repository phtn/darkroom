function renderThisTemplate(template) {
	BlazeLayout.render('layout', {nav: "nav", body: template})
}

function renderProduct(product) {
	BlazeLayout.render('home', {menu: 'menu', product: product, cart: 'cart'})
}



FlowRouter.route('/', {
	name: "Home",
	action(params) {
		renderThisTemplate('home')
	}
});

FlowRouter.route('/', {
	name: "Knives",
	action(params) {
		renderProduct('knives')
	}
});

