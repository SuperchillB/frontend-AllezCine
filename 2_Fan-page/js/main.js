
// BIOGRAPHY HIDDEN
$('.biographyDescription').hide();

//BIOGRAPHY TOGGLE

$('#biographyBond h4').on('click', function() {
  $('.bioBond').slideToggle("slow")
})

$('.biographyConnery').on('click', function() {
  $('.Connery').slideToggle("slow")
})

$('.biographyBrosnan').on('click', function() {
  $('.Brosnan').slideToggle("slow")
})

$('.biographyCraig').on('click', function() {
  $('.Craig').slideToggle("slow")
})

$('.biographyMoore').on('click', function() {
  $('.Moore').slideToggle("slow")
})

$('.biographyDalton').on('click', function() {
  $('.Dalton').slideToggle("slow")
})

$('.biographyLazenby').on('click', function() {
  $('.Lazenby').slideToggle("slow")
})

$('.parallax-window').parallax({imageSrc: 'img/allBond.png'});
