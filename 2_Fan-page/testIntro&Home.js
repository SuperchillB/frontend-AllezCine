
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
    $('#enter-site').hide();
    setTimeout(function(){
        $('#enter-site').fadeIn();
    }, 11000);

    $('#homepage').hide();

    $('#enter-site').on('click', function() {
        $('#messengerContainer').animate({
            height: "10000",
            width: "10000",

        }, 'slow', function() {
            $('#pre-homepage').hide();
            $('#homepage').fadeIn();
        });
        // $('#messengerContainer').animate({'zoom':10}, '500');
        $(this).fadeOut('fast');
        $('#messenger').css('opacity', '0');
    })

    
});


 // ________________________ HOMEPAGE ________________________ 


// let grid2 = $('.homepage-container').masonry({
//     itemSelector: '.homepage-grid-item',
//     columnWidth: 200,
//     gutter: 10,
//     isFitWidth: true,
//     // horizontalOrder: true,
//     fitWidth: true // Toggle for container width
//     // percentPosition: true
// });

// grid2.imagesLoaded().progress(function() {
//     grid2.masonry();
// });

// NAVIGATION GRID (HOMEPAGE) CLICK EVENTS

$('.homepage-grid').masonry({
  itemSelector: '.homepage-grid-item',
  gutter: 10,
  // fitWidth: true,
  // isFitWidth: true,
  // columnWidth: 160
  columnWidth: 90
});

$('#homepage-movies').on('click', function(e) {
    $(this).zoomTo({targetsize: 5, duration: 600});
    e.stopPropagation();
    $('#homepage').fadeOut();
    // $('#pres-books, #pres-games, #biography, #photoGallery, #goodies, #contactUs').hide();
    // $('#presentation, #pres-movies').fadeIn();
    // $('.pres-title h1').text('Movies');
})
$('#homepage-books').on('click', function(e) {
    $(this).zoomTo({targetsize: 5, duration: 600});
    e.stopPropagation();
    $('#homepage').fadeOut();
    // $('#pres-movies, #pres-games, #biography, #photoGallery, #goodies, #contactUs').hide();
    // $('#presentation, #pres-books').show();
    // $('.pres-title h1').text('Books (Ian Flemming)');
})
$('#homepage-games').on('click', function(e) {
    $(this).zoomTo({targetsize: 5, duration: 600});
    e.stopPropagation();
    $('#homepage').fadeOut();
        // $('#pres-movies, #pres-books, #biography, #photoGallery, #goodies, #contactUs').hide();
        // $('#presentation, #pres-games').show();
        // $('.pres-title h1').text('Video Games');
})
$('#homepage-bio').on('click', function(e) {
    $(this).zoomTo({targetsize: 5, duration: 600});
    e.stopPropagation();
    $('#homepage').fadeOut();
        // $('#presentation, #pres-movies, #pres-books, #pres-games, #photoGallery, #goodies, #contactUs').hide();
        // $('#biography').show();
})
$('#homepage-photos').on('click', function(e) {
    $(this).zoomTo({targetsize: 5, duration: 600});
    e.stopPropagation();
    $('#homepage').fadeOut();
        // $('#presentation, #pres-movies, #pres-books, #pres-games, #biography, #goodies, #contactUs').hide();
        // $('#photoGallery').show();
})
$('#homepage-goodies').on('click', function(e) {
$(this).zoomTo({targetsize: 5, duration: 600});
    e.stopPropagation();
    $('#homepage').fadeOut();
        // $('#presentation, #pres-movies, #pres-books, #pres-games, #biography, #photoGallery, #contactUs').hide();
        // $('#goodies').show();
})
$('#homepage-contact').on('click', function(e) {
$(this).zoomTo({targetsize: 5, duration: 600});
    e.stopPropagation();
    $('#homepage').fadeOut();
        // $('#presentation, #pres-movies, #pres-books, #pres-games, #biography, #photoGallery, #goodies').hide();
        // $('#contactUs').show();
})


