




































































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
// ==> IN FORM: CODE OWN REQUIREMENTS 