let requestURLCarousel = "https://quentinclaes.github.io/allezcine/movie.json";
// var item = document.querySelector('.item');
let requestCarousel = new XMLHttpRequest();

requestCarousel.open('GET', requestURLCarousel);
requestCarousel.responseType = 'json';
requestCarousel.send();

requestCarousel.onload = function() {
  let superHeroes = requestCarousel.response;
  imgMovie(superHeroes);

}

function imgMovie(jsonObj) {
  let film = jsonObj['results'];

  for (var i = 0; i < 4; i++) {
    let item = document.createElement('div');
    item.classList.add("item");
    let myId = document.querySelector('#myImg');
    let randomFilm = Math.floor(Math.random() * 36);
    let myimg = document.createElement('img');
    let name = document.createElement('p');

    // name.dataset.filmName = film[randomFilm].title;
    // name.dataset.toggle = 'modal';
    // name.dataset.target = '#exampleModalCenter';

    name.innerHTML = film[randomFilm].title;
    name.style.display = 'none';film[randomFilm].title;

    myimg.src = 'http://image.tmdb.org/t/p/w1280' + film[randomFilm].backdrop_path;
    myimg.style.width = '100%';
    // myimg.style.height = '100%';
    myimg.style.opacity = '0.5';
    item.appendChild(myimg);
    myId.appendChild(item);
    item.appendChild(name);
  }

  $('.single-item').slick({
    autoplay: true,
    autoplaySpeed: 2000,
  });


  // let carouselTrailerBtn = $('#carouselTrailerBtn')
  //
  // carouselTrailerBtn.on('click', function() {
  //   let film = jsonObj['results'];
  //   let myId = $('#myImg p').data('FilmName');
  //
  //   for(let i = 0, length1 = $('#myImg p').length; i < length1; i++){
  //     for(let j = 0, length1 = film.length; j < length1; j++){
  //       if ($('#myImg p').text() == film[j].title) {
  //         $('#trailerModalVideo').attr('src', 'https://www.youtube.com/embed/'+ film[j].youtube);
  //         $('#trailerModalTitle').text(film[j].name);
  //         $('#trailerModalYear').text(film[j].first_air_year);
  //         $('#trailerModalImg').attr('src', 'http://image.tmdb.org/t/p/w185' + film[j].poster_path);
  //         $('#trailerModalDescription').text(film[j].overview);
  //         for(let k = 0, length1 = film[j].genre_ids.length; k < length1; k++){
  //           if (film[j].genre_ids[k] == 35) {
  //             $('#trailerModalGenre').text('Comedy');
  //             console.log('Comedy');
  //           } else if (film[j].genre_ids[k] == 18) {
  //             $('#trailerModalGenre').text('Drama');
  //             console.log('Drama');
  //           } else if (film[j].genre_ids[k] == 10759) {
  //             $('#trailerModalGenre').text('Adventure');
  //             console.log('Adventure');
  //           }
  //         }
  //       }
  //     }
  //   }
  // })
}
