Template.registerHelper('getImagePath', function(url) {
	var base_url = 'https://images.weserv.nl/?url=';
	return base_url + url.substr(7);  //应该都是第七位吧。。。
})