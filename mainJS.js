$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
      $('nav').addClass('nav-scroll');
    }
    else { 
      $('nav').removeClass('nav-scroll');
    }
  });
  // make it close on outside click;
  $(window).mouseup((e) => {

    var burger = $(".burger");
    var nav = $(".nav-links");
    if (!burger.is(e.target) && burger.has(e.target).length === 0 && !nav.is(e.target) && nav.has(e.target).length === 0) {
    burger.prev().removeClass("activ");
    burger.removeClass("animation");
    }
    
    });



const navSlide = () => {
  
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle nav
    burger.addEventListener('click', () =>{
        navLinks.classList.toggle('activ');
    

        burger.classList.toggle('animation');

    }); //EventListener END
    
  } // End navSlide

  // Calling navSlide
  navSlide();
