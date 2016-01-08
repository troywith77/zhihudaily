var topStoryList = new ReactiveVar([]);

Template.swiper.onRendered(function() {
	Meteor.call('getLatestNews', function(error, result) {
		if (result) {
			topStoryList.set(result.data.top_stories);
			console.log(topStoryList.get());
		}
	})
	Meteor.setTimeout(function() {
		var mySwiper = new Swiper('.swiper-container', {
			direction: 'horizontal',
			loop: true,

			pagination: '.swiper-pagination',
		})
	}, 1000)
})

Template.swiper.helpers({
	topStory: function() {
		return topStoryList.get();
	},
	imagePath: function() {
		return UI._globalHelpers.getImagePath(this.image)
	}
})