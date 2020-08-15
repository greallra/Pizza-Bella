function setTextOfIcons(width) {
  var $els = {
    $icons : $('.fas'), 
  }

    if(width  > 999) {
      $els.$icons.addClass('fa-3x')
    } else {
        $els.$icons.removeClass('fa-3x')
    }
}

function styleNav(activePage) {
  $('.mobile-nav li a').css('color','#fff')
  if(activePage.indexOf("index") >= 0){
    $('.index a').css('color','#dd0301')
  }
  else if(activePage.indexOf("about") >= 0){
    $('.about a').css('color','#dd0301')
  }
  else if(activePage.indexOf("catering") >= 0){
    $('.catering a').css('color','#dd0301')
  }
  else if(activePage.indexOf("newsletter") >= 0){
    $('.newsletter a').css('color','#dd0301')
  }
  else if(activePage.indexOf("contact") >= 0){
    $('.contact a').css('color','#dd0301')
  }
  else if(activePage.indexOf("order") >= 0){
    $('.order a').css('color','#dd0301')
  }
}

//show error/success messages for form inputs
let validationObject = {
    fullNameValid: false,
    emailValid: false,
    consentChecked: false
};
function validateInput(inputType, inputValue, el){
 
  if(inputType === "fullname") {
  
    let inputGroup = el.closest('.input-group');
    let inputGroupErrors = el.siblings('.error-msg, .success-msg');
    $(inputGroupErrors).remove();
    
    // $('.error-msg, .success-msg').remove();
    //must be at least 5 chars
    if(inputValue.length < 6) {
      //add errors styles    
      $(inputGroup).append("<div class='error-msg'>Full name must be at least 5 characters</div>");
      validationObject.fullNameValid = false;
    } else {
      $(inputGroup).append("<div class='success-msg'>Valid <i class='far fa-smile'></i></div>");
      //Add success styles and return valid boolean
      validationObject.fullNameValid = true;
    }
  }
  if(inputType === "email") {
    let inputGroup = el.closest('.input-group');
    let inputGroupErrors = el.siblings('.error-msg, .success-msg');
    $(inputGroupErrors).remove();

    //Regex to test if email is valid, will return a boolean
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    let isValidEmail = regex.test(inputValue);
    if(!isValidEmail) {
      $(inputGroup).append("<div class='error-msg'>Not a valid email</div>");
      validationObject.emailValid = false;
    }
    if(isValidEmail) {
      $(inputGroup).append("<div class='success-msg'>Valid <i class='far fa-smile'></i></div>");
      validationObject.emailValid = true;
    }
  }
}
if(window.location.href.indexOf("contact")) {
  function myMap() {
    var mapProp = {
    center:new google.maps.LatLng(53.201800,-6.132400),
    zoom:12
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  }
  myMap();
}
