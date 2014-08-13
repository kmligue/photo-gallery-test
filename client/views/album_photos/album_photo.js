Template.albumPhotos.rendered = function() {
	$('.fancybox').fancybox({
            padding : 0,
            openEffect  : 'elastic'
        });
}

Template.albumPhotos.photos = function() {
	return Photos.find({'metadata.owner': Router.current().params.id});
};

Template.albumPhotos.events({
  'submit #photos': function(evt, tmpl) {
  	evt.stopPropagation();
  	evt.preventDefault();

    var files = $('input[name="img"]')[0].files;

    for (var i = 0, ln = files.length; i < ln; i++) {
    	var file = files[i];
    	var newFile = new FS.File(file);
    	newFile.metadata = {owner: Router.current().params.id};
	      Photos.insert(newFile, function (error, fileObj) {
	        if(error) {
	        	console.log(error);
	        }
	        else{
	        	console.log(fileObj);
	        	$('input[name="img"]').val('');
	        	$('#photoModal').modal('hide');
	        }
	      });
    }
  }
});