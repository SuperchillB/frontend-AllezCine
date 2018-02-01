
//FILMS

//
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
        fillImg[i].src = 'http://image.tmdb.org/t/p/w185' + film[counter].backdrop_path;
        fillCard[i].id = film[counter].id; // CREATE ID FOR EACH ARTICLE CREATED
        counter++;
    }

    // FILTER ALL MOVIES
    $('#btn-all').on('click',function(){
        fillCard.show();
        $("#filmMoviesInvisible").hide();
    })

    // FILTER ACTION MOVIES
    let actionClicked = false;
    $('#btn-action').on('click',function(e){
        fillCard.show();
        actionClicked = true;
        let notAction = [];
        for (var i = 0; i < jsonObj['results'].length; i++) {
            if (jsonObj['results'][i]['genre_ids'].indexOf(28) === -1) {
                notAction.push(jsonObj['results'][i]);
            }
        }
        console.log(notAction); // returns array of non action movies
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
        fillCard.show();
        thrillerClicked = true; // TO BE USED LATER BELOW IN SHOW MORE/LESS BUTTON CODE
        let notThriller = [];
        for (var i = 0; i < jsonObj['results'].length; i++) {
            if (jsonObj['results'][i]['genre_ids'].indexOf(53) === -1) {
                notThriller.push(jsonObj['results'][i]);
            }
        }
        console.log(notThriller);
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
        fillCard.show();
        sciFiClicked = true; // TO BE USED LATER BELOW IN SHOW MORE/LESS BUTTON CODE
        let notSciFi = [];
        for (var i = 0; i < jsonObj['results'].length; i++) {
            if (jsonObj['results'][i]['genre_ids'].indexOf(878) === -1) {
                notSciFi.push(jsonObj['results'][i]);
            }
        }
        console.log(notSciFi);
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
    // for(let i = 12, length1 = fillCard.length; i < length1; i++){
    //   fillCard[i].style.display = "none";
    // }

    // SHOW MORE/LESS BUTTON
    let moviesButtonClicked = false;
    let moviesBtn = $('#moviesButton');
    $('#moviesButton').on('click', function(e) {
        if (actionClicked == true) {
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







    // FOOTER MOVIES LATEST MOVIES
    let latestMovies = $('#latestMovies div');
    let latestMoviesImg = $('#latestMovies img');
    let latestMoviesTitle = $('#latestMovies p');

    let times = 0;

    for(let i = 0, length1 = latestMovies.length; i < length1; i++){
        latestMoviesTitle[i].textContent = film[times].title;
        latestMoviesImg[i].src = 'http://image.tmdb.org/t/p/w185' + film[times].backdrop_path;
        latestMovies[i].id = film[times].id; // CREATE ID FOR EACH ARTICLE CREATED
        times++;
    }


    // FOOTER MOVIES ALLEZCINE
    let footerAllezcine = $('#footerAllezcine div');
    let footerAllezcineImg = $('#footerAllezcine img');

    let counting = 0;

    let randomImage = Math.floor(Math.random()*30);

    for(let m = 0, length1 = footerAllezcine.length; m < length1; m++){
        footerAllezcineImg[m].src = 'http://image.tmdb.org/t/p/w185' + film[randomImage].backdrop_path;
        footerAllezcine[m].id = film[randomImage].id; // CREATE ID FOR EACH ARTICLE CREATED
        randomImage++;
    }
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
