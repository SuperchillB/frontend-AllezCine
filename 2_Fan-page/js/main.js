// PRESENTATION - MOVIES AJAX

/*
I've never programmed one myself, but I would imagine this is how it works.

An event is bound to the the window scrolling

$(window).scroll(myInfinteScrollFunction);
The called function checks if scroll top is greater than the window size

function myInfiniteScrollFunction() {  
    if($(window).scrollTop() == $(window).height())  
    makeAjaxRequest();  
}
An AJAX request is made, specifying which result # to start at, how many to grab, and any other parameters necessary for the data pull.

$.ajax({
    type: "POST",
    url:  "myAjaxFile.php",
    data: {"resultNum": 30, "numPerPage": 50, "query": "interesting%20icons" },
    success: myInfiniteLoadFunction(msg)
});
The ajax returns some (most-likely JSON formatted) content, and passes them into the loadnig function.

*/



// $(window).scroll(function() {
//     if($(window).scrollTop() == $(document).height() - $(window).height()) {
//            // ajax call or some other logic to show data here
//     }
// });


 // ________________________ NAV ________________________ 

let navOpened = false;
$('.nav-toggle').click(function(){
	$('.nav-toggle').toggleClass('open'); // triggers hamburger animation
	if (navOpened == false) {
		$('nav').animate({left: 0}, '500').css({
			backgroundColor: 'rgba(0, 0, 0, 0.9)'
		});
		$('#homepage, #presentation, #biography, #photoGallery, #goodies, #contactUs').css({
			// 'filter': 'blur(3px)'
			transform: 'translateX(20px)'
		});
		$('.hiding-bg').fadeIn('fast');
		navOpened = true;
	} else {
		$('nav').animate({left: '-200px'}, '500').css({
			backgroundColor: 'transparent'
		});
		$('#homepage, #presentation, #biography, #photoGallery, #goodies, #contactUs').css({
			// 'filter': 'blur(0px)'
			transform: 'translateX(0px)'
		});
		$('.hiding-bg').fadeOut('fast');
		navOpened = false;
		// $('.hiding-bg').on('click', function(){
		// 	$(this).fadeOut('fast');
		// 	$('nav').animate({left: '-200px'}, '500').css({
		// 		backgroundColor: 'transparent'
		// 	});
		// 	$('#homepage, #presentation, #biography, #photoGallery, #goodies, #contactUs').css({
		// 		transform: 'translateX(0px)'
		// 	});
		// 	$('.nav-toggle').removeClass('open');
		// });
	}
});

$('.nav-menu li:nth-child(2)').on('click', function(){
	$('.nav-dropdown').slideToggle('500');
})

$('#nav-pres-movies').on('click', function() {
	$('#pres-books, #pres-games').hide();
	$('#pres-movies').show();
	$('.pres-title h1').text('Movies');
})

$('#nav-pres-books').on('click', function() {
	$('#pres-movies, #pres-games').hide();
	$('#pres-books').show();
	$('.pres-title h1').text('Books (Ian Flemming)');
})

$('#nav-pres-games').on('click', function() {
	$('#pres-movies, #pres-books').hide();
	$('#pres-games').show();
	$('.pres-title h1').text('Video Games');
})

 // ________________________ PRESENTATION ________________________ 

$('.hiding-bg').hide();
$('#movies-modal').hide();
$('#books-modal').hide();
$('#games-modal').hide();

/* MOVIES */

let movieCards = $('#pres-movies .card-movies');
let movieImg = $('#pres-movies .card-top img');

$(document).ready(function() {
	$.getJSON('https://quentinclaes.github.io/allezcine/007movie2.json')
		.done(function(data) {
			let movieModalOpened = false;
			let jsonElement = data["parts"];
			// console.log(jsonElement);
			let counter = 0;
			for(let i = 0, length1 = movieCards.length; i < length1; i++){
				movieImg[i].src = 'http://image.tmdb.org/t/p/w185' + jsonElement[counter].poster_path;
				movieCards[i].id = jsonElement[counter].id;
				counter++;

				movieCards[i].addEventListener('click', function() {
					movieModalOpened = true;
					console.log(movieModalOpened);
					$('#movies-modal').fadeIn('fast');
					$('.hiding-bg').fadeIn('500');
					$('body').css('overflow', 'hidden');
					for(let j = 0, length1 = jsonElement.length; j < length1; j++){
						if (movieCards[i].id == jsonElement[j].id) {
							$('#movies-modal-trailer').attr('src', 'https://www.youtube.com/embed/'+ jsonElement[j].youtube);
							$('.movies-modal-bottom h5').text(jsonElement[j].title);
							$('.movies-modal-bottom p').text(jsonElement[j].release_date);
							$('.movies-modal-bottom div:nth-child(2)').text(jsonElement[j].overview);
						}
					}
				})
			}
			$('.movies-modal-cross').on('click', function(){
				$('.hiding-bg').fadeOut();
				$('#movies-modal').fadeOut();
				$('body').css('overflow', 'visible');
				movieModalOpened = false;
				console.log(movieModalOpened);
			})
		})
});


/* BOOKS */

let bookCards = $('#pres-books .card-books');
let bookImg = $('.card-books img');

$(document).ready(function() {
	$.getJSON('https://quentinclaes.github.io/allezcine/007book.json')
		.done(function(data) {
			let bookModalOpened = false;
			// console.log(data);
			let counter = 0;
			for(let i = 0, length1 = bookCards.length; i < length1; i++){
				bookImg[i].src = data[counter].poster;
				bookCards[i].id = data[counter].ID;
				counter++;

				bookCards[i].addEventListener('click', function() {
					bookModalOpened = true;
					console.log(bookModalOpened);
					$('#books-modal').fadeIn('fast');
					$('.hiding-bg').fadeIn('500');
					$('body').css('overflow', 'hidden');
					for(let j = 0, length1 = data.length; j < length1; j++){
						if (bookCards[i].id == data[j].ID) {
							$('#books-modal img').attr('src', data[j].poster);
							$('.books-modal-right h5').text(data[j].title);
							$('.books-modal-right p').text(data[j].release);
							$('.books-modal-right div:nth-child(2)').text(data[j].synopsis);
						}
					console.log(data[j].release);
					}
				})
			}
			$('.books-modal-cross').on('click', function(){
				$('.hiding-bg').fadeOut();
				$('#books-modal').fadeOut();
				$('body').css('overflow', 'visible');
				bookModalOpened = false;
				console.log(bookModalOpened);
			})
		})
});

/* VIDEO GAMES */

let gamesCards = $('#pres-games .card-games');
let gamesImg = $('.card-games img');

$(document).ready(function() {
	$.getJSON('https://quentinclaes.github.io/allezcine/007game.json')
		.done(function(data) {
			let gameModalOpened = false;
			// console.log(data);
			let counter = 0;
			for(let i = 0, length1 = gamesCards.length; i < length1; i++){
				gamesImg[i].src = data[counter].poster;
				gamesCards[i].id = data[counter].ID;
				counter++;

				gamesCards[i].addEventListener('click', function() {
					console.log('clicked');
					gameModalOpened = true;
					console.log(gameModalOpened);
					$('#games-modal').fadeIn('fast');
					$('.hiding-bg').fadeIn('500');
					$('body').css('overflow', 'hidden');
					for(let j = 0, length1 = data.length; j < length1; j++){
						if (gamesCards[i].id == data[j].ID) {
							$('#games-modal img').attr('src', data[j].poster);
							$('.games-modal-right h5').text(data[j].title);
							$('.games-modal-right p').text(data[j].release);
							$('.games-modal-right div:nth-child(2)').text(data[j].console);
						}
					}
					console.log(data[i].poster);
				})
			}
			$('.games-modal-cross').on('click', function(){
				$('.hiding-bg').fadeOut();
				$('#games-modal').fadeOut();
				$('body').css('overflow', 'visible');
				gameModalOpened = false;
				console.log(gameModalOpened);
			})
		})
});


 // ________________________ PHOTO GALLERY ________________________ 

 

