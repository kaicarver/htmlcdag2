$(document).ready(function () {
  $('#extra').hide()
  $('#butt').click(function () {
    $('#extra').toggle()
    if ($('#butt').text() == '-')
      $('#butt').text('+')
    else
      $('#butt').text('-')
  })
  $('#butt2').click(function () {
    $('#extra').slideToggle()
    if ($('#butt2').text() == '-')
      $('#butt2').text('+')
    else
      $('#butt2').text('-')
  })


});