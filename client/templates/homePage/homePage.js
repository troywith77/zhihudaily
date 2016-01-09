Template.homePage.helpers({
	isThemes: function() {
		return Session.get('is-in-themes');
	}
})

Template.homePage.events({
	'touchstart .home-page': function() {
		Session.set('open-menu', '')
	}
})

