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

$('#hiding-bg').hide();
$('#movies-modal').hide();
// $('#hiding-bg').on('click', function(){
// 	navOpened = false;
// 	$(this).fadeOut('fast');
// 	$('nav').animate({left: '-200px'}, '500').css({
// 		backgroundColor: 'transparent'
// 	});
// 	$('#homepage, #presentation, #biography, #photoGallery, #goodies, #contactUs').css({
// 		transform: 'translateX(0px)'
// 	});
// 	$('.nav-toggle').removeClass('open');
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
		$('#hiding-bg').fadeIn('fast');
		navOpened = true;
	} else {
		$('nav').animate({left: '-200px'}, '500').css({
			backgroundColor: 'transparent'
		});
		$('#homepage, #presentation, #biography, #photoGallery, #goodies, #contactUs').css({
			// 'filter': 'blur(0px)'
			transform: 'translateX(0px)'
		});
		$('#hiding-bg').fadeOut('fast');
		navOpened = false;
		// $('#hiding-bg').on('click', function(){
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

 // ________________________ PRESENTATION ________________________ 

/* MOVIES */

let movieCards = $('#pres-movies .card-movies');
let movieImg = $('#pres-movies .card-top img');
// let movieTitle = $('#pres-movies .card-bottom p:nth-child(1)');
// let movieYear = $('#pres-movies .card-bottom p:nth-child(2)');

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
					$('#hiding-bg').fadeIn('500');
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
				$('#hiding-bg').fadeOut();
				$('#movies-modal').fadeOut();
				movieModalOpened = false;
				console.log(movieModalOpened);
			})
		})
});


/* BOOKS */

let bookCards = $('#pres-books .card-books');
let bookImg = $('#pres-books img');

$(document).ready(function() {
	$.getJSON('https://quentinclaes.github.io/allezcine/007book.json')
		.done(function(data) {
			// console.log(data);
			let counter = 0;
			for(let i = 0, length1 = bookCards.length; i < length1; i++){
				bookImg[i].src = data[counter].poster;
				bookCards[i].id = data[counter].id;
				counter++;
			}
		})
});

/* VIDEO GAMES */

let gamesCards = $('#pres-video-games .card-video-games');
let gamesImg = $('#pres-video-games img');

$(document).ready(function() {
	$.getJSON('https://quentinclaes.github.io/allezcine/007game.json')
		.done(function(data) {
			// console.log(data);
			let counter = 0;
			for(let i = 0, length1 = gamesCards.length; i < length1; i++){
				gamesImg[i].src = data[counter].poster;
				gamesCards[i].id = data[counter].id;
				counter++;

				// movieCards[i].addEventListener('click', function() {
				// 	movieModalOpened = true;
				// 	console.log(movieModalOpened);
				// 	$('#movies-modal').fadeIn('fast');
				// 	$('#hiding-bg').fadeIn('500');
				// 	for(let j = 0, length1 = jsonElement.length; j < length1; j++){
				// 		if (movieCards[i].id == jsonElement[j].id) {
				// 			$('#movies-modal-trailer').attr('src', 'https://www.youtube.com/embed/'+ jsonElement[j].youtube);
				// 			$('.movies-modal-bottom h5').text(jsonElement[j].title);
				// 			$('.movies-modal-bottom p').text(jsonElement[j].release_date);
				// 			$('.movies-modal-bottom div:nth-child(2)').text(jsonElement[j].overview);
				// 		}
				// 	}
				// })
			}
			// $('.movies-modal-cross').on('click', function(){
			// 	$('#hiding-bg').fadeOut();
			// 	$('#movies-modal').fadeOut();
			// 	movieModalOpened = false;
			// 	console.log(movieModalOpened);
			// })
		})
});




