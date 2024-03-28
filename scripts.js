$('.card1').on('click', function () {
    var artist = $(this).data('artist')

    $('#column-right').empty()

if (artist === 'reese') {
    $('#column-right').css('background-image', 'url("https://allcitycandy.com/cdn/shop/products/Screenshot2022-05-03121457_2048x.jpg?v=1651854655")')
}
})

$('.card3').on('click', function () {
    var artist = $(this).data('artist')

    $('#column-right').empty()
   
    if (artist === 'peanut') {
    $('#column-right').css('background-image', 'url("https://m.media-amazon.com/images/I/51gPmq+HigL._QL92_SH45_SS200_.jpg")')
}
})

  
$('.card2').on('click', function () {
    var artist = $(this).data('artist')

    $('#column-right').empty()
   
    if (artist === 'crunch') {
    $('#column-right').css('background-image', 'url("https://m.media-amazon.com/images/I/61WL+Wx3J4L._AC_.jpg")')
}
})





$('.card3').on('click', function() {
$('body').css('background-color', '#FDD835')
})

$('.card2').on('click', function() {
$('body').css('background-color', '#1a1aff')
})

$('.card1').on('click', function() {
$('body').css('background-color', '#fe5200')
})