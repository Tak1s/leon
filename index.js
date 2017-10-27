import $ from 'jquery';
import tumblr from 'tumblr.js';

var client = tumblr.createClient({
  consumer_key: 'kVT2VuJt225CBW8wVs7uKg0Qv044wYdpJl5pVXnohQbjgpUeDu',
  consumer_secret: 'yVE6gEZLPz6MYRJdW3ayyk2WaTv7NJ6qpPy2aal42pfHoaHx5E',
  token: 'Q96oXJGbA3W9Svdr0aOE5PPJFZtRqN7tGJMuestywCcH0wL2rO',
  token_secret: 'xLtVp4krrF3outAxuj04rQP8sudIiYFyxk9KbU7wpWUM3ittSq'
});

	client.blogPosts('valen-romanovskaya.tumblr.com',{type:'photo', tag:TagName, limit:50}, (err, data)=> {
		// console.log('data', data);
		data.posts.forEach(function(posts){
    		posts.photos.forEach(function(photo){
    			var mediumPhoto = photo.alt_sizes[4];
    			var largePhoto = photo.original_size;
				var div = document.createElement( "div" );
				if (mediumPhoto.height > mediumPhoto.width){
					$( div ).addClass( "item2" );
				}else{
					$( div ).addClass( "item" );
				};
				$( div ).append('<img src="'+mediumPhoto.url+'" rel="'+largePhoto.url+'"> ');
				$('#photoalbum').append(div);
			});
		}); 
		$('#photoalbum').on('click', "div", function on(){
			$("#overlay").css("display", "block");
			var thisLargePhoto = $(this).children().attr( "rel" );
			var nextLargePhoto = $(this).next().children().attr( "rel" );
			var prevLargePhoto = $(this).prev().children().attr( "rel" );
			$('.GalleryPhotoSlider').append('<div class="GalleryPhotoSlide"><img src="'+thisLargePhoto+'"></div>');

			console.log("^_^ this >", thisLargePhoto)
	    	console.log("o_o next >", nextLargePhoto)
	    	console.log("-_- prev >", prevLargePhoto)

	    	$('.forward').on('click', function (){
	    		$("div.GalleryPhotoSlide").empty();
	    		$('.GalleryPhotoSlider').append('<div class="GalleryPhotoSlide"><img src="'+nextLargePhoto+'"></div>');
	    	});	
	    	$('.backward').on('click', function (){
	    		// $('.GalleryPhotoSlide').replaceWith('<div class="GalleryPhotoSlide"><img src="'+prevLargePhoto+'"></div>');
	    		$("div.GalleryPhotoSlide").empty();
	    		$('.GalleryPhotoSlider').append('<div class="GalleryPhotoSlide"><img src="'+prevLargePhoto+'"></div>');
	    	});	

	    });
	    $('.close-btn').on('click', function off(){
			$("#overlay").css("display", "none");
	    	$("div.GalleryPhotoSlide").empty();
	    });
	});
