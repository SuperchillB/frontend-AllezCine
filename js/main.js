// SIGN UP MODAL
$('#signUpContainer').hide();
$('#hidingDiv').hide();

$('#signUpStartBtn').on('click', function() {
	$('#hidingDiv').show();
	$('#signUpContainer').show();
})

$('#signUpCancel').on('click', function(){
	$('#hidingDiv').hide();
	$('#signUpContainer').hide();
})

// $('#signUpBtn').on('click', function(e){
// 	if (condition) {
// 		// statement
// 	}
// })

// IN FORM: CODE OWN REQUIREMENTS


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
