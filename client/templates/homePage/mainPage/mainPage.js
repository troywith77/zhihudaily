var latestNewsList = new ReactiveVar([]),
	diffStories = new ReactiveVar(),
	todayDate = new ReactiveVar('');

Template.mainPage.onRendered(function() {
	Meteor.call('getLatestNews', function(error, result) {
		if(result) {
			latestNewsList.set(result.data.stories)
			if(!todayDate.get()) todayDate.set(result.data.date);
		}
	})
})

Template.mainPage.helpers({
	latestNews: function() {
		// console.log(diffStories.get())
		// return diffStories.get() || latestNewsList.get()
		if(diffStories.get()) {
			return diffStories.get();
		}
		else {
			return latestNewsList.get()
		}
	},
	getToday: function() {
		var date = todayDate.get(); 
		return date.substr(0,4) + ' - ' + date.substr(4, 2) + ' - ' + date.substr(6);
	},
	isTrashBrowser: function() {
		return isTranshBrowser();
	}
})

Template.latestNewsItem.helpers({
	itemImg: function() {
		return UI._globalHelpers.getImagePath(this.images[0])
	}
})

Template.latestNewsItem.events({
	'click .link': function() {
		Session.set('detail-has-title', true)
	}
})

changeDate = function(date) {
	Meteor.call('getHistoryNews', date, function(error, result) {
		if(result) {
			diffStories.set(result.data.stories);
			todayDate.set(result.data.date);
		}
	})	
}