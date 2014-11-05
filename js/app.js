// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

var container = document.querySelector('#brick-house');
var msnry;
// initialize Masonry after all images have loaded
imagesLoaded( container, function() {
  msnry = new Masonry( container, {
  	// options
	  columnWidth: 150,
	  itemSelector: '.brick'
  } );
});
