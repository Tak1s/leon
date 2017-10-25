import $ from 'jquery';
import tumblr from 'tumblr.js';

var client = tumblr.createClient({
  consumer_key: 'kVT2VuJt225CBW8wVs7uKg0Qv044wYdpJl5pVXnohQbjgpUeDu',
  consumer_secret: 'yVE6gEZLPz6MYRJdW3ayyk2WaTv7NJ6qpPy2aal42pfHoaHx5E',
  token: 'Q96oXJGbA3W9Svdr0aOE5PPJFZtRqN7tGJMuestywCcH0wL2rO',
  token_secret: 'xLtVp4krrF3outAxuj04rQP8sudIiYFyxk9KbU7wpWUM3ittSq'
});

	client.blogPosts('valen-romanovskaya.tumblr.com',{type:'photo', tag:TagName, limit:50}, (err, data)=> {
		console.log('data', data);
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
		$('#photoalbum').on('click', "img", function on(){
			document.getElementById("overlay").style.display = "block";
			var RLP = $(this).attr( "rel" );
			$('.GalleryPhotoSlider').append('<div class="GalleryPhotoSlide"><img src="'+RLP+'"></div>');
			console.log("^_^", RLP) 
	    });
	    $('.close-btn').on('click', function off(){
			document.getElementById("overlay").style.display = "none";
	    	$("div.GalleryPhotoSlide").empty();
	    });
	});
