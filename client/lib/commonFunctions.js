Template.registerHelper('getImagePath', function(url) {
	var base_url = 'https://images.weserv.nl/?url=';
	if(url) return base_url + url.substr(7);  //应该都是第七位吧。。。
})

//识别微信浏览器，qq内置浏览器，uc浏览器
isTranshBrowser = function() {
	var browser = navigator.userAgent;
	if(browser.indexOf('MicroMessenger') > -1 || browser.indexOf('UCBrowser') > -1 || browser.indexOf('PA QQ') > -1) {
		return true;
	}
}