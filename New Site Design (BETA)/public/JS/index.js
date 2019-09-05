console.log("INIT");

//Change mobile view to desktop..... it's not a lazy fix at all


//Scrolling Jquery Function
(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 20)
          }, 500, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll BETA
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    
  })(jQuery); // End of use strict


//Load the Sheet and Fill the Contact Info
  var members;
  function successFunc(data) {
    members=data;
    console.log(data)
    let body = document.getElementById("memberBody");
    for (let i=0;i<members.length;i++) {
      let newPerson=document.createElement('tr');
      let scope=document.createElement('th');
      scope.scope="row";
      scope.innerHTML=i+1;
      let newName=members[i]["fullName:"];
      let newGrade=members[i]["grade:"];
      let newEmail=members[i]["email:"];
      let finalName=document.createElement('td');
      let finalGrade=document.createElement('td');
      let finalEmail=document.createElement('td');
      finalName.innerHTML=newName;
      finalGrade.innerHTML=newGrade;
      finalEmail.innerHTML="<a style=\"color:white\"class=\"link\" href=\"mailto:"+ newEmail.replace(">","").replace("<","") + "\">" + newEmail.replace(">","").replace("<","") + "</a>";
      newPerson.appendChild(scope);
      newPerson.appendChild(finalName);
      newPerson.appendChild(finalGrade);
      newPerson.appendChild(finalEmail);
      body.appendChild(newPerson);
    }
  }
  $.getJSON('https://api.sheety.co/5eff99a2-d153-4dbd-826c-fe0b0e3b0d36', function(data) {
		successFunc(data);
	})
