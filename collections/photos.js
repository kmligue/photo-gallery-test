Photos = new FS.Collection('photos', {
	stores: [new FS.Store.FileSystem('images')],
	filter: {
		allow: {
			contentTypes: ['image/*'],
			extensions: ['png', 'PNG', 'jpg', 'JPG', 'jpeg', 'JPEG']
		}
	}
})