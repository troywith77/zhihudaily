Template.header.events({
	'click .go-back': function() {
		history.back();
	},
	'click .menu': function() {
		Session.get('open-menu') ? Session.set('open-menu', '') : Session.set('open-menu', 'open');
	}
})