var themeContent = new ReactiveVar([]),
	themeTitle = new ReactiveVar(''),
	themeDescription = new ReactiveVar(''),
	themeLogo = new ReactiveVar('');
	isLoading = new ReactiveVar(true);

getThemes = function() {
	isLoading.set(true);
	themeContent.set();
	themeTitle.set();
	themeDescription.set();
	themeLogo.set();
	Meteor.call('getThemesListContent', Session.get('theme-id') , function(error, result) {
		if(result) {
			isLoading.set(false);
			themeContent.set(result.data.stories);
			themeTitle.set(result.data.name);
			themeDescription.set(result.data.description);
			themeLogo.set(result.data.image);
		}
	})
}

Template.themePage.onRendered(function() {
	getThemes();
})

Template.themePage.helpers({
	themeContent: function() {
		return themeContent.get();
	},
	themeTitle: function() {
		return themeTitle.get();
	},
	subTitle: function() {
		return themeDescription.get()
	},
	logoImage: function() {
		return UI._globalHelpers.getImagePath(themeLogo.get())
	},
	isLoading: function() {
		return isLoading.get();
	}
})

Template.themeContentItem.helpers({
	itemImg: function() {
		if(this.images) {
			return UI._globalHelpers.getImagePath(this.images[0]);
		}
	}
})

Template.themeContentItem.events({
	'click .link': function() {
		Session.set('detail-has-title', false);
	}
})