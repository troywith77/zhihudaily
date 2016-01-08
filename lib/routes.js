Router.route('/', {
	name: 'home.page',
	controller: 'BaseController'
});

Router.route('/detail/:key', {
	name: 'detail.page',
	controller: 'BaseController'
})