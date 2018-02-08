 // ________________________ PRE-HOME ________________________ 

// TEXT SCRAMBLER

let Messenger = function(el){
      'use strict';
      let m = this;
      
      m.init = function(){
        m.codeletters = "&#*+%?£@§$";
        m.message = 0;
        m.current_length = 0;
        m.fadeBuffer = false;
        m.messages = [
          'Hello.',
          'Welcome to',
          'James Bond\'s (unofficial) fanpage.',
          'Please click \'Enter\' to continue.',
          'Enjoy.'
        ];
        
        setTimeout(m.animateIn, 100);
      };
      
      m.generateRandomString = function(length){
        let random_text = '';
        while(random_text.length < length){
          random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
        } 
        
        return random_text;
      };
      
      m.animateIn = function(){
        if(m.current_length < m.messages[m.message].length){
          m.current_length = m.current_length + 2;
          if(m.current_length > m.messages[m.message].length) {
            m.current_length = m.messages[m.message].length;
          }
          
          let message = m.generateRandomString(m.current_length);
          $(el).html(message);
          
          setTimeout(m.animateIn, 20);
        } else { 
          setTimeout(m.animateFadeBuffer, 20);
        }
      };
      
      m.animateFadeBuffer = function(){
        if(m.fadeBuffer === false){
          m.fadeBuffer = [];
          for(let i = 0; i < m.messages[m.message].length; i++){
            m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
          }
        }
        
        let do_cycles = false;
        let message = ''; 
        
        for(let i = 0; i < m.fadeBuffer.length; i++){
          let fader = m.fadeBuffer[i];
          if(fader.c > 0){
            do_cycles = true;
            fader.c--;
            message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
          } else {
            message += fader.l;
          }
        }
        
        $(el).html(message);
        
        if(do_cycles === true){
          setTimeout(m.animateFadeBuffer, 50);
        } else {
          setTimeout(m.cycleText, 2000);
        }
      };
      
      m.cycleText = function(){
        m.message = m.message + 1;
        if(m.message >= m.messages.length){
          m.message = 0;
        }
        
        m.current_length = 0;
        m.fadeBuffer = false;
        $(el).html('');
        
        setTimeout(m.animateIn, 200);
      };
      
      m.init();
}

let messenger = new Messenger($('#messenger'));


// CLICK "ENTER"

$(window).ready(function() {
    $('nav, #enter-site, #homepage, #pres-movies, #presentation, #pres-books, #pres-games, #biography, #photoGallery, #goodies, #contactUs').hide();
    setTimeout(function(){
        $('#enter-site').fadeIn();
    }, 13000);

    // $('#homepage').hide();

    $('#enter-site').on('click', function() {
        $('#messengerContainer').animate({
            height: "10000",
            width: "10000",

        }, 'slow', function() {
            $('#pre-homepage').hide();
            $('#homepage, nav').fadeIn();
        });
        // $('#messengerContainer').animate({'zoom':10}, '500');
        $(this).fadeOut('fast');
        $('#messenger').css('opacity', '0');
    })
});


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

$('#nav-homepage').on('click', function() {
	$('#pres-movies, #presentation, #pres-books, #pres-games, #biography, #photoGallery, #goodies, #contactUs').hide();
	$('#homepage').show();
	// $('.pres-title h1').text('Video Games');
})

$('#nav-pres-movies').on('click', function() {
	$('#homepage, #pres-books, #pres-games, #biography, #photoGallery, #goodies, #contactUs').hide();
	$('#presentation, #pres-movies').show();
	$('.pres-title h1').text('Movies');
})

$('#nav-pres-books').on('click', function() {
	$('#homepage, #pres-movies, #pres-games, #biography, #photoGallery, #goodies, #contactUs').hide();
	$('#presentation, #pres-books').show();
	$('.pres-title h1').text('Books (Ian Flemming)');
})

$('#nav-pres-games').on('click', function() {
	$('#homepage, #pres-movies, #pres-books, #biography, #photoGallery, #goodies, #contactUs').hide();
	$('#presentation, #pres-games').show();
	$('.pres-title h1').text('Video Games');
})

$('#nav-biography').on('click', function() {
	$('#homepage, #presentation, #pres-movies, #pres-books, #pres-games, #photoGallery, #goodies, #contactUs').hide();
	$('#biography').show();
	// $('.pres-title h1').text('Video Games');
})

$('#nav-photo-gallery').on('click', function() {
	$('#homepage, #presentation, #pres-movies, #pres-books, #pres-games, #biography, #goodies, #contactUs').hide();
	$('#photoGallery').show();
	// $('.pres-title h1').text('Video Games');
})

$('#nav-goodies').on('click', function() {
	$('#homepage, #presentation, #pres-movies, #pres-books, #pres-games, #biography, #photoGallery, #contactUs').hide();
	$('#goodies').show();
	// $('.pres-title h1').text('Video Games');
})

$('#nav-contact').on('click', function() {
	$('#homepage, #presentation, #pres-movies, #pres-books, #pres-games, #biography, #photoGallery, #goodies').hide();
	$('#contactUs').show();
	// $('.pres-title h1').text('Video Games');
})


 // ________________________ HOMEPAGE ________________________ 

// NAVIGATION GRID (HOMEPAGE) CLICK EVENTS

$('.homepage-grid').masonry({
  itemSelector: '.homepage-grid-item',
  gutter: 10,
  // fitWidth: true,
  // isFitWidth: true,
  // columnWidth: 160
  columnWidth: 90
});

// grid2.imagesLoaded().progress(function() {
//     grid2.masonry();
// });

$('#homepage-movies').on('click', function(e) {
    // $(this).zoomTo({targetsize: 5, duration: 600});
    // e.stopPropagation();
    $('#homepage').fadeOut('fast', 'swing');
    $('#pres-books, #pres-games, #biography, #photoGallery, #goodies, #contactUs').hide();
    $('#presentation, #pres-movies').fadeIn();
    $('.pres-title h1').text('Movies');
})
$('#homepage-books').on('click', function(e) {
    // $(this).zoomTo({targetsize: 5, duration: 600});
    // e.stopPropagation();
    $('#homepage').slideUp();
    $('#pres-movies, #pres-games, #biography, #photoGallery, #goodies, #contactUs').hide();
    $('#presentation, #pres-books').fadeIn();
    $('.pres-title h1').text('Books (Ian Flemming)');
})
$('#homepage-games').on('click', function(e) {
    // $(this).zoomTo({targetsize: 5, duration: 600});
    // e.stopPropagation();
    $('#homepage').slideUp();
    $('#pres-movies, #pres-books, #biography, #photoGallery, #goodies, #contactUs').hide();
    $('#presentation, #pres-games').fadeIn();
    $('.pres-title h1').text('Video Games');
})
$('#homepage-bio').on('click', function(e) {
    // $(this).zoomTo({targetsize: 5, duration: 600});
    // e.stopPropagation();
    $('#homepage').slideUp();
    $('#presentation, #pres-movies, #pres-books, #pres-games, #photoGallery, #goodies, #contactUs').hide();
    $('#biography').fadeIn();
})
$('#homepage-photos').on('click', function(e) {
    // $(this).zoomTo({targetsize: 5, duration: 600});
    // e.stopPropagation();
    $('#homepage').slideUp();
    $('#presentation, #pres-movies, #pres-books, #pres-games, #biography, #goodies, #contactUs').hide();
    $('#photoGallery').fadeIn();
})
$('#homepage-goodies').on('click', function(e) {
// $(this).zoomTo({targetsize: 5, duration: 600});
    // e.stopPropagation();
    $('#homepage').slideUp();
    $('#presentation, #pres-movies, #pres-books, #pres-games, #biography, #photoGallery, #contactUs').hide();
    $('#goodies').fadeIn();
})
$('#homepage-contact').on('click', function(e) {
// $(this).zoomTo({targetsize: 5, duration: 600});
    // e.stopPropagation();
    $('#homepage').slideUp();
    $('#presentation, #pres-movies, #pres-books, #pres-games, #biography, #photoGallery, #goodies').hide();
    $('#contactUs').fadeIn();
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

$('#photos-modal').hide();

$(document).ready(function() {
	$.getJSON('https://raw.githubusercontent.com/SuperchillB/frontend-AllezCine/Bertie/2_Fan-page/js/photoGallery.json')
		.done(function(data) {
			let photoModalOpened = false;
			// for(let i = 0, length1 = data.length; i < length1; i++){
			for(let i = 0, length1 = data.length; i < length1; i++){
				$('.photo-cards-container').append(
					$('<div/>')
						.attr("id", "photo" + (i+1)) // Could add id here
						.addClass("photo-cards")
						.append("<img>")
				);
			}
			let photoCards = $('.photo-cards');
			let photoImg = $('.photo-cards img');
			for(let i = 0, length1 = photoCards.length; i < length1; i++){
				photoImg[i].src = data[i].photo;
				photoCards[i].addEventListener('click', function() {
					// console.log('clicked');
					photoModalOpened = true;
					// console.log(photoModalOpened);
					$('#photos-modal').fadeIn('fast');
					$('.hiding-bg').fadeIn('500');
					$('body').css('overflow', 'hidden');
					for(let j = 0, length1 = data.length; j < length1; j++){
						// console.log(photoCards[i].id);
						// console.log(data[j].photo);
						if (photoCards[i].id == data[j].id) {
							console.log('same');
							$('#photos-modal img').attr('src', data[j].photo);
						}
					}
					// console.log(data[i].poster);
				})
			}

			$('.photos-modal-cross').on('click', function(){
				$('.hiding-bg').fadeOut();
				$('#photos-modal').fadeOut();
				$('body').css('overflow', 'visible');
				photoModalOpened = false;
				// console.log(photoModalOpened);
			})

			let grid = $('.photo-cards-container').masonry({
				itemSelector: '.photo-cards',
				columnWidth: 200,
				gutter: 10,
				// horizontalOrder: true,
				fitWidth: true // Toggle for container width
			});

			grid.imagesLoaded().progress(function() {
				grid.masonry();
			});

			photoCards[8].classList.add('photos-cards--width3');
			photoCards[10].classList.add('photos-cards--width3');
			photoCards[19].classList.add('photos-cards--width3');
			photoCards[26].classList.add('photos-cards--width3');
			photoCards[38].classList.add('photos-cards--width3');
			photoCards[46].classList.add('photos-cards--width3');
			photoCards[56].classList.add('photos-cards--width3');
			photoCards[7].classList.add('photos-cards--width3');
			photoCards[14].classList.add('photos-cards--width3');
			photoCards[35].classList.add('photos-cards--width3');
			photoCards[63].classList.add('photos-cards--width3');

	})
})