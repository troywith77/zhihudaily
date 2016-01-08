var time = new ReactiveVar('');
var imgHref = new ReactiveVar('');

Template.openBg.onRendered(function() {
	Meteor.setTimeout(function() {
		// time.set('hide');
	}, 2000)
	Meteor.call('getOpenBg', function(error, result) {
		if(result) {
			console.log(result);
			imgHref.set(result.data.img)
		}
	})
})

Template.openBg.helpers({
	state: function() {
		return time.get()
	},
	imgSrc: function() {
		// return imgHref.get();
		return UI._globalHelpers.showImg(imgHref.get())
	}
})