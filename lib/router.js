Router.configure({
	layoutTemplate: 'layout',
	yieldTemplates: {
		'header': {to: 'header'}
	}
});

Router.map(function() {
	this.route('login', {
		path: '/',
		layoutTemplate: 'fullPageLayout'
	});

	this.route('dashboard', {
		path: '/dashboard'
	});

	this.route('album', {
		path: '/album'
	});

	this.route('albumPhotos', {
		path: '/album/:id',
		data: function() {
			return {
				id: this.params.id
			}
		}
	});

	this.route('accessDenied', {
		path: '/denied',
		layoutTemplate: 'fullPageLayout'
	});
});

var requireLogin = function(pause) {
	if(!Meteor.user()) {
		// if(Meteor.loggingIn())
		// 	Router.go('accessDenied');
		// // else
			// Router.go('accessDenied');

		pause();
	}
};

Router.onBeforeAction(requireLogin, {only: [
											'dashboard'
											]});