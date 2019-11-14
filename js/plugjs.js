$(document).ready(function() {
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
  //adjust slider height
  $(function() {
    ("use strict");

    var wh = $(window).height();
    var upperbar = $(".upper-bar").innerHeight();
    var nav = $(".navbar").innerHeight();
    $(".slider , .carousel-item").height(wh - (upperbar + nav));
  });

  $(window).on("resize", function() {
    var wh = $(window).height();
    var upperbar = $(".upper-bar").innerHeight();
    var nav = $(".navbar").innerHeight();

    $(".slider , .carousel-item").height(wh - (upperbar + nav));
  });

  // slider here is a time to chnage image on slider every 3s
  $(".carousel").carousel({
    interval: 2000
  });

  $(function() {
    "use strict";

    $(".animate").height($(".line").innerHeight());
    $(".animate").width($(".line").innerWidth());
  });

  // here iam add color for a section fea~ to h3 p so it be easy to chnage

  $(".Our-Features .box h3").addClass("color-3");
  $(".Our-Features .box p").addClass("color-2");

  // featuered work
  $(".Features-Work ul li").click(function() {
    $(".Features-Work ul li").removeClass("active1");
    $(this).addClass("active1");

    console.log($(this).data("class"));

    if ($(this).data("class") === "all") {
      $(".shuffle-img .col-sm").css({
        opacity: 1
      });
    }
    // here is else for other button
    else {
      $(".shuffle-img .col-sm").css({
        opacity: "0.5"
      });

      $($(this).data("class"))
        .parent()
        .css("opacity", "1");
    }
  });

  //finish

  // height lasted post

  var heigh = 0;

  $(".Latest-Posts .Latest-Posts-box").each(function() {
    if ($(this).height() > heigh) {
      heigh = $(this).height();
    }
  });

  $(".Latest-Posts .Latest-Posts-box").height(heigh);

  // section statics
  // the user
  $(incCounter);
  function incCounter() {
    var max = 987;
    var user = parseInt($("#user").text());
    $("#user").text(user + 1);
    if (user + 1 != max) {
      setTimeout(incCounter, 35);
    }
  }

  // amazing tour
  $(amazing);
  function amazing() {
    var max = 545;
    var user = parseInt($("#amazing").text());
    $("#amazing").text(user + 1);
    if (user + 1 != max) {
      setTimeout(amazing, 35);
    }
  }

  // partent
  $(partent);
  function partent() {
    var max = 699;
    var user = parseInt($("#partent").text());
    $("#partent").text(user + 1);
    if (user + 1 != max) {
      setTimeout(partent, 35);
    }
  }
  //statis
  $(statis);
  function statis() {
    var max = 879;
    var user = parseInt($("#statis").text());
    $("#statis").text(user + 1);
    if (user + 1 != max) {
      setTimeout(statis, 35);
    }
  }

  // section contact us
  $(".contact-us").click(function() {
    $(".box-contact").fadeIn(1000);
  });

  $(".box-contact").click(function() {
    $(this).fadeOut(1000);
  });

  $(".box-contact .inner").click(function(e) {
    e.stopPropagation();
  });

  $(".box-contact .close").click(function(e) {
    e.preventDefault();
    $(".box-contact").fadeOut(1000);
  });
});
