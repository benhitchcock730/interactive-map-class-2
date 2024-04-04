$('.card1').on('click', function () {
    var artist = $(this).data('artist')

    $('#column-right').empty()

if (artist === 'reese') {
    $('#column-right').css('background-image', 'url("https://allcitycandy.com/cdn/shop/products/Screenshot2022-05-03121457_2048x.jpg?v=1651854655")')
    $('body').css('background-color', '#fe5200')
    $('.card1').css('font-style', 'italic') 
    $('.card2').css('font-style', 'normal')
    $('.card3').css('font-style', 'normal')
    // I created a sort of active state by doing this but not sure if it's the most efficient way
}
})

  
$('.card2').on('click', function () {
    var artist = $(this).data('artist')

    $('#column-right').empty()
   
    if (artist === 'crunch') {
    $('#column-right').css('background-image', 'url("https://m.media-amazon.com/images/I/61WL+Wx3J4L._AC_.jpg")')
    $('body').css('background-color', 'hsl(208, 100%, 55%)')
    $('.card1').css('font-style', 'normal')
    $('.card2').css('font-style', 'italic')
    $('.card3').css('font-style', 'normal') 
}
})


$('.card3').on('click', function () {
    var artist = $(this).data('artist')

    $('#column-right').empty()
   
    if (artist === 'peanut') {
    $('#column-right').css('background-image', 'url("https://m.media-amazon.com/images/I/51gPmq+HigL._QL92_SH45_SS200_.jpg")')
    $('body').css('background-color', '#FDD835')
    $('.card1').css('font-style', 'normal')
    $('.card2').css('font-style', 'normal')
    $('.card3').css('font-style', 'italic')
}
})



