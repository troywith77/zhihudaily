var themeList = new ReactiveVar([]);
var thumbnailList = new ReactiveVar([]);

Template.aside.onRendered(function() {
	Meteor.call("getThemesList", function(error, result) {
		if (result) {
			console.log(result.data.others)
			themeList.set(result.data.others);
			var temp = [];
			result.data.others.forEach(function(theme) {
				temp.push({'id': theme.id, 'thumbnail': theme.thumbnail});
			})
			thumbnailList.set(temp);
			console.log(thumbnailList.get())
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
		var themeId = this.id;
		Meteor.call('getThemesListContent', this.id, function(err, res) {
			Meteor.call('removeThemeContentList');
			res.data.stories.forEach(function(theme) {
				ThemeContentList.insert(theme);
			})
			var thumbnailSrc = '';
			thumbnailList.get().forEach(function(thumbnail) {
				console.log(thumbnail , themeId)
				if(thumbnail.id === themeId) thumbnailSrc = thumbnail.thumbnail
			})
			Session.set({
				'is-in-themes': true,
				'open-menu': '',
				'theme-title': res.data.name,
				'theme-logo': res.data.image,
				'theme-description': res.data.description,
				'no-image-src': thumbnailSrc
			});
		})
	},
	'click .go-home': function() {
		Session.set({
			'is-in-themes': false,
			'open-menu': ''
		});
	}
})