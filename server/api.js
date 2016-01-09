var API_BASE = "http://news-at.zhihu.com/api/";

var openBg = '4/start-image/1080*1776'
var latestNews = "4/news/latest";
var detail = "4/news/";
var themesList = "4/themes";
var themesListContent = "4/theme/";

Meteor.methods({
	getOpenBg: function() {
		return HTTP.get( API_BASE + openBg );
	},
	getLatestNews: function() {
		return HTTP.get( API_BASE + latestNews );
	},
	getDetailPage: function(pageId) {
		console.log(API_BASE + detail + pageId)
		return HTTP.get( API_BASE + detail + pageId )		
	},
	getThemesList: function() {
		return HTTP.get( API_BASE + themesList);
	},
	getThemesListContent: function(id) {
		return HTTP.get( API_BASE + themesListContent + id);
	},
	removeMainList: function() {
		MainList.remove({});
	},
	removeThemeContentList: function() {
		ThemeContentList.remove({});
	}
})