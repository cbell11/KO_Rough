$(document).ready(function(){
  $(".right").on("click", function(){
    $(".sidebar").toggleClass("show");
  });
  // Get the modal
  var modal = document.getElementById('id01');

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
  $(".logoContainer").on("mouseover", function () {

	$(".shine").animate({'left':'-5px', 'top' :'10px', "opacity":0},500)
	// $(".shine").animate({'opacity':1},100);
	$(".shine").delay(600).animate({ 'top': (226)+'px', 'left': (211)+'px', 'opacity' : 0},100).animate({'opacity':1});
})




});
