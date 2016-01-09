var latestNewsList = new ReactiveVar([]),
	todayDate = new ReactiveVar(''),
	loadingState = new ReactiveVar(true);

Template.mainPage.onRendered(function() {
	Meteor.call('getLatestNews', function(error, result) {
		if(result) {
			// latestNewsList.set(result.data.stories);
			Meteor.call('removeMainList');
			result.data.stories.forEach(function(story) {
				MainList.insert(story);
			})

			todayDate.set(result.data.date);
			loadingState.set(false);
		}
	})
})

Template.mainPage.helpers({
	latestNews: function() {
		// return latestNewsList.get();
		return MainList.find({});
	},
	getToday: function() {
		var date = todayDate.get(); 
		return date.substr(0,4) + ' - ' + date.substr(4, 2) + ' - ' + date.substr(6);
	},
	isLoading: function() {
		return loadingState.get();
	}
})

Template.latestNewsItem.helpers({
	itemImg: function() {
		return UI._globalHelpers.getImagePath(this.images[0])
	}
})

Template.latestNewsItem.onRendered(function() {

})