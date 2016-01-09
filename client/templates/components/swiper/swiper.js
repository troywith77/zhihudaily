var topStoryList = new ReactiveVar([]);

Template.swiper.onRendered(function() {
	Meteor.call('getLatestNews', function(error, result) {
		if (result) {
			topStoryList.set(result.data.top_stories);
		}
	})
	if(!isTranshBrowser()) {
		Meteor.setTimeout(function() {
			var mySwiper = new Swiper('.swiper-container', {
				direction: 'horizontal',
				loop: true,
				effect: 'fade',
				autoplay: 5000,
		        autoplayDisableOnInteraction: false,
		        speed: 1500,
		        slidesPerView: 1,
	        	spaceBetween: 0,

				pagination: '.swiper-pagination',
			})
		}, 1000);
	}
})

Template.swiper.helpers({
	topStory: function() {
		return topStoryList.get();
	},
	imagePath: function() {
		return UI._globalHelpers.getImagePath(this.image)
	}
})