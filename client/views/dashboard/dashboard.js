Template.dashboard.users = function() {
	return Meteor.users.find();
};

Template.dashboard.tableSettings = function() {
	return {
		rowsPerPage: 10,
        showFilter: true,
        fields: [
        			{key: 'username', label: 'Username'},
        			{key: 'profile.userType', label: 'User Type'}
        		]
	}
};

Template.dashboard.events({
	'submit .register': function(evt, tmpl) {
		evt.stopPropagation();
		evt.preventDefault();

		var username = $('#username');
		var password = $('#password');
		var userType = $('#user-type');

		$('.alert').addClass('hide');

		if(username.val() == '' || password.val() == '' || userType.val() == '') {
			$('.alert').removeClass('hide').text('Please fill up the fields.');
			return false;
		}

		Accounts.createUser({username: username.val(), password: password.val(), profile: {userType: userType.val()}}, function(error) {
			if(error) {
				$('.alert').removeClass('hide').text(error.reason);
			}
			else {
				username.val('');
				password.val('');
				userType.val('');
			}
		});
	}
})