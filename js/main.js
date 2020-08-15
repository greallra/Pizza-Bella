
$(window).on("load", function() {
    //Page Fade In Effect
    $('body *').not('nav').hide();
    $('body *').not('nav, #cover').fadeIn();
    // $('#cover').fadeOut();
        
    //Cache html elements to increase performance/speed
    var $els = {
        $htmlBody: $('html, body'),
        $burger: $('#burger'),
        $mobileNav: $('.mobile-nav'),
        $banner: $('.banner'),
        $topSectionImg : $('#top-section-img'),
        $menuSection : $(".menu-section"),
        $nav : $('nav'),
        $icons : $('.fas'),
        $emailInput : $('#email-input'),
        $newsletterForm : $('#newsletter-form'),
        $faArrowDown :$(".fa-arrow-down"),
        // $fullnameInput : $('#fullname-input')
    }


    //Variables
    let screenWidth = $(window).width();

    // Resize Icons on Screen Size
    $( window ).resize(function() {
        screenWidth = $(window).width();
        setTextOfIcons(screenWidth);
    });

    //Style Nav based on active page
    let activePage = window.location.href;
    styleNav(activePage);
    

    //Form Validation on Inputs
    $('#fullname-input').keydown(function(e) {
        let userName = $('#fullname-input').val()
        validateInput('fullname', userName , $('#fullname-input'));
   
    });
    $('#email-input').keydown(function(e) {
        let userEmail = $('#email-input').val()
        validateInput('email', userEmail, $('#email-input'));
      
    });
    //Form Validation on Form Submission
    $els.$newsletterForm.submit((e)=>{
        $('.form-submission-result').empty();
        e.preventDefault();
        if(!validationObject.fullNameValid) {
            $('.form-submission-result').append('<div class="error-result">Full Name is Invalid<i class="fas fa-exclamation"></i></div>');   
        }
        if(!validationObject.emailValid) {
            $('.form-submission-result').append('<div class="error-result">Email is Invalid<i class="fas fa-exclamation"></i></div>');  
        }
        if(!$('#checkbox').is(':checked')) {
            $('.form-submission-result').append('<div class="error-result">We need your consent<i class="fas fa-exclamation"></i></div>');
            
        }
        else {
            validationObject.consentChecked = true;
        }
        //success
        if(validationObject.fullNameValid && validationObject.emailValid && validationObject.consentChecked) {
            $('.form-submission-result').append('<div class="success-result">Thanks for signing up<i class="fas fa-check-circle"></i></div>');
        }
    })
    //smooth scroll home page
    $els.$faArrowDown.click(function (){
        $els.$htmlBody.animate({
            scrollTop: $els.$menuSection.offset().top
        }, 300);
    });
    // Open Mobile Menu Event
    $els.$burger.click((e)=>{
        e.preventDefault();
        $els.$mobileNav.toggleClass('mobile-nav-active');
    })
    // Set height of banner to equal background img
        let topSectionImgHeight = $('#top-section-img').height();
        let navHeight = $els.$nav.height();
        $els.$banner.height(topSectionImgHeight - navHeight);
    // Set height of nav to equal background img on sreen resize
    $( window ).resize(function() {
        topSectionImgHeight = $els.$topSectionImg.height();
        navHeight = $els.$nav.height();
        $els.$banner.height(topSectionImgHeight - navHeight);
    });
  
});






