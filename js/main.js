var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
        delay: 1000,
      },
    coverflowEffect: {
      rotate: 30,
      stretch: 1,
      depth: 100,
      modifier: 1,
      slideShadows: true,
      scale: .75,
      
    },

 
  });


  $(document).ready(function(){
    $(".reviewslider").owlCarousel(

       {

        items: 1,
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,

     
       }
    );
  });


