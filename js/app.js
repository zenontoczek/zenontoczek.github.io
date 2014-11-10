// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

// initialize Masonry
var $container = $('#brick-house').masonry({
	columnWidth: 150,
	itemSelector: '.brick'
});
// layout Masonry again after all images have loaded
$container.imagesLoaded( function() {
  $container.masonry();
});

// $(document).ready({
// 	var container = document.querySelector('#brick-house');
// 	var msnry = new Masonry( container, {
// 	  // options
// 	  columnWidth: 150,
// 	  itemSelector: '.brick'
// 	});
// });