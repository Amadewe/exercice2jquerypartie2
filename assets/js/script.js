// Au double clic, modifier la largeur de l'image à 500px.
$(document).ready(function(){
  $('#image').dblclick(function() {
    $(this).width('500px');
  });
});
