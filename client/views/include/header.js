Template.header.events({
	'click #logout': function(evt, tmpl) {
		evt.stopPropagation();
		evt.preventDefault();

		Meteor.logout();
		Router.go('login');
	}
})