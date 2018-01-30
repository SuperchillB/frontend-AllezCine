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
        'scrollTop': $(target).offset().top + (-50)
      }, 600, 'swing');
    });
});
