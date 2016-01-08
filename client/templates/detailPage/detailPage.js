var detail = new ReactiveVar({}),
	contentHTML = new ReactiveVar(""),
	loadingState = new ReactiveVar(true);

Template.detailPage.onRendered(function() {
	Meteor.call('getDetailPage', Router.current().params.key, function(error, result) {
		if(result) {
			contentHTML.set(result.data.body.replace(/http\w{0,1}:\/\/pic/g, "https://images.weserv.nl/?url=pic"));
			detail.set(result.data);
			loadingState.set(false);
		}
	})
	$("html, body").animate({
		scrollTop: 0
	}, 200);
})

Template.detailPage.helpers({
	title: function() {
		return detail.get().title;
	},
	content: function() {
		return contentHTML.get();
	},
	isLoading: function() {
		return loadingState.get();
	}
})