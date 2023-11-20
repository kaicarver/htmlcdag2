$(document).ready(function () {
  $('#pref').hide()
  $('#butt').click(function () {
    $('#util').fadeOut()
    $('#pref').fadeIn()
  })
  $('#butt2').click(function () {
    $('#util').fadeIn()
    $('#pref').fadeOut()
  })
  $("#butt, #butt2").mouseover(function () {
    $(this).css("cursor", "pointer");
  });
});
