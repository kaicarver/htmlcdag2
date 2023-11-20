$(document).ready(function () {
  $('#extra').hide()
  $('#butt').click(function () {
    $('#extra').toggle()
    if ($('#butt').text() == '-')
      $('#butt').text('+')
    else
      $('#butt').text('-')
  })
});