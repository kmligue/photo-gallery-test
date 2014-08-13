Template.album.events({
	'submit .save-album': function(evt, tmpl) {
		evt.stopPropagation();
		evt.preventDefault();

		var name = $('#name');
		var owner = Meteor.user()._id;

		$('.alert').addClass('hide');

		if(name.val() == '') {
			$('.alert').removeClass('hide').text('Type name of album.');
			return false;
		}

		Albums.insert({name: name.val(), owner: owner}, function(error) {
			if(error) {
				$('.alert').removeClass('hide').text(error.reason);
			}
			else {
				name.val('');
				$('#albumModal').modal('hide');
			}
		});
	}
});

Template.album.albums = function() {
	return Albums.find({owner: Meteor.user()._id});
}