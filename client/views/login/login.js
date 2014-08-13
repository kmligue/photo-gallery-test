Template.login.events({
	'submit .form-signin': function(evt, tmpl) {
		evt.stopPropagation();
		evt.preventDefault();

		var username = $('#username');
		var password = $('#password');

		Meteor.loginWithPassword(username.val(), password.val(), function(error) {
			if(error) {
				$('.alert').removeClass('hide').text(error.reason);
			}
			else {
				if(Meteor.user().profile.userType == 'administrator')
					Router.go('dashboard');
			}
		})
	}
})