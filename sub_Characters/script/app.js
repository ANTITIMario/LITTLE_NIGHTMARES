$(function () {
  // 상단 화살표 누를시 나타나게
  $(".click").click(() => {
    $(".button").toggleClass("buttonp");
    if ($(".button").hasClass("buttonp")) {
      $(".buttonp").animate({ top: "70px" });
    } else {
      $(".button").animate({ top: "-50px" });
      $(".button").removeClass(".buttonp");
    }
  });

  // 상단 화살표 누를시 나타나게
  $(window).resize(function () {
    let size = innerWidth;
    console.log(size);
    if (size > 767) {
      $(".buttonp").stop().animate({ top: "100px" });
      $(".button").stop().animate({ top: "100px" });
    } else {
      $(".button").stop().animate({ top: "-50px" });
    }

    if (size > 767 && size < 1025) {
      $(".buttonp").stop().animate({ top: "80px" });
      $(".button").stop().animate({ top: "80px" });
    }
  });

  // 모바일 사이즈 햄버거 바 누르면 메뉴가 나타나게
  $("header .ham_click").click(function () {
    $("nav").animate({ right: "0" });
  });
  $("nav .x_click").click(function () {
    $("nav").animate({ right: "-60%" });
  });
  $("html:not(nav)").mouseup(function () {
    $("nav").animate({ right: "-60%" });
  });
  $("html:not(nav)").scroll(function () {
    $("nav").animate({ right: "-60%" });
  });

  //swiper
  // 슬라이드 자동
  var swiper = new Swiper(".bg_slide", {
    spaceBetween: 80,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    nested: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // 갤러리
    var swiper = new Swiper(".gallery-thumbs", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 6,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        1920: {
          spaceBetween: 120,
          slidesPerView: 6,
        },
        1381: {
           spaceBetween: 100,
            slidesPerView: 6,
        },
        1344: {
           spaceBetween: 50,
            slidesPerView: 6,
        },
        1024: {
          spaceBetween: 60,
          slidesPerView: 5,
        },
        800: {
          spaceBetween: 5,
          slidesPerView: 5,
        },
        767: {
          spaceBetween: 5,
          slidesPerView: 4,
        },
        408: {
          spaceBetween: 3,
          slidesPerView: 4,
        },
        300: {
          spaceBetween: 3,
          slidesPerView: 4,
        },
       
      }
    });
    var swiper = new Swiper(".gallery-top", {
      loop: true,
      centeredSlides: true,
      spaceBetween: 50,
      thumbs: {
        swiper: swiper,
      },
      });
  
 

  //
});
