$(function () {



    // 상단 화살표 누를시 나타나게
    $(".click").click(() => {
        $(".button").toggleClass("buttonp")
        if ($(".button").hasClass("buttonp")) {
            $(".buttonp").animate({ top: '70px' })
        } else {
            $(".button").animate({ top: '-50px' })
            $(".button").removeClass(".buttonp")

        }
    });

    // 상단 화살표 누를시 나타나게
    $(window).resize(function () {
        let size = innerWidth
        console.log(size)
        if (size > 767) {
            $(".buttonp").stop().animate({ top: '100px' })
            $(".button").stop().animate({ top: '100px' })
        } else {
            $(".button").stop().animate({ top: '-50px' })
        }

        if(size>767 && size<1025){
            $(".buttonp").stop().animate({ top: '80px' })
            $(".button").stop().animate({ top: '80px' })
        }

    });


    



    // 1. swiper

    let win = $(window);
    
    

    var bullet = ['감옥', '소굴', '주방', '객실영역', '숙녀의 방들'];

    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        slidesPerView: 1,
        mousewheel: true,
        speed: 1000,
        navigation: "true",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
            }
        },
        on: {
            reachEnd: function () {
                swiper.mousewheel.disable();
            }
        }
       
    });



      window.addEventListener('wheel', function (event) {
        if (event.deltaY < 0) {
        swiper.mousewheel.enable();
        } else if (event.deltaY > 0) {
        }
    });
        


    //2. buttons

    // 모바일 사이즈 햄버거 바 누르면 메뉴가 나타나게
    $("header .ham_click").click(function () {
        $("nav").animate({ right: '0' });
    })
    $("nav .x_click").click(function () {
        $("nav").animate({ right: '-60%' });
    })
    $("html:not(nav)").mouseup(function () {
        $("nav").animate({ right: '-60%' });
    })
    $("html:not(nav)").scroll(function () {
        $("nav").animate({ right: '-60%' });
        
    })




    
});



