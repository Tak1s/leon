import $ from 'jquery';
import tumblr from 'tumblr.js';


const client = tumblr.createClient({
    consumer_key: 'kVT2VuJt225CBW8wVs7uKg0Qv044wYdpJl5pVXnohQbjgpUeDu',
    consumer_secret: 'yVE6gEZLPz6MYRJdW3ayyk2WaTv7NJ6qpPy2aal42pfHoaHx5E',
    token: 'Q96oXJGbA3W9Svdr0aOE5PPJFZtRqN7tGJMuestywCcH0wL2rO',
    token_secret: 'xLtVp4krrF3outAxuj04rQP8sudIiYFyxk9KbU7wpWUM3ittSq',
});

client.blogPosts('valen-romanovskaya.tumblr.com', {type: 'photo', tag: TagName, limit: 50}, (err, data)=> {
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
let ww = $( window ).width();
let wh = $( window ).height();
console.log("ww", ww/4);
console.log("wh", wh/2);

const getRel = () => {
    const thisLargePhoto = $(elem).children().attr('rel');
    $('div.GalleryPhotoSlide').empty();
    $('.GalleryPhotoSlider').append('<div class="GalleryPhotoSlide"><img src="' + thisLargePhoto + '"></div>');
    // if (thisLargePhoto.height > thisLargePhoto.width){
    //     $('.GalleryPhotoSlider>img').css('max-height',''+(wh-100)+'');
    //     $('.GalleryPhotoSlider>img').css('max-width',''+(ww/4)+'')
    // } else if (thisLargePhoto.height < thisLargePhoto.width){
    //     $('.GalleryPhotoSlider>img').css('max-width',''+(ww-400)+'');
    //     $('.GalleryPhotoSlider>img').css('max-height',''+(wh/4)+'');
    // }
};
const chevronDisplay = () => {
    const next = $(elem).next().children().attr('rel');
    const prev = $(elem).prev().children().attr('rel');
    if (prev == undefined) {
    $('.backward>i').css('display', 'none');
    } else {
    $('.backward>i').css('display', 'block');   
    };
    if (next == undefined) {
    $('.forward>i').css('display', 'none');
    } else {
    $('.forward>i').css('display', 'block');   
    };
};

$('#photoalbum').on('click', 'div', (event) => {
    $('#overlay').css('display', 'block');
    $('body').css('overflow', 'hidden');
    console.log(event);
    elem = event.currentTarget;
    chevronDisplay();
    getRel();

    $('.backward').on('click', 'i', () => {
        elem = $(elem).prev();
        chevronDisplay();
        getRel();
    });
    $('.forward').on('click', 'i', () => {
        elem = $(elem).next();
        chevronDisplay();
        getRel();
    });
});

$('.close-btn').on('click', () => {
    $('#overlay').css('display', 'none');
    $('body').css('overflow', 'auto');
    $('div.GalleryPhotoSlide').empty();
    elem = null;
});

