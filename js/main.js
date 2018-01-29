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

// $('#signUpBtn').on('click', function(e){
// 	if (condition) {
// 		// statement
// 	}
// })

// ==> IN FORM: CODE OWN REQUIREMENTS


// LOGIN MODAL
$('#loginContainer').hide();

$('#loginStartButton').on('click', function() {
	$('#hidingDiv').show();
	$('#loginContainer').show();
})

$('#loginCancel').on('click', function() {
	$('#hidingDiv').hide();
	$('#loginContainer').hide();
})

$('#loginSignUp').on('click', function() {
	$('#loginContainer').hide();
	$('#signUpContainer').show();
	$('#hidingDiv').show();
})


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
