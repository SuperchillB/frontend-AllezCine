
// BIOGRAPHY HIDDEN
$('#biographyBond div').hide();
$('#biographyConnery div').hide();
$('#biographyBrosnan div').hide();
$('#biographyCraig div').hide();

//BIOGRAPHY TOGGLE

$('#biographyBond h4').on('click', function() {
  $('#biographyBond div').slideToggle("slow")
})

$('#biographyConnery h4').on('click', function() {
  $('#biographyConnery div').slideToggle("slow")
})

$('#biographyBrosnan h4').on('click', function() {
  $('#biographyBrosnan div').slideToggle("slow")
})

$('#biographyCraig h4').on('click', function() {
  $('#biographyCraig div').slideToggle("slow")
})
