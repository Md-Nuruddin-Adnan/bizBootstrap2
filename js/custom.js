$(window, document, undefined).ready(function() {

  $('.contact input').blur(function() {
    let $this = $(this);
    if ($this.val())
      $this.addClass('used');
    else
      $this.removeClass('used');
  });


  // industry-leading-slider start
  $('.industry-leading-slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><i class="far fa-long-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="far fa-long-arrow-right"></i></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '80px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '60px',
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  // industry-leading-slider end


  // testi-comment-slider start
  $('.testi-comment-slider').slick({
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="far fa-long-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="far fa-long-arrow-right"></i></button>',
  });
  // testi-comment-slider end
  
  
 



});