// AGE CONFIRMATION

// $('#confirmAgeContainer').show();
// $('#hidingDiv').show();

// $('#confirmAgeBtn').on('click', function() {
// 	$('#hidingDiv').hide();
// 	$('#confirmAgeContainer').hide();
// })

// $('#signUpCancel').on('click', function(){
// 	$('#hidingDiv').hide();
// 	$('#confirmAgeContainer').hide();
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
	if ($(this).scrollTop() > 400) {
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
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

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

//
// let apikey = "908e84944eac33ec8410b6162aa0f393"



var titre = document.querySelector('#titre');
var section = document.querySelector('section');




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

  for(var i = 0; i < 12; i++) {

		let myArticle = document.createElement('article');
		let myH2 = document.createElement('h5');
		let myPara1 = document.createElement('p');
		let myPara2 = document.createElement('p');
		// let myPara3 = document.createElement('p');
		// let myList = document.createElement('ul');
		let myimg = document.createElement('img');
    myH2.textContent = film[i].title;
    // myPara1.textContent = 'Overview: ' + film[i].overview;
    myPara2.textContent = film[i].release_date;
    // myPara3.textContent = 'Superpowers:';
    myimg.src ='http://image.tmdb.org/t/p/w185' + film[i].backdrop_path;

		$("#filmMoviesVisible").addClass("filmFlex");
		myArticle.classList.add("articleBox")
    myArticle.appendChild(myimg);
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    // myArticle.appendChild(myPara3);

    // myArticle.appendChild(myList);

    // section.appendChild(myArticle);
		// $("#topTrends").append(myArticle);

		$("#filmMoviesVisible").append(myArticle);
		// $("#featuredTvSeries").append(myArticle);
    myArticle.id = film[i].id; // CREATE ID FOR EACH ARTICLE CREATED


  }

	for(var i = 12; i < film.length; i++) {

		let myArticle = document.createElement('article');
		let myH2 = document.createElement('h5');
		let myPara1 = document.createElement('p');
		let myPara2 = document.createElement('p');
		// let myPara3 = document.createElement('p');
		// let myList = document.createElement('ul');
		let myimg = document.createElement('img');
    myH2.textContent = film[i].title;
    // myPara1.textContent = 'Overview: ' + film[i].overview;
    myPara2.textContent = film[i].release_date;
    // myPara3.textContent = 'Superpowers:';
    myimg.src ='http://image.tmdb.org/t/p/w185' + film[i].backdrop_path;

		$("#filmMoviesInvisible").addClass("filmFlex");
		myArticle.classList.add("articleBox")
    myArticle.appendChild(myimg);
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    // myArticle.appendChild(myPara3);

    // myArticle.appendChild(myList);

    // section.appendChild(myArticle);
		// $("#topTrends").append(myArticle);

		$("#filmMoviesInvisible").append(myArticle);
		// $("#featuredTvSeries").append(myArticle);
    myArticle.id = film[i].id; // CREATE ID FOR EACH ARTICLE CREATED

		$("#filmMoviesInvisible").hide();

  }

	$('#moviesButton').on('click', function() {
		$("#filmMoviesInvisible").show();
	})



  $('#btn-action').on('click',function(){
    let notAction = [];

    for (var i = 0; i < jsonObj['results'].length; i++) {
      if (jsonObj['results'][i]['genre_ids'].indexOf(28) === -1) {
        notAction.push(jsonObj['results'][i]);
      }
    }
    console.log(notAction);
    // console.log(notAction[0].id);
    // console.log(document.getElementsByTagName('article')[0].id);
		let noAction12 = notAction.slice(0, 12);
		console.log(noAction12)

		for(let i = 0, length1 = notAction.length; i < length1; i++){
			let moviesAll = $('#moviesAll').find("article");
			$("#filmMoviesInvisible").show();
			let k = 12;
      for(let j = 0, length1 = moviesAll.length; j < length1; j++){
        if (moviesAll[j].id == notAction[i].id) {
           moviesAll[j].style.display = 'none';
        }
      }

			// for (var k = 12; k < $("#filmMoviesInvisible").length; k++) {
			// 	document.getElementsByTagName('article:nth-of-type(k)').style.display = 'none';
      //
      //
			// }
			// for(let j = 0, length1 = document.getElementsByTagName('article').length; j < length1; j++){
      //   if (document.getElementsByTagName('article')[j].id == notAction[i].id) {
      //      document.getElementsByTagName('article')[j].style.display = 'none';
      //   }
      //
      // }
    }
  })
}
