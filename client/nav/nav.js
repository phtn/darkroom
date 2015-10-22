Meteor.subscribe('showCart');

Template.nav.events({
	'click #brand' () {
		Bert.alert({
		  type: 'danger',
		  style: 'fixed-bottom',
		  title: 'Callisto',
		  message: 'Theophiles thistles',
		  icon: 'fa-gamepad',
		  hide: 1000
		});
		FlowRouter.go('/')},
	'click #sign-in': ()=>{
		Meteor.loginWithGoogle({
			requestPermission: ['email','profile']
		}, function(err) {
			if (err) {
				// ERROR
			}
		});
	    	Bert.alert({
			  type: 'logging-in',
			  style: 'fixed-bottom',
			  message: 'Logging In',
			  icon: 'fa-cog fa-spin fa-2x',
			  timeout: 1000
			});
	    	
	    	FlowRouter.go('/');
	    
	    
	},
	'click #log-out': ()=>{
		Meteor.logout();
		Bert.alert({
		  type: 'logged-out',
		  style: 'fixed-bottom',
		  message: 'Logged Out',
		  icon: 'fa-remove',
		  hideDelay: 5000
		})
	}
});

Template.nav.helpers({
	user () {
		return Meteor.user().profile.name;
	},
	countCartItems () {
		return getTotalCount()
	}
});

var getTotalCount = ()=> {
	let itemCountArr=[];
		let sum=0;
		Cart.find({owner:Meteor.userId()}).map(function(doc) {
		  let items = doc.qty;
			itemCountArr.push(items)
		});
		for (i=0; i < itemCountArr.length; i++) {
				sum += itemCountArr[i];
		}
		return sum;
	}