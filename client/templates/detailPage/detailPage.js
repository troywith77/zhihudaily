var detail = new ReactiveVar({}),
	contentHTML = new ReactiveVar("");

Template.detailPage.onRendered(function() {
	Meteor.call('getDetailPage', Router.current().params.key, function(error, result) {
		if(result) {
			console.log(result.data)
			contentHTML.set(result.data.body.replace(/http\w{0,1}:\/\/pic/g, "https://images.weserv.nl/?url=pic"));
			detail.set(result.data);
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
	}
})
