Meteor.methods({
	removeAllData: ()=>{
		Products.remove({});
	}
})