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
        fillText[i].textContent = film[counter].release_date;
        fillImg[i].src = 'http://image.tmdb.org/t/p/w185' + film[counter].poster_path;
        fillCard[i].id = film[counter].id; // CREATE ID FOR EACH ARTICLE CREATED
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
    // OR
    // $('#moviesButton').on('click', function() {
    //   if (moviesButtonClicked == false) { 
    //     for(let i = 12, length1 = fillCard.length; i < length1; i++){
    //       fillCard[i].style.display = "block";
    //     }
    //     moviesBtn.text('SHOW LESS');
    //     moviesButtonClicked = true;
    //   } else {
    //     for(let i = 12, length1 = fillCard.length; i < length1; i++){
    //       fillCard[i].style.display = "none";
    //     }
    //     moviesBtn.text('MORE MOVIES');
    //     moviesButtonClicked = false;
    //   }
    // });
}


// // TV SERIES
// var requestSeriesURL = "https://quentinclaes.github.io/allezcine/tvshow.json";
// var requestSeries = new XMLHttpRequest();
// requestSeries.open('GET', requestSeriesURL);
// requestSeries.responseType = 'json';
// requestSeries.send();

// requestSeries.onload = function() {
//     var superHeroesSeries = requestSeries.response;
//     showSeries(superHeroesSeries);
// }

// function showSeries(jsonObj) {
//     let film = jsonObj['results'];

//     let fillCard = $('#moviesAll .card');
//     let fillImg = $('#moviesAll .card-img-top');
//     let fillTitle = $('#moviesAll .card-title');
//     let fillText = $('#moviesAll .card-text');

//     let counter = 0;

//     for(let i = 0, length1 = fillCard.length; i < length1; i++){
//         fillTitle[i].textContent = film[counter].title;
//         fillText[i].textContent = film[counter].release_date;
//         fillImg[i].src = 'http://image.tmdb.org/t/p/w185' + film[counter].backdrop_path;
//         fillCard[i].id = film[counter].id; // CREATE ID FOR EACH ARTICLE CREATED
//         counter++;
//     }

//     // FILTER ALL MOVIES
//     $('#btn-all').on('click',function(){
//         actionClicked = false;
//         thrillerClicked = false;
//         sciFiClicked = false;
//         fillCard.show();
//         $("#filmMoviesInvisible").hide();
//     })

//     // FILTER ACTION MOVIES
//     let actionClicked = false;
//     $('#btn-action').on('click',function(e){
//         thrillerClicked = false;
//         sciFiClicked = false;
//         fillCard.show();
//         actionClicked = true;
//         let notAction = [];
//         for (var i = 0; i < jsonObj['results'].length; i++) {
//             if (jsonObj['results'][i]['genre_ids'].indexOf(28) === -1) {
//                 notAction.push(jsonObj['results'][i]);
//             }
//         }
//         // console.log(notAction); // returns array of non action movies
//         for(let i = 0, length1 = notAction.length; i < length1; i++){
//             for(let j = 0, length1 = fillCard.length; j < length1; j++){
//                 if (fillCard[j].id == notAction[i].id) {
//                     fillCard[j].style.display = 'none';
//                 }
//             }
//         }
//         $("#filmMoviesInvisible").show();
//     })

//     // FILTER THRILLER MOVIES (number 53)
//     let thrillerClicked = false; // TO BE USED LATER BELOW IN SHOW MORE/LESS BUTTON CODE
//     $('#btn-thriller').on('click',function(e){
//         actionClicked = false;
//         sciFiClicked = false;
//         fillCard.show();
//         thrillerClicked = true; // TO BE USED LATER BELOW IN SHOW MORE/LESS BUTTON CODE
//         let notThriller = [];
//         for (var i = 0; i < jsonObj['results'].length; i++) {
//             if (jsonObj['results'][i]['genre_ids'].indexOf(53) === -1) {
//                 notThriller.push(jsonObj['results'][i]);
//             }
//         }
//         // console.log(notThriller); 
//         for(let i = 0, length1 = notThriller.length; i < length1; i++){
//             for(let j = 0, length1 = fillCard.length; j < length1; j++){
//                 if (fillCard[j].id == notThriller[i].id) {
//                     fillCard[j].style.display = 'none';
//                 }
//             }
//         }
//         $("#filmMoviesInvisible").show();
//     })


//     // FILTER SCI-FI MOVIES (number 878)
//     let sciFiClicked = false; // TO BE USED LATER BELOW IN SHOW MORE/LESS BUTTON CODE
//     $('#btn-scifi').on('click',function(e){
//         actionClicked = false;
//         thrillerClicked = false;
//         fillCard.show();
//         sciFiClicked = true; // TO BE USED LATER BELOW IN SHOW MORE/LESS BUTTON CODE
//         let notSciFi = [];
//         for (var i = 0; i < jsonObj['results'].length; i++) {
//             if (jsonObj['results'][i]['genre_ids'].indexOf(878) === -1) {
//                 notSciFi.push(jsonObj['results'][i]);
//             }
//         }
//         // console.log(notSciFi);
//         for(let i = 0, length1 = notSciFi.length; i < length1; i++){
//             for(let j = 0, length1 = fillCard.length; j < length1; j++){
//                 if (fillCard[j].id == notSciFi[i].id) {
//                     fillCard[j].style.display = 'none';
//                 }
//             }
//         }
//         $("#filmMoviesInvisible").show();
//     })


//     // HIDE INVISIBLE MOVIES
//     $("#filmMoviesInvisible").hide();

//     // SHOW MORE/LESS BUTTON
//     let moviesButtonClicked = false;
//     $('#moviesButton').on('click', function(e) {
//         if (actionClicked == true || thrillerClicked == true || sciFiClicked == true) {
//             e.preventDefault();
//         } else {
//             if (moviesButtonClicked == false) {
//                 $("#filmMoviesInvisible").slideDown( "slow", function() {
//                     $(this).show();
//                 });
//                 $(this).text('SHOW LESS');
//                 moviesButtonClicked = true;
//             } else {
//                 $("#filmMoviesInvisible").slideUp( "slow", function() {
//                     $(this).hide();
//                 })
//                 $(this).text('MORE MOVIES');
//                 moviesButtonClicked = false;
//             }
//         }
//     })
//     // OR
//     // $('#moviesButton').on('click', function() {
//     //   if (moviesButtonClicked == false) { 
//     //     for(let i = 12, length1 = fillCard.length; i < length1; i++){
//     //       fillCard[i].style.display = "block";
//     //     }
//     //     moviesBtn.text('SHOW LESS');
//     //     moviesButtonClicked = true;
//     //   } else {
//     //     for(let i = 12, length1 = fillCard.length; i < length1; i++){
//     //       fillCard[i].style.display = "none";
//     //     }
//     //     moviesBtn.text('MORE MOVIES');
//     //     moviesButtonClicked = false;
//     //   }
//     // });
// }
