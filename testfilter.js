
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


    myArticle.appendChild(myimg);
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);

    myArticle.appendChild(myList);

    section.appendChild(myArticle);
    myArticle.id = film[i].id; // CREATE ID FOR EACH ARTICLE CREATED


  }
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
    for(let i = 0, length1 = notAction.length; i < length1; i++){
      for(let j = 0, length1 = document.getElementsByTagName('article').length; j < length1; j++){
        if (document.getElementsByTagName('article')[j].id == notAction[i].id) {
           document.getElementsByTagName('article')[j].style.display = 'none';
        } 
         
      }
    }
  })

}