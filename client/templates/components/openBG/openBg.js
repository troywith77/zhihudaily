var time = new ReactiveVar('');

Template.openBg.onRendered(function() {
	Meteor.setTimeout(function() {
		time.set('hide');
	}, 2000)
	Meteor.call('getOpenBg', function(error, result) {
		if(result) {
			console.log(result)
		}
	})
})

Template.openBg.helpers({
	state: function() {
		return time.get()
	}
})