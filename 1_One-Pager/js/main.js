// AGE CONFIRMATION

// $('#confirmAgeContainer').show();
// $('#hidingDiv').show();

// $('#confirmAgeBtn').on('click', function() {
//  $('#hidingDiv').hide();
//  $('#confirmAgeContainer').hide();
// })

// $('#signUpCancel').on('click', function(){
//  $('#hidingDiv').hide();
//  $('#confirmAgeContainer').hide();
// })
// Problem: code above works but pop up keeps appearing on each refresh

// $(document).ready(function() {
    let popState = localStorage.getItem('popState');
    if(popState != 'shown'){
        $('#confirmAgeContainer').show();
        $('#hidingDiv').show();
        // localStorage.setItem('popState','shown')
    } else {
        $('#confirmAgeContainer').hide();
        $('#hidingDiv').hide();
    }

    $('#confirmAgeBtn').on('click', function() {
        $('#hidingDiv').fadeOut('fast');
        $('#confirmAgeContainer').fadeOut('fast');
        localStorage.setItem('popState','shown');
    })
// });
// Problem: when refresh, pop up shows for less than a second but it shouldn't be showing at all
// USE THIS AS MODEL: https://thinkster.io/ionic-framework-tutorial (type localStorage in console to show modal)


// LOGIN MODAL
$('#loginContainer').hide();

$('#loginStartButton').on('click', function() {
    $('#hidingDiv').fadeIn();
    $('#loginContainer').fadeIn();
})

$('#loginCancel').on('click', function() {
    $('#hidingDiv').fadeOut();
    $('#loginContainer').fadeOut();
})

$('#loginSignUp').on('click', function() {
    $('#loginContainer').hide();
    $('#signUpContainer').fadeIn();
    $('#hidingDiv').show();
})


// SIGN UP MODAL
$('#signUpContainer').hide();
// $('#hidingDiv').hide();

$('#signUpStartBtn').on('click', function() {
    $('#hidingDiv').fadeIn('fast');
    $('#signUpContainer').fadeIn('fast');
})

$('#signUpCancel').on('click', function(){
    $('#hidingDiv').fadeOut('fast');
    $('#signUpContainer').fadeOut('fast');
})
// ==> in form: code own requirements


// CONTACT US - POPUP ENTRIES MESSAGE
$('#contactUsEntries').hide();

$('#contactUsButton').on('click', function() {
    let contactNames = $('#contactFirstnameInput').val() + ' ' + $('#contactLastnameInput').val();
    let contactEmail = $('#contactEmailInput').val();
    let contactSubject = $('#contactSubjectInput').val();
    let contactMessage = $('#contactMessageInput').val();

    if (contactNames !== '' && contactEmail !== '' && contactSubject !== '' && contactMessage !== '') {
        $('#hidingDiv').show();
        $('#contactUsName').text(contactNames);
        $('#contactUsEmail').text(contactEmail);
        $('#contactUsSubject').text(contactSubject);
        $('#contactUsMessage').text(contactMessage);
        $('#contactUsEntries').show();
    }
})

$('#contactUsChange').on('click', function() {
    $('#hidingDiv').hide();
    $('#contactUsEntries').hide();
})

// CONTACT US - MAPS
function initMap() {
    let becode = {lat: 50.846033, lng: 4.3574682};
    let map = new google.maps.Map(document.getElementById('contactUsMap'), {
        zoom: 8,
        center: becode
    });
    let marker = new google.maps.Marker({
        position: becode,
        map: map
    });
}

// COOKIE BOX
$('#cookieButton').on('click', function() {
    $('#cookieBox').css("display", "none");
})


// MENU LINKS SLIDE
$(document).ready(function(){
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        $('html, body').animate({
          'scrollTop': $(target).offset().top + (-90)
        }, 600, 'swing');
    });
});


//BUTTON UP SLIDE
$('#buttonUp').hide();

$(window).scroll(function () {
	if ($(this).scrollTop() > 300) {
		$('#buttonUp').fadeIn();
	} else {
		$('#buttonUp').fadeOut();
	}
})

$('#buttonUp').on('click', function () {
		$('html, body').animate({
			scrollTop:0
		}, 500, 'swing');
})

// NAVBAR SOLID BACKGROUND ON SCROLL
function checkScroll(){
    var startY = $('.navbar').height() * 2;

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}
if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}





//FILMS
// let apikey = "908e84944eac33ec8410b6162aa0f393"
var requestURL = "https://quentinclaes.github.io/allezcine/movie.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var superHeroes = request.response;
    showFilm(superHeroes);
}

function showFilm(jsonObj) {
    let film = jsonObj['results'];

    let fillCard = $('#moviesAll .card');
    let fillImg = $('#moviesAll .card-img-top');
    let fillTitle = $('#moviesAll .card-title');
    let fillText = $('#moviesAll .card-text');

    let counter = 0;

    for(let i = 0, length1 = fillCard.length; i < length1; i++){
        fillTitle[i].textContent = film[counter].title;
        fillText[i].textContent = film[counter].release_year;
        fillImg[i].src = 'http://image.tmdb.org/t/p/w185' + film[counter].poster_path;
        fillCard[i].id = film[counter].id; // CREATE ID FOR EACH CARD CREATED
        counter++;
    }

    // FILTER ALL MOVIES
    $('#btn-all').on('click',function(){
        actionClicked = false;
        thrillerClicked = false;
        sciFiClicked = false;
        fillCard.show();
        $("#filmMoviesInvisible").hide();
    })

    // FILTER ACTION MOVIES
    let actionClicked = false;
    $('#btn-action').on('click',function(e){
        thrillerClicked = false;
        sciFiClicked = false;
        fillCard.show();
        actionClicked = true;
        let notAction = [];
        for (var i = 0; i < jsonObj['results'].length; i++) {
            if (jsonObj['results'][i]['genre_ids'].indexOf(28) === -1) {
                notAction.push(jsonObj['results'][i]);
            }
        }
        // console.log(notAction); // returns array of non action movies
        for(let i = 0, length1 = notAction.length; i < length1; i++){
            for(let j = 0, length1 = fillCard.length; j < length1; j++){
                if (fillCard[j].id == notAction[i].id) {
                    fillCard[j].style.display = 'none';
                }
            }
        }
        $("#filmMoviesInvisible").show();
    })

    // FILTER THRILLER MOVIES (number 53)
    let thrillerClicked = false; // TO BE USED LATER BELOW IN SHOW MORE/LESS BUTTON CODE
    $('#btn-thriller').on('click',function(e){
        actionClicked = false;
        sciFiClicked = false;
        fillCard.show();
        thrillerClicked = true; // TO BE USED LATER BELOW IN SHOW MORE/LESS BUTTON CODE
        let notThriller = [];
        for (var i = 0; i < jsonObj['results'].length; i++) {
            if (jsonObj['results'][i]['genre_ids'].indexOf(53) === -1) {
                notThriller.push(jsonObj['results'][i]);
            }
        }
        // console.log(notThriller);
        for(let i = 0, length1 = notThriller.length; i < length1; i++){
            for(let j = 0, length1 = fillCard.length; j < length1; j++){
                if (fillCard[j].id == notThriller[i].id) {
                    fillCard[j].style.display = 'none';
                }
            }
        }
        $("#filmMoviesInvisible").show();
    })


    // FILTER SCI-FI MOVIES (number 878)
    let sciFiClicked = false; // TO BE USED LATER BELOW IN SHOW MORE/LESS BUTTON CODE
    $('#btn-scifi').on('click',function(e){
        actionClicked = false;
        thrillerClicked = false;
        fillCard.show();
        sciFiClicked = true; // TO BE USED LATER BELOW IN SHOW MORE/LESS BUTTON CODE
        let notSciFi = [];
        for (var i = 0; i < jsonObj['results'].length; i++) {
            if (jsonObj['results'][i]['genre_ids'].indexOf(878) === -1) {
                notSciFi.push(jsonObj['results'][i]);
            }
        }
        // console.log(notSciFi);
        for(let i = 0, length1 = notSciFi.length; i < length1; i++){
            for(let j = 0, length1 = fillCard.length; j < length1; j++){
                if (fillCard[j].id == notSciFi[i].id) {
                    fillCard[j].style.display = 'none';
                }
            }
        }
        $("#filmMoviesInvisible").show();
    })


    // HIDE INVISIBLE MOVIES
    $("#filmMoviesInvisible").hide();

    // SHOW MORE/LESS BUTTON
    let moviesButtonClicked = false;
    $('#moviesButton').on('click', function(e) {
        if (actionClicked == true || thrillerClicked == true || sciFiClicked == true) {
            e.preventDefault();
        } else {
            if (moviesButtonClicked == false) {
                $("#filmMoviesInvisible").slideDown( "slow", function() {
                    $(this).show();
                });
                $(this).text('SHOW LESS');
                moviesButtonClicked = true;
            } else {
                $("#filmMoviesInvisible").slideUp( "slow", function() {
                    $(this).hide();
                })
                $(this).text('MORE MOVIES');
                moviesButtonClicked = false;
            }
        }
    })


	// SHOP MOVIES LEFT
	let shopMovies = $('#shopMovies .card');
	let shopMoviesImg = $('#shopMovies img');
	let shopMoviesTitle = $('#shopMovies .card-title');
	let shopMoviesText = $('#shopMovies .shopDateLeft');

	let more = 0;

	for(let i = 0, length1 = shopMovies.length; i < length1; i++){
		shopMoviesImg[i].src = 'http://image.tmdb.org/t/p/w185' + film[i].poster_path;
    shopMoviesTitle[i].textContent = film[i].title;
		shopMoviesText[i].textContent = film[i].release_year;
	}


	// SHOP MOVIES RIGHT
    let shopMoviesList = [{
	    id: 346364,
	    title: "It",
	    poster_path: "\/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
	    genre_ids: [18, 27, 53],
	    backdrop_path: "\/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg",
	    overview: "In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.",
	    release_year: "2017",
	    youtube: "hAUTdjf9rko",
	    movieCounter: 0
	    }, {
	    id: 396422,
	    title: "Annabelle: Creation",
	    poster_path: "\/tb86j8jVCVsdZnzf8I6cIi65IeM.jpg",
	    genre_ids: [27, 9648, 53],
	    backdrop_path: "\/3L5gfIKt2RK9vnCiLgWTAzkhQWC.jpg",
	    overview: "Several years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, soon becoming the target of the dollmaker's possessed creation, Annabelle.",
	    release_year: "2017",
	    youtube: "KisPhy7T__Q",
	    movieCounter: 1
	    }, {
	    id: 363126,
	    title: "Berlin Syndrome",
	    poster_path: "\/fskmBBGdm7KRA1ZRkdA2qaEqOAv.jpg",
	    genre_ids: [9648, 53, 18, 27],
	    backdrop_path: "\/bRUbcR11v8xWrwiFVWDwwQfPkc2.jpg",
	    overview: "A passionate holiday romance leads to an obsessive relationship when an Australian photojournalist wakes one morning in a Berlin apartment and is unable to leave.",
	    release_year: "2017",
	    youtube: "Y8tpKbrN9Uo",
	    movieCounter: 2
	    }, {
	    id: 419430,
	    title: "Get Out",
	    poster_path: "\/1SwAVYpuLj8KsHxllTF8Dt9dSSX.jpg",
	    genre_ids: [9648, 53, 27],
	    backdrop_path: "\/emZPptKwTzlMmYcjlTvVVHmOAac.jpg",
	    overview: "Chris and his girlfriend Rose go upstate to visit her parents for the weekend. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he never could have imagined.",
	    release_year: "2017",
	    youtube: "DzfpyUB60YY",
	    movieCounter: 3
	    }, {
	    id: 210577,
	    title: "Gone Girl",
	    poster_path: "\/gdiLTof3rbPDAmPaCf4g6op46bj.jpg",
	    genre_ids: [9648, 53, 18],
	    backdrop_path: "\/bt6DhdALyhf90gReozoQ0y3R3vZ.jpg",
	    overview: "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
	    release_year: "2014",
	    youtube: "2-_-1nJf8Vg",
	    movieCounter: 4
	    }, {
	    id: 680,
	    title: "Pulp Fiction",
	    poster_path: "\/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
	    genre_ids: [53, 80],
	    backdrop_path: "\/9rZg1J6vMQoDVSgRyWcpJa8IAGy.jpg",
	    overview: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
	    release_year: "1994",
	    youtube: "7EdQ4FqbhY",
	    movieCounter: 5
	    }, {
	    id: 205596,
	    title: "The Imitation Game",
	    poster_path: "\/noUp0XOqIcmgefRnRZa1nhtRvWO.jpg",
	    genre_ids: [36, 18, 53, 10752],
	    backdrop_path: "\/fii9tPZTpy75qOCJBulWOb0ifGp.jpg",
	    overview: "Based on the real life story of legendary cryptanalyst Alan Turing, the film portrays the nail-biting race against time by Turing and his brilliant team of code-breakers at Britain's top-secret Government Code and Cypher School at Bletchley Park, during the darkest days of World War II.",
	    release_year: "2014",
	    youtube: "S5CjKEFb-sM",
	    movieCounter: 6
	    }, {
	    id: 75656,
	    title: "Now You See Me",
	    poster_path: "\/A06e9YJ5ry3WXEIFIAD1mKBxcuZ.jpg",
	    genre_ids: [53, 80],
	    backdrop_path: "\/9wbXqcx6rHhoZ9Esp03C7amQzom.jpg",
	    overview: "An FBI agent and an Interpol detective track a team of illusionists who pull off bank heists during their performances and reward their audiences with the money.",
	    release_year: "2013",
	    youtube: "4OtM9j2lcUA",
	    movieCounter: 7
    }];

    let movieCarouselIframe = $('#movieCarousel iframe');
    let movieCarouselTitle = $('#movieCarousel .card-title');
    let movieCarouselDescription = $('#movieCarousel .shopDescription');
    let movieCarouselDate = $('#movieCarousel .shopDate');
    let movieCarouselGenre = $('#movieCarousel .shopGenre');

    let currentVideo = 0;
    let clicked = false;

    shopMovies.on("click", function () {
      clicked = true;
      currentVideo = Number($(this).data('counter'));
      for (var i = 0; i < shopMoviesList.length; i++) {
        if ($(this).data('title') == shopMoviesList[i].title) {
          movieCarouselIframe.attr('src', 'https://www.youtube.com/embed/' + shopMoviesList[i].youtube);
          movieCarouselTitle.text(shopMoviesList[i].title);
          movieCarouselDescription.text(shopMoviesList[i].overview);
          movieCarouselDate.text(shopMoviesList[i].release_year);
          if (shopMoviesList[i].genre_ids == 53) {
            movieCarouselGenre.text('Thriller');
          } else if (shopMoviesList[i].genre_ids == 878) {
            movieCarouselGenre.text('Sci-Fi');
          } else if (shopMoviesList[i].genre_ids == 28) {
            movieCarouselGenre.text('Action');
          } else if (shopMoviesList[i].genre_ids == 18) {
            movieCarouselGenre.text('Drama');
          }
        }
      }
    })

    $('#movieNext').on('click', function() {
      if (clicked == true) {
        clicked = false;
        console.log($(this).data('counter'));
        if (currentVideo == 7) {
          currentVideo = 0;
        } else {
          currentVideo++;
        }
      } else {
        if (currentVideo == 7) {
          currentVideo = 0;
        } else {
          currentVideo++;
        }
      }
      for (var i = 0; i < shopMovies.length; i++) {
        if (shopMovies.data('title') == shopMoviesList[i].title) {
          movieCarouselIframe.attr('src', 'https://www.youtube.com/embed/' + shopMoviesList[currentVideo].youtube);
          movieCarouselTitle.text(shopMoviesList[currentVideo].title);
          movieCarouselDescription.text(shopMoviesList[currentVideo].overview);
          movieCarouselDate.text(shopMoviesList[currentVideo].release_year);
          if (shopMoviesList[currentVideo].genre_ids == 53) {
            movieCarouselGenre.text('Thriller');
          } else if (shopMoviesList[currentVideo].genre_ids == 878) {
            movieCarouselGenre.text('Sci-Fi');
          } else if (shopMoviesList[currentVideo].genre_ids == 28) {
            movieCarouselGenre.text('Action');
          } else if (shopMoviesList[currentVideo].genre_ids == 18) {
            movieCarouselGenre.text('Drama');
          }
        }
      }
    })

    $('#moviePrev').on('click', function() {
      if (clicked == true) {
        clicked = false;
        console.log($(this).data('counter'));
        if (currentVideo == 0) {
          currentVideo = 7;
        } else {
          currentVideo--;
        }
      } else {
        if (currentVideo == 0) {
          currentVideo = 7;
        } else {
          currentVideo--;
        }
      }
      for (var i = shopMovies.length-1; i > -1; i--) {
        if (shopMovies.data('title') == shopMoviesList[i].title) {
          movieCarouselIframe.attr('src', 'https://www.youtube.com/embed/' + shopMoviesList[currentVideo].youtube);
          movieCarouselTitle.text(shopMoviesList[currentVideo].title);
          movieCarouselDescription.text(shopMoviesList[currentVideo].overview);
          movieCarouselDate.text(shopMoviesList[currentVideo].release_year);
          if (shopMoviesList[currentVideo].genre_ids == 53) {
            movieCarouselGenre.text('Thriller');
          } else if (shopMoviesList[currentVideo].genre_ids == 878) {
            movieCarouselGenre.text('Sci-Fi');
          } else if (shopMoviesList[currentVideo].genre_ids == 28) {
            movieCarouselGenre.text('Action');
          } else if (shopMoviesList[currentVideo].genre_ids == 18) {
            movieCarouselGenre.text('Drama');
          }
        }
      }
    })

	// FOOTER MOVIES LATEST MOVIES
    let latestMovies = $('#latestMovies div');
    let latestMoviesImg = $('#latestMovies img');
    let latestMoviesTitle = $('#latestMovies p');

    latestMovies.attr('data-toggle', 'modal');
    latestMovies.attr('data-target', '#exampleModalCenter');

    let times = 0;

    for(let r = 0, length1 = latestMovies.length; r < length1; r++){
        latestMoviesTitle[r].textContent = film[times].title;
        latestMoviesImg[r].src = 'http://image.tmdb.org/t/p/w185' + film[times].backdrop_path;
        latestMovies[r].id = film[times].id; // CREATE ID FOR EACH ARTICLE CREATED
        times++;
    }

    for(let i = 0, length1 = latestMovies.length; i < length1; i++){
  		latestMovies[i].addEventListener('click', function() {
  			for(let j = 0, length1 = film.length; j < length1; j++){
  				if (latestMovies[i].id == film[j].id) {
  					$('#trailerModalVideo').attr('src', 'https://www.youtube.com/embed/'+ film[j].youtube);
  					$('#trailerModalTitle').text(film[j].title);
  					$('#trailerModalYear').text(film[j].release_year);
  					$('#trailerModalImg').attr('src', 'http://image.tmdb.org/t/p/w185' + film[j].poster_path);
  					$('#trailerModalDescription').text(film[j].overview);
  					for(let k = 0, length1 = film[j].genre_ids.length; k < length1; k++){
  						if (film[j].genre_ids[k] == 28) {
  							$('#trailerModalGenre').text('Action');
  							console.log('Action');
  						} else if (film[j].genre_ids[k] == 53) {
  							$('#trailerModalGenre').text('Thriller');
  							console.log('Thriller');
  						} else if (film[j].genre_ids[k] == 878) {
  							$('#trailerModalGenre').text('Sci-Fi');
  							console.log('Sci-Fi');
  						}
  					}
  				}
  			}
  		})
	  }

    // FOOTER MOVIES ALLEZCINE
    let footerAllezcine = $('#footerAllezcine div');
    let footerAllezcineImg = $('#footerAllezcine img');

    footerAllezcine.attr('data-toggle', 'modal');
    footerAllezcine.attr('data-target', '#exampleModalCenter');

	  let randomImage = Math.floor(Math.random()*24);

    for(let m = 0, length1 = footerAllezcine.length; m < length1; m++){
        footerAllezcineImg[m].src = 'http://image.tmdb.org/t/p/w185' + film[randomImage].poster_path;
        footerAllezcine[m].id = film[randomImage].id; // CREATE ID FOR EACH ARTICLE CREATED
        randomImage++;
    }

    for(let i = 0, length1 = footerAllezcine.length; i < length1; i++){
  		footerAllezcine[i].addEventListener('click', function() {
  			for(let j = 0, length1 = film.length; j < length1; j++){
  				if (footerAllezcine[i].id == film[j].id) {
  					$('#trailerModalVideo').attr('src', 'https://www.youtube.com/embed/'+ film[j].youtube);
  					$('#trailerModalTitle').text(film[j].title);
  					$('#trailerModalYear').text(film[j].release_year);
  					$('#trailerModalImg').attr('src', 'http://image.tmdb.org/t/p/w185' + film[j].poster_path);
  					$('#trailerModalDescription').text(film[j].overview);
  					for(let k = 0, length1 = film[j].genre_ids.length; k < length1; k++){
  						if (film[j].genre_ids[k] == 28) {
  							$('#trailerModalGenre').text('Action');
  							console.log('Action');
  						} else if (film[j].genre_ids[k] == 53) {
  							$('#trailerModalGenre').text('Thriller');
  							console.log('Thriller');
  						} else if (film[j].genre_ids[k] == 878) {
  							$('#trailerModalGenre').text('Sci-Fi');
  							console.log('Sci-Fi');
  						}
  					}
  				}
  			}
  		})
	  }

    // TOP TRENDS
    let topTrends = $('#topTrends .card');
    let topTrendsImg = $('#topTrends img');
    let topTrendsTitle = $('#topTrends .card-title');
    let topTrendsText = $('#topTrends .card-text');

    topTrends.attr('data-toggle', 'modal');
    topTrends.attr('data-target', '#exampleModalCenter');

    for(let c = 0, length1 = topTrends.length; c < length1; c++){
        topTrendsImg[c].src = 'http://image.tmdb.org/t/p/w185' + film[randomImage].poster_path;
        topTrendsTitle[c].textContent = film[randomImage].title;
        topTrendsText[c].textContent = film[randomImage].release_year;
        topTrends[c].id = film[randomImage].id; // CREATE ID FOR EACH ARTICLE CREATED
        randomImage++;
    }

    for(let i = 0, length1 = topTrends.length; i < length1; i++){
  		topTrends[i].addEventListener('click', function() {
  			for(let j = 0, length1 = film.length; j < length1; j++){
  				if (topTrends[i].id == film[j].id) {
  					$('#trailerModalVideo').attr('src', 'https://www.youtube.com/embed/'+ film[j].youtube);
  					$('#trailerModalTitle').text(film[j].title);
  					$('#trailerModalYear').text(film[j].release_year);
  					$('#trailerModalImg').attr('src', 'http://image.tmdb.org/t/p/w185' + film[j].poster_path);
  					$('#trailerModalDescription').text(film[j].overview);
  					for(let k = 0, length1 = film[j].genre_ids.length; k < length1; k++){
  						if (film[j].genre_ids[k] == 28) {
  							$('#trailerModalGenre').text('Action');
  							console.log('Action');
  						} else if (film[j].genre_ids[k] == 53) {
  							$('#trailerModalGenre').text('Thriller');
  							console.log('Thriller');
  						} else if (film[j].genre_ids[k] == 878) {
  							$('#trailerModalGenre').text('Sci-Fi');
  							console.log('Sci-Fi');
  						}
  					}
  				}
  			}
  		})
	  }

    // LAUNCH MOVIE TRAILER ON CLICK
    for(let i = 0, length1 = fillCard.length; i < length1; i++){
  		fillCard[i].addEventListener('click', function() {
  			for(let j = 0, length1 = film.length; j < length1; j++){
  				if (fillCard[i].id == film[j].id) {
  					$('#trailerModalVideo').attr('src', 'https://www.youtube.com/embed/'+ film[j].youtube);
  					$('#trailerModalTitle').text(film[j].title);
  					$('#trailerModalYear').text(film[j].release_year);
  					$('#trailerModalImg').attr('src', 'http://image.tmdb.org/t/p/w185' + film[j].poster_path);
  					$('#trailerModalDescription').text(film[j].overview);
  					for(let k = 0, length1 = film[j].genre_ids.length; k < length1; k++){
  						if (film[j].genre_ids[k] == 28) {
  							$('#trailerModalGenre').text('Action');
  							console.log('Action');
  						} else if (film[j].genre_ids[k] == 53) {
  							$('#trailerModalGenre').text('Thriller');
  							console.log('Thriller');
  						} else if (film[j].genre_ids[k] == 878) {
  							$('#trailerModalGenre').text('Sci-Fi');
  							console.log('Sci-Fi');
  						}
  					}
  				}
  			}
  		})
	  }
}


// TV SERIES
var requestSeriesURL = "https://quentinclaes.github.io/allezcine/tvshow.json";
var requestSeries = new XMLHttpRequest();
requestSeries.open('GET', requestSeriesURL);
requestSeries.responseType = 'json';
requestSeries.send();

requestSeries.onload = function() {
    var superHeroesSeries = requestSeries.response;
    showSeries(superHeroesSeries);
}

function showSeries(jsonObj) {
    let film = jsonObj['results'];

    let fillCard = $('#tvSeriesAll .card');
    let fillImg = $('#tvSeriesAll .card-img-top');
    let fillTitle = $('#tvSeriesAll .card-title');
    let fillText = $('#tvSeriesAll .card-text');

    let counter = 0;

    for(let i = 0, length1 = fillCard.length; i < length1; i++){
        fillTitle[i].textContent = film[counter].original_name;
        fillText[i].textContent = film[counter].first_air_year;
        fillImg[i].src = 'http://image.tmdb.org/t/p/w185' + film[counter].poster_path;
        fillCard[i].id = film[counter].id; // CREATE ID FOR EACH CARD CREATED
        counter++;
    }

    // FILTER ALL TV SERIES
    $('#btn-all-series').on('click',function(){
        comedyClicked = false;
        dramaClicked = false;
        adventureClicked = false;
        fillCard.show();
        $("#tvSeriesInvisible").hide();
    })

    // FILTER COMEDY SERIES
    let comedyClicked = false;
    $('#btn-comedy').on('click',function(e){
        dramaClicked = false;
        adventureClicked = false;
        fillCard.show();
        comedyClicked = true;
        let notComedy = [];
        for (var i = 0; i < jsonObj['results'].length; i++) {
            if (jsonObj['results'][i]['genre_ids'].indexOf(35) === -1) {
                notComedy.push(jsonObj['results'][i]);
            }
        }
        // console.log(notComedy);
        for(let i = 0, length1 = notComedy.length; i < length1; i++){
            for(let j = 0, length1 = fillCard.length; j < length1; j++){
                if (fillCard[j].id == notComedy[i].id) {
                    fillCard[j].style.display = 'none';
                }
            }
        }
        $("#tvSeriesInvisible").show();
    })

    // FILTER DRAMA SERIES (number 18)
    let dramaClicked = false; // TO BE USED LATER BELOW IN SHOW MORE/LESS BUTTON CODE
    $('#btn-drama').on('click',function(e){
        comedyClicked = false;
        adventureClicked = false;
        fillCard.show();
        dramaClicked = true; // TO BE USED LATER BELOW IN SHOW MORE/LESS BUTTON CODE
        let notDrama = [];
        for (var i = 0; i < jsonObj['results'].length; i++) {
            if (jsonObj['results'][i]['genre_ids'].indexOf(18) === -1) {
                notDrama.push(jsonObj['results'][i]);
            }
        }
        // console.log(notDrama);
        for(let i = 0, length1 = notDrama.length; i < length1; i++){
            for(let j = 0, length1 = fillCard.length; j < length1; j++){
                if (fillCard[j].id == notDrama[i].id) {
                    fillCard[j].style.display = 'none';
                }
            }
        }
        $("#tvSeriesInvisible").show();
    })


    // FILTER ADVENTURE SERIES (number 10759)
    let adventureClicked = false; // TO BE USED LATER BELOW IN SHOW MORE/LESS BUTTON CODE
    $('#btn-adventure').on('click',function(e){
        comedyClicked = false;
        dramaClicked = false;
        fillCard.show();
        adventureClicked = true; // TO BE USED LATER BELOW IN SHOW MORE/LESS BUTTON CODE
        let notAdventure = [];
        for (var i = 0; i < jsonObj['results'].length; i++) {
            if (jsonObj['results'][i]['genre_ids'].indexOf(10759) === -1) {
                notAdventure.push(jsonObj['results'][i]);
            }
        }
        // console.log(notAdventure);
        for(let i = 0, length1 = notAdventure.length; i < length1; i++){
            for(let j = 0, length1 = fillCard.length; j < length1; j++){
                if (fillCard[j].id == notAdventure[i].id) {
                    fillCard[j].style.display = 'none';
                }
            }
        }
        $("#tvSeriesInvisible").show();
    })


    // HIDE INVISIBLE MOVIES
    $("#tvSeriesInvisible").hide();

    // SHOW MORE/LESS BUTTON
    let tvSeriesButtonClicked = false;
    $('#tvSeriesButton').on('click', function(e) {
        if (comedyClicked == true || dramaClicked == true || adventureClicked == true) {
            e.preventDefault();
        } else {
            if (tvSeriesButtonClicked == false) {
                $("#tvSeriesInvisible").slideDown( "slow", function() {
                    $(this).show();
                });
                $(this).text('SHOW LESS');
                tvSeriesButtonClicked = true;
            } else {
                $("#tvSeriesInvisible").slideUp( "slow", function() {
                    $(this).hide();
                })
                $(this).text('MORE TV SERIES');
                tvSeriesButtonClicked = false;
            }
        }
    })

    // LAUNCH TV SERIES TRAILER ON CLICK
    for(let i = 0, length1 = fillCard.length; i < length1; i++){
  		fillCard[i].addEventListener('click', function() {
  			for(let j = 0, length1 = film.length; j < length1; j++){
  				if (fillCard[i].id == film[j].id) {
  					$('#trailerModalVideo').attr('src', 'https://www.youtube.com/embed/'+ film[j].youtube);
  					$('#trailerModalTitle').text(film[j].name);
  					$('#trailerModalYear').text(film[j].first_air_year);
  					$('#trailerModalImg').attr('src', 'http://image.tmdb.org/t/p/w185' + film[j].poster_path);
  					$('#trailerModalDescription').text(film[j].overview);
  					for(let k = 0, length1 = film[j].genre_ids.length; k < length1; k++){
  						if (film[j].genre_ids[k] == 35) {
  							$('#trailerModalGenre').text('Comedy');
  							console.log('Comedy');
  						} else if (film[j].genre_ids[k] == 18) {
  							$('#trailerModalGenre').text('Drama');
  							console.log('Drama');
  						} else if (film[j].genre_ids[k] == 10759) {
  							$('#trailerModalGenre').text('Adventure');
  							console.log('Adventure');
  						}
  					}
  				}
  			}
  		})
	  }

}
