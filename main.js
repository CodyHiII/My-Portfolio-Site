    
const navSlide = () => {    
    
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

        burger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            burger.classList.toggle('animation');
        }); // Close the nav animation

// Make it Close on OutSide Click
        $(window).mouseup((e) => {

            var burger = $(".burger");
            var nav = $(".nav-links");
            if (!burger.is(e.target) && burger.has(e.target).length === 0 && !nav.is(e.target) && nav.has(e.target).length === 0) {
            burger.prev().removeClass("nav-active");
            burger.removeClass("animation");
            }
            
            });
        } // Close MOUSEUP function

// Make it close after a click on a in nav bar
    const closeNav = () => {
        $('.nav-links').removeClass('nav-active');
    };
    const toggleAnimation = () => {
        $('.burger').toggleClass('animation');
    };
    const closeOnClick = () => {
        $('.nav-links a').on('click', () => {
            closeNav();
            toggleAnimation();
        })
    };

    //Call changeLink function
    closeOnClick();

//Call function
navSlide();   

// Portfolio buttons
const portfolio = () => {
    const plus = document.querySelector('.plus');
    const first = document.querySelector('.first');
    const second = document.querySelector('.second');
    const icon = document.querySelector('.icon');
  
    plus.addEventListener('click', () =>{
      
      first.classList.toggle('first-active');
      second.classList.toggle('second-active');
      icon.classList.toggle('icon-animation');
      
    });
} //portfolio functions end
//Calling function
portfolio();

