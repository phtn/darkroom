Meteor.subscribe('showUser', Meteor.userId());

Template.home.events({
	'click .product-detail': ()=>{
		//console.log(this._id)
	}
});