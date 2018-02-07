
// BIOGRAPHY HIDDEN
$('.Moore').hide();
$('.Brosnan').hide();
$('.Dalton').hide();
$('.Craig').hide();

//BIOGRAPHY TOGGLE

$('#biographyBond h4').on('click', function() {
  $('.bioBond').slideToggle("slow");
  $('#biographyArrowBond').toggleClass('biographyRotate');
})

$('.biographyConnery').on('click', function() {
  $('.Connery').slideToggle("slow");
  $('#biographyArrowConnery').toggleClass('biographyRotate');
})

$('.biographyBrosnan').on('click', function() {
  $('.Brosnan').slideToggle("slow");
  $('#biographyArrowBrosnan').toggleClass('biographyRotate');
})

$('.biographyCraig').on('click', function() {
  $('.Craig').slideToggle("slow");
  $('#biographyArrowCraig').toggleClass('biographyRotate');
})

$('.biographyMoore').on('click', function() {
  $('.Moore').slideToggle("slow");
  $('#biographyArrowMoore').toggleClass('biographyRotate');
})

$('.biographyDalton').on('click', function() {
  $('.Dalton').slideToggle("slow");
  $('#biographyArrowDalton').toggleClass('biographyRotate');
})

$('.biographyLazenby').on('click', function() {
  $('.Lazenby').slideToggle("slow");
  $('#biographyArrowLazenby').toggleClass('biographyRotate');
})

$('.cursorPointer').hover(function() {
  $(this).css('cursor', 'pointer')
})


// CONTACT US

let contactName = $('#contactName');
let contactEmail = $('#contactEmail');
let contactSubject = $('#contactSubject');
let contactMessage = $('#contactMessage');
let contactError = $('#contactError');

let contactInput = $('input').val();
let contactMessageInput = $('textarea').val();

contactError.hide();

$('#contactSubmit').on('click', function() {
  if (contactName.val() == "") {
    contactName.css('outline', '1px solid red');
    contactError.show();
  };
  if (contactEmail.val() == "") {
    contactEmail.css('outline', '1px solid red');
    contactError.show();
  };
  if (contactSubject.val() == "") {
    contactSubject.css('outline', '1px solid red');
    contactError.show();
  };
  if (contactMessage.val() == "") {
    contactMessage.css('outline', '1px solid red');
    contactError.show();
  };
})

$('#contactName').on('input', function() {
  contactName.css('outline', 'none');
})

$('#contactEmail').on('input', function() {
  let emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;
  if(emailReg.test(contactEmail.val()) == true) {
    contactEmail.css('outline', 'none');
  }
})

$('#contactSubject').on('input', function() {
  contactSubject.css('outline', 'none');
})

$('#contactMessage').on('input', function() {
  contactMessage.css('outline', 'none');
})






// let backgroundContact = ['img/bg-connery.jpg', 'img/bg-brosnan.jpg', 'img/bg-craig.jpg', 'img/bg-dalton.jpg', 'img/bg-moore.jpg', 'img/bg-lazenby.jpg']
// let bgContact = $('#bgContact')
// let n = backgroundContact.length
// let counter = 0;
// //
// for (var i = 0; i < n; i++) {
//   let tImg = new Image();
//   tImg.src = backgroundContact[i];
// }
//
// bgContact.css({backgroundImage : "url("+backgroundContact[counter]+")"});
//
// function loopBg() {
//   bgContact.hide().css({backgroundImage : "url("+backgroundContact[++counter%n]+")"}).delay(2000).fadeTo(1200, 1, function() {
//     bgContact.css({backgroundImage : "url("+backgroundContact[counter%n]+")"});
//     loopBg();
//   })
// }

// DURING WORK

// $('#biography').hide()
// $('#contactUs').hide()
