var detail = new ReactiveVar({});

Template.detailPage.onRendered(function() {
	Meteor.call('getDetailPage', Router.current().params.key, function(error, result) {
		if(result) {
			detail.set(result.data)
		}
	})
})

Template.detailPage.helpers({
	title: function() {
		return detail.get().title;
	},
	content: function() {
		return detail.get().body;
	}
})