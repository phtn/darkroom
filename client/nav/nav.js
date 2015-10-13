Template.nav.events({
	'click #brand': ()=>FlowRouter.go('/'),
	'click #sign-in': ()=>{
		Meteor.loginWithGoogle({
			requestPermission: ['email','profile']
		}, function(err) {
			if (err) {
				// ERROR
			}
		});
	    FlowRouter.go('/');
	    sAlert.success(
	    	'Logging In <i class="fa fa-cog fa-spin fa-2x"></i>', 
	    	{
		    	effect: 'scale',
		    	position: 'bottom-right',
		    	timeout: 3000,
		    	html: true
	    	}
	    );
	},
	'click #log-out': ()=>{
		Meteor.logout();
		sAlert.error('Logged Out', {
	    	effect: 'scale',
	    	position: 'bottom-right',
	    	timeout: 3000});
	}
});

Template.nav.helpers({
	user: ()=>{
		return Meteor.user().profile.name;
	}
})