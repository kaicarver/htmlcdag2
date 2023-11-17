$(document).ready(function () {
  console.log($('#paraTest').text())
  console.log($('#paraTest').html())
  console.log($("#inputText").val())
  console.log($('#imgpicsum').attr('src'))
  $('#ecrire').text('coucou')
  $('#ecrire').html('coucou <em>monde</em>')
  $("#inputText").val('cou cou')
  $("#lepara2").text("TEXT: " + $("#lepara").text() + " HTML: " + $("#lepara").html())

});