
$(document).ready(function() {

      //Start Mean Menue popup
      $('#mobile-menu').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.mobile-menu',
      });
      //Mean Menue popup End 
	  
	  
    //Slider-Active
   $('.slider-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
     navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        responsive: {
          0: {
            items: 1,

          },
          500: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
      
	 
	

  });