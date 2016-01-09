Template.header.events({
	'click .go-back': function() {
		if(history.back()) {}
		else {Router.go('home.page')}
	},
	'click .menu': function() {
		Session.get('open-menu') ? Session.set('open-menu', '') : Session.set('open-menu', 'open');
	}
})