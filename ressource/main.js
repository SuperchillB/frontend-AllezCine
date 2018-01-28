    //
    // let apikey = "908e84944eac33ec8410b6162aa0f393"
    // let ajax = new XMLHttpRequest();
    //     // the action the we will do when the request is finshed
    //     let whenDataLoaded = function(){
    //       let dataText = ajax.responseText;
    //       let dataObject = JSON.parse(dataText);
    //       console.log(dataObject);
    //         console.log(dataObject.results) ;
    //
    //     }
    //     ajax.onload = whenDataLoaded;
    //     // the type, the url, asynchronous ?
    //     ajax.open("GET", "http://api.themoviedb.org/3/discover/movie?page=1&vote_count.gte=1000&vote_average.gte=8&sort_by=popularity.desc&api_key=908e84944eac33ec8410b6162aa0f393", true);
    //     // sed the request
    //     ajax.send(null);

    var titre = document.querySelector('#titre');
    var section = document.querySelector('section');



    var requestURL = "http://api.themoviedb.org/3/discover/movie?page=1&vote_count.gte=1000&vote_average.gte=8&sort_by=popularity.desc&api_key=908e84944eac33ec8410b6162aa0f393";
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
      var superHeroes = request.response;
      populateHeader(superHeroes);
      showFilm(superHeroes);
    }

    function populateHeader(jsonObj) {
      var myH1 = document.createElement('h1');
      // myH1.textContent = 'Nombre de film trouvé dans ma requette API  ' + jsonObj['total_results'] + ' // repartit en : ' + jsonObj['total_pages'] + ' pages';
      myH1.textContent = 'Featured Movies';
      titre.appendChild(myH1);



    }

    function showFilm(jsonObj) {
      var film = jsonObj['results'];

      for(var i = 0; i < film.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');
        var myimg = document.createElement('img');

        myH2.textContent = film[i].title;
        // myPara1.textContent = 'Overview: ' + film[i].overview;
        myPara2.textContent = film[i].release_date;
        // myPara3.textContent = 'Superpowers:';
        myimg.src ='http://image.tmdb.org/t/p/w185' + film[i].backdrop_path;

        // var superPowers = film[i].genre_ids;
        // for(var j = 0; j < superPowers.length; j++) {
        //   var listItem = document.createElement('li');
        //   k = idtogenre(superPowers[j]);
        //   listItem.textContent = k ;
        //   myList.appendChild(listItem);
        //   console.log(superPowers[j]);
        // }
        myArticle.appendChild(myimg);
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);

        myArticle.appendChild(myList);

        section.appendChild(myArticle);
      }
    }
// 
// function idtogenre(id) {
//     if (id=18) {
//       genre = 'action'
//     }
//     else {
//       genre = id
//     }
//     return genre
// }
//
// x = idtogenre(18);
// console.log(x);
