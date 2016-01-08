var API_BASE = "http://news-at.zhihu.com/api";

var latestNews = "/4/news/latest";
var detail = "/4/news/";

Meteor.methods({
	getLatestNews: function() {
		return HTTP.get( API_BASE + latestNews );
	},
	getDetailPage: function(pageId) {
		console.log(API_BASE + detail + pageId)
		return HTTP.get( API_BASE + detail + pageId )		
	}
})