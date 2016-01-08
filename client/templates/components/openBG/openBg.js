var time = new ReactiveVar('');
var imgHref = new ReactiveVar('');

Template.openBg.onRendered(function() {
	Meteor.setTimeout(function() {
		time.set('hide');
	}, 3000)
	Meteor.call('getOpenBg', function(error, result) {
		if(result) {
			imgHref.set(result.data.img)
		}
	})
})

Template.openBg.helpers({
	state: function() {
		return time.get()
	},
	imgSrc: function() {
		if(imgHref.get()) return UI._globalHelpers.showOpenImg(imgHref.get())
	}
})