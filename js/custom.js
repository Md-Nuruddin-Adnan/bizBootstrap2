$(window, document, undefined).ready(function() {

  $('.contact input').blur(function() {
    var $this = $(this);
    if ($this.val())
      $this.addClass('used');
    else
      $this.removeClass('used');
  });


 



});