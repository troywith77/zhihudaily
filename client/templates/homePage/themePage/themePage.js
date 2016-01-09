var themeContent = new ReactiveVar([]);

Template.themePage.onRendered(function() {
	
})

Template.themeContentItem.onRendered(function() {

})

Template.themePage.helpers({
	themeContent: function() {
		return ThemeContentList.find({});
	},
	themeTitle: function() {
		return Session.get('theme-title');
	},
	subTitle: function() {
		return Session.get('theme-description');
	},
	logoImage: function() {
		return UI._globalHelpers.getImagePath(Session.get('theme-logo'))
	}
})

Template.themeContentItem.helpers({
	itemImg: function() {
		if(this.images) {
			return UI._globalHelpers.getImagePath(this.images[0]);
		} else {
			return UI._globalHelpers.getImagePath(Session.get('no-image-src'));
		}
	}

})