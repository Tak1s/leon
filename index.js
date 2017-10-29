import $ from 'jquery';
import tumblr from 'tumblr.js';


const client = tumblr.createClient({
    consumer_key: 'kVT2VuJt225CBW8wVs7uKg0Qv044wYdpJl5pVXnohQbjgpUeDu',
    consumer_secret: 'yVE6gEZLPz6MYRJdW3ayyk2WaTv7NJ6qpPy2aal42pfHoaHx5E',
    token: 'Q96oXJGbA3W9Svdr0aOE5PPJFZtRqN7tGJMuestywCcH0wL2rO',
    token_secret: 'xLtVp4krrF3outAxuj04rQP8sudIiYFyxk9KbU7wpWUM3ittSq',
});

client.blogPosts('valen-romanovskaya.tumblr.com', {type: 'photo', tag: TagName, limit: 50}, (err, data)=> {
    // console.log('data', data);
    data.posts.forEach(function(posts) {
        posts.photos.forEach(function(photo) {
            const mediumPhoto = photo.alt_sizes[4];
            const largePhoto = photo.original_size;
            const div = document.createElement( 'div' );
            if (mediumPhoto.height > mediumPhoto.width) {
                $( div ).addClass( 'item2' );
            } else {
                $( div ).addClass( 'item' );
            }
            $( div ).append('<img src="' + mediumPhoto.url + '" rel="' + largePhoto.url + '"> ');
            $('#photoalbum').append(div);
        });
    });
});

let elem = null;

const getRel = () => {
    console.log('elem', elem);
    const thisLargePhoto = $(elem).children().attr('rel');
    $('div.GalleryPhotoSlide').empty();
    $('.GalleryPhotoSlider').append('<div class="GalleryPhotoSlide"><img src="' + thisLargePhoto + '"></div>');
};

$('#photoalbum').on('click', 'div', (ev) => {
    $('#overlay').css('display', 'block');
    console.log(ev);
    elem = ev.currentTarget;
    getRel();

    $('.forward').on('click', () => {
        elem = $(elem).next();
        getRel();
    });
    $('.backward').on('click', () => {
        elem = $(elem).prev();
        getRel();
    });
});

$('.close-btn').on('click', () => {
    $('#overlay').css('display', 'none');
    $('div.GalleryPhotoSlide').empty();
});
