// on clicking downloadcv btn
$("#resume").click(() => {
  const file_path = "../AnimeshChourasia_resume.pdf";
  const a = document.createElement("A");
  a.href = file_path;
  a.download = file_path.substr(file_path.lastIndexOf("/") + 1);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});
$("#cv").click(() => {
  const file_path = "../AnimeshChourasia_resume.pdf";
  const a = document.createElement("A");
  a.href = file_path;
  a.download = file_path.substr(file_path.lastIndexOf("/") + 1);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

!(function ($) {
  "use strict";

  //  typedJS
  if ($(".typed").length) {
    var typed_strings = $(".typed").data("typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }
})(jQuery);

// navbar
const overlay = document.getElementById("overlay");
const closeMenu = document.getElementById("close-menu");
document.getElementById("open-menu").addEventListener("click", function () {
  overlay.classList.add("show-menu");
});
document.getElementById("close-menu").addEventListener("click", function () {
  overlay.classList.remove("show-menu");
});

// about

$(window).on("scroll", function () {
  if ($(this).scrollTop() > 50) {
    $(".section-about").addClass("in");
    $(".overlay-wrap").fadeOut(400);
  } else {
    $(".section-about").removeClass("in");
    $(".overlay-wrap").fadeIn(400);
  }
});

$(document).ready(function () {
  "use strict";

  $(".feedback-slides").owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    mouseDrag: true,
    center: true,
    margin: 30,
    navText: [
      "<i class='bx bx-left-arrow bx-sm'></i>",
      "<i class='bx bx-right-arrow bx-sm' ></i>",
    ],
    responsive: {
      0: {
        items: 1.2,
      },
      576: {
        items: 1.7,
      },
      768: {
        items: 1.7,
      },
      1200: {
        items: 2.5,
      },
    },
  });

  // ripple
  $("#home").ripples({
    resolution: 200,
    dropRadius: 15,
    perturbance: 0.08,
  });
});
$(document).ready(function () {
  $(".mobileskill").owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    mouseDrag: true,
    center: true,
    margin: 20,
    navText: [
      "<i class='bx bx-left-arrow bx-sm'></i>",
      "<i class='bx bx-right-arrow bx-sm' ></i>",
    ],
    responsive: {
      0: {
        items: 1.2,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
});

!(function ($) {
  "use strict";

  /* ---------------------------------------------- /*
  * Preloader
  /* ---------------------------------------------- */

  $(window).on("load", function () {
    $(".loading-screen").addClass("loaded");
  });

  /* ---------------------------------------------- /*
  * AnimateOnScroll - Init
  /* ---------------------------------------------- */

  var wow = new WOW({
    boxClass: "wow", // animated element css class (default is wow)
    animateClass: "animated", // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
  });
  wow.init();
})(window.jQuery);
