var latestNewsList = new ReactiveVar([]),
	todayDate = new ReactiveVar('');

Template.homePage.onRendered(function() {
	Meteor.call('getLatestNews', function(error, result) {
		if(result) {
			console.log(result.data);
			latestNewsList.set(result.data.stories);
			todayDate.set(result.data.date);
		}
	})
})

Template.homePage.helpers({
	latestNews: function() {
		return latestNewsList.get();
	},
	getToday: function() {
		var date = todayDate.get(); 
		return date.substr(0,4) + ' - ' + date.substr(4, 2) + ' - ' + date.substr(6);
	}
})

Template.latestNewsItem.helpers({
	itemImg: function() {
		return UI._globalHelpers.getImagePath(this.images[0])
	}
})