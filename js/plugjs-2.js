/* gloabl $ , alert , console*/
$(document).ready(function() {
  // nice scroll

  $("html").niceScroll();
  //chnage color

  $(".fixed-meanu .fa-asterisk").on("click", function() {
    $(this)
      .parent(".fixed-meanu")
      .toggleClass("show");

    if (
      $(this)
        .parent(".fixed-meanu")
        .hasClass("show")
    ) {
      $(this)
        .parent(".fixed-meanu")
        .animate(
          {
            left: 0
          },
          500
        );
    } else {
      $(this)
        .parent(".fixed-meanu")
        .animate(
          {
            left: "-200px"
          },
          500
        );
    }
  });

  // note in fixed meanu

  (function chngaeNote() {
    $(".fixed-meanu .note .active").each(function() {
      if (!$(this).is(":last-child")) {
        $(this)
          .delay(1000)
          .fadeOut(1000, function() {
            $(this)
              .removeClass("active")
              .next()
              .addClass("active")
              .fadeIn(1000);
            // this to work automatic
            chngaeNote();
          });
      } else {
        $(this)
          .delay(1000)
          .fadeOut(1000, function() {
            $(this).removeClass("active");

            $(".fixed-meanu .note div")
              .eq(0)
              .addClass("active")
              .fadeIn(1000);

            // to work automatic

            chngaeNote();
          });
      }
    });
  })();
  //dark and light mode
  $(".dark-light-mode .dark").click(function() {
    $("body").css("background-color", "black");
  });
  $(".dark-light-mode .light").click(function() {
    $("body").css("background-color", "white");
  });

  // them color themscolor
  $(".chngae-color ul li").click(function() {
    var path = $(this).data("them");
    $("#themscolor").attr("href", path);
  });

  // scroll top

  $(window).scroll(function() {
    if ($(window).scrollTop() >= 600) {
      if ($(".scroll-top").is(":hidden")) {
        $(".scroll-top").fadeIn(500);
      } else {
        console.log("scroll to top is not hidden so i wont check again");
      }
    } else {
      $(".scroll-top").fadeOut(500);
    }
  });

  $(".scroll-top").click(function() {
    $("html , body").animate(
      {
        scrollTop: 0
      },
      2500
    );
  });

  // header hight

  $("header").height($(window).height());
  $(window).on("resize", function() {
    $("header").height($(window).height());
  });

  // gallery image
  $(".gallery").magnificPopup({
    delegate: "a",
    type: "image",
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: "mfp-with-zoom mfp-img-mobile",
    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return (
          item.el.attr("title") +
          ' &middot; <a class="image-source-link" href="' +
          item.el.attr("data-source") +
          '" target="_blank">image source</a>'
        );
      }
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find("img");
      }
    }
  });

  $(".icon-testimonials .fa-chevron-right").click(function() {
    $(".box-testimonials").removeClass(".active");
  });
});
