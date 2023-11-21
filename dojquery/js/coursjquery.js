$(document).ready(function () {
    $(function () {
        $("#draggable").draggable();
        $("#droppable").droppable({
            drop: function (event, ui) {
                $(this)
                    .addClass("ui-state-highlight")
                    .find("p")
                    .html("Déposé !");
            }
        });
        $("#sortable").sortable();
        $("#sortable").disableSelection();
    });

    $("#containerAccordeon").accordion({
        animate: 750
    });

    $("#acc2").accordion();
    $("#acc2").resizable();

    var listeAnimaux = [
        "Chien",
        "Chat",
        "Tortue",
        "Python",
        "Corbeau",
      ];
      $( "#animaux" ).autocomplete({
        source: listeAnimaux
      });
})