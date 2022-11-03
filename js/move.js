$(document).ready(function () {
  setTimeout(function () {
    $(".loading-wrapper").fadeOut(500);
  }, 5500);
});
//右側滑單
$(document).ready(function () {
  $(".btn").click(function () {
    $(".asidemenu").toggleClass("active");

    $(".btn-line").toggleClass("rotate1");
    $(".btn-line3").toggleClass("rotate2");
    if ($(".asidemenu").hasClass("active")) {
      $(".asidemenu").animate({ "right": "300px" }, "fast")

    }

    else {
      $(".asidemenu").animate({ "right": "0px" }, "fast")

    }
    $(".btn-line2").toggleClass("active");
    if ($(".btn-line2").hasClass("active")) {
      $(".btn-line2").animate({ "right": "0px", "opacity": "0" }, 400)
    }
    else {
      $(".btn-line2").animate({ "right": "12px", "opacity": "1" }, 400)
    }

  });
});

$(document).ready(function () {
  $(".archives-nav").hide();
  $(".aaa").click(function () {
    $(".nav-list-area-item").toggleClass("active1");
    if ($(".nav-list-area-item").hasClass("active1")) {
      $(".archives-nav").slideDown("ease-in	", "linear");
      $(".bbb").animate({ "top": "70px" }, 100);
    }
    else {
      $(".archives-nav").slideUp("fast", "linear");
      $(".bbb").animate({ "top": "0" }, 200);
    }
  });

});

//display:sticky
$(document).ready(function () {
  $(window).scroll(function () {
    var scrollVal = $(this).scrollTop();
    //$("span.qScrollTop").text(scrollVal);

    if (scrollVal > 600) {
      $(".nav").addClass("fixed");
      $(".nav").animate({ "right": "60" }, 200);
      console.log("hello");
    }
    else {
      $(".nav").removeClass("fixed");

      console.log("nohello");
    }

  });
})
//animate on scroll
$(document).ready(function () {

  AOS.init({
    duration: 1000,
  });

});

$(document).ready(function () {

  $('a[href=#aboutus]').click(function () {

    $('html,body').animate({

      scrollTop: $('#aboutus').offset().top

    }, 'show');

    return false;

  });

  $('a[href=#sort]').click(function () {

    $('html,body').animate({

      scrollTop: $('#sort').offset().top

    }, 'show');

    return false;

  });

  $('a[href=#discovery]').click(function () {

    $('html,body').animate({

      scrollTop: $('#discovery').offset().top

    }, 'show');

    return false;

  });



});
//按鈕顏色擴展
$(function () {
  $(".aaa").append('<div class="bg-overly"></div>');
});
//modal
$(function () {
  $("#modal-launcher1, #modal-background1, #modal-close1").click(function () {
    $("#modal-content1,#modal-background1").toggleClass("active");
  });
  $("#modal-launcher2, #modal-background2, #modal-close2").click(function () {
    $("#modal-content2,#modal-background2").toggleClass("active");
  });
  $("#modal-launcher3, #modal-background3, #modal-close3").click(function () {
    $("#modal-content3,#modal-background3").toggleClass("active");
  });
  $("#modal-launcher4, #modal-background4, #modal-close4").click(function () {
    $("#modal-content4,#modal-background4").toggleClass("active");
  });
  $("#modal-launcher5, #modal-background5, #modal-close5").click(function () {
    $("#modal-content5,#modal-background5").toggleClass("active");
  });
  $("#modal-launcher6, #modal-background6, #modal-close6").click(function () {
    $("#modal-content6,#modal-background6").toggleClass("active");
  });
  $("#modal-launcher7, #modal-background7, #modal-close7").click(function () {
    $("#modal-content7,#modal-background7").toggleClass("active");
  });
  $("#modal-launcher8, #modal-background8, #modal-close8").click(function () {
    $("#modal-content8,#modal-background8").toggleClass("active");
  });
  $("#modal-launcher9, #modal-background9, #modal-close9").click(function () {
    $("#modal-content9,#modal-background9").toggleClass("active");
  });
  $("#modal-launcher10, #modal-background10, #modal-close10").click(function () {
    $("#modal-content10,#modal-background10").toggleClass("active");
  });

  
});
//只顯示那個區域的案件
$(document).ready(function () {
  $("g#taiwan-north").click(function () {
    $("li").not(".t-north").hide(100, "linear");
    $("li").filter(".t-north").show(100, "linear");
    $("#t-n").show();
    $("#t-s").hide();
    $("#t-m").hide();
    $("#t-e").hide();
  });
  $("g#taiwan-mid").click(function () {
    $("li").not(".t-mid").hide(100, "linear");
    $("li").filter(".t-mid").show(100, "linear");
    $("#t-m").show();
    $("#t-s").hide();
    $("#t-n").hide();
    $("#t-e").hide();
  });
  $("g#taiwan-east").click(function () {
    $("li").not(".t-east").hide(100, "linear");
    $("li").filter(".t-east").show(100, "linear");
    $("#t-e").show();
    $("#t-s").hide();
    $("#t-n").hide();
    $("#t-m").hide();
  });
  $("g#taiwan-south").click(function () {
    $("li").not(".t-south").hide(100, "linear");
    $("li").filter(".t-south").show(100, "linear");
    $("#t-s").show();
    $("#t-e").hide();
    $("#t-n").hide();
    $("#t-m").hide();
  });
  $("g#japan-north").click(function () {
    $("li").not(".t-north").hide(100, "linear");
    $("li").filter(".t-north").show(100, "linear");
    $("#t-n").show();
    $("#t-s").hide();
    $("#t-m").hide();
    $("#t-e").hide();
  });
  $("g#japan-mid").click(function () {
    $("li").not(".t-mid").hide(100, "linear");
    $("li").filter(".t-mid").show(100, "linear");
    $("#t-m").show();
    $("#t-s").hide();
    $("#t-n").hide();
    $("#t-e").hide();
  });
  $("g#japan-east").click(function () {
    $("li").not(".t-east").hide(100, "linear");
    $("li").filter(".t-east").show(100, "linear");
    $("#t-e").show();
    $("#t-s").hide();
    $("#t-n").hide();
    $("#t-m").hide();
  });
  $("g#japan-south").click(function () {
    $("li").not(".t-south").hide(100, "linear");
    $("li").filter(".t-south").show(100, "linear");
    $("#t-s").show();
    $("#t-e").hide();
    $("#t-n").hide();
    $("#t-m").hide();
  });
  $("g#usa-north").click(function () {
    $("li").not(".t-north").hide(100, "linear");
    $("li").filter(".t-north").show(100, "linear");
    $("#t-n").show();
    $("#t-s").hide();
    $("#t-m").hide();
    $("#t-e").hide();
  });
  $("g#usa-mid").click(function () {
    $("li").not(".t-mid").hide(100, "linear");
    $("li").filter(".t-mid").show(100, "linear");
    $("#t-m").show();
    $("#t-s").hide();
    $("#t-n").hide();
    $("#t-e").hide();
  });
  $("g#usa-east").click(function () {
    $("li").not(".t-east").hide(100, "linear");
    $("li").filter(".t-east").show(100, "linear");
    $("#t-e").show();
    $("#t-s").hide();
    $("#t-n").hide();
    $("#t-m").hide();
  });
  $("g#usa-south").click(function () {
    $("li").not(".t-south").hide(100, "linear");
    $("li").filter(".t-south").show(100, "linear");
    $("#t-s").show();
    $("#t-e").hide();
    $("#t-n").hide();
    $("#t-m").hide();
  });
  $("#t").click(function () {
    $("li").not(".t-all").hide(100, "linear");
    $("li").filter(".t-all").show(100, "linear");
    $("#t-s").hide();
    $("#t-e").hide();
    $("#t-n").hide();
    $("#t-m").hide();
  });

});


//分類註解
$(document).ready(function () {
  $(".circle1").hover(function () {
    $(".squre8 p").stop().slideToggle("fast","linear");
  });
  $(".circle9").hover(function () {
    $(".squre2 p").stop().slideToggle("fast","linear");
  });
  $(".circle3").hover(function () {
    $(".squre10 p").stop().slideToggle("fast","linear");
  });
  $(".circle11").hover(function () {
    $(".squre4 p").stop().slideToggle("fast","linear");
  });
  $(".circle5").hover(function () {
    $(".squre12 p").stop().slideToggle("fast","linear");
  });
  $(".circle13").hover(function () {
    $(".squre6 p").stop().slideToggle("fast","linear");
  });
  $(".circle7").hover(function () {
    $(".squre14 p").stop().slideToggle("fast","linear");
  });
});



