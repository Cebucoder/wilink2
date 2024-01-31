
//   counter
function incrementCounter(counterElement, finalValue) {
    var currentCount = 0;

    function updateCounter() {
      counterElement.text(currentCount);

      if (currentCount < finalValue) {
        currentCount++;
        setTimeout(updateCounter, 25); // Adjust the delay for smoother animation
      }
    }

    updateCounter();
  }

  $(document).ready(function() {
    incrementCounter($('#project_count'), 200);
    incrementCounter($('#Software_count'), 86);
    incrementCounter($('#comp_count'), 56);
    incrementCounter($('#sup_count'), 3);
  });



let menuBtn = document.getElementById('menu_btn');
let closeBtn = document.getElementById('close_btn');
let nav  = document.getElementById('nav');
let menuImage = document.getElementById('img_src');
menuBtn.addEventListener('click',function(){
    nav.classList.add('show_nav');
    menuImage.src = 'assets/Logos/logo_v2.png';
});
closeBtn.addEventListener('click',function(){
    nav.classList.remove('show_nav');
    menuImage.src = 'assets/Logos/main_logo.png';
});


window.onscroll = function() {
    scrollFunctions();
  };
  
  let navigationBg = document.getElementById('header');
  
  function scrollFunctions() {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
      navigationBg.classList.add('headerNonHome_bg');
    } else {
      navigationBg.classList.remove('headerNonHome_bg');
    }
  }
  

var mySwiper = new Swiper('.mySwiper', {
    // Initial Swiper options
    slidesPerView: 'auto',
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

  // Function to update Swiper options based on window width
  function updateSwiperOptions() {
    if ($(window).width() <= 600) {
      // Set new slides-per-view when the window width is 600px or less
      mySwiper.params.slidesPerView = 1;
    } else {
      // Revert to 'auto' when the window width is greater than 600px
      mySwiper.params.slidesPerView = 'auto';
    }

    // Update Swiper
    mySwiper.update();
  }

  // Initial check on page load
  updateSwiperOptions();

  // Check on window resize
  $(window).resize(function() {
    updateSwiperOptions();
  });


