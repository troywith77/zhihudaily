var themeList = new ReactiveVar([]);
var thumbnailList = new ReactiveVar([]);

Template.aside.onRendered(function() {
	Meteor.call("getThemesList", function(error, result) {
		if (result) {
			themeList.set(result.data.others);
			var temp = [];
			result.data.others.forEach(function(theme) {
				temp.push({'id': theme.id, 'thumbnail': theme.thumbnail});
			})
			thumbnailList.set(temp);
		}
	})
})

Template.aside.helpers({
	theme: function() {
		return themeList.get();
	},
	class: function() {
		return Session.get('open-menu')
	}
})

Template.aside.events({
	'click .get-theme-content': function() {
		Session.set('theme-id', this.id);
		var themeId = this.id;
		var thumbnailSrc = '';
		thumbnailList.get().forEach(function(thumbnail) {
			if(thumbnail.id === themeId) thumbnailSrc = thumbnail.thumbnail
		})
		Session.set({
			'is-in-themes': true,
			'open-menu': '',
			'no-image-src': thumbnailSrc
		});
		getThemes();
	},
	'click .go-home': function() {
		Session.set({
			'is-in-themes': false,
			'open-menu': ''
		});
	}
})