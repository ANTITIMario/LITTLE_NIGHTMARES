$(function () {
    let headerSpot = $("header").offset().top;
    console.log(headerSpot);
    let main = $("#section2").offset().top;
    let win = $(window);
    let a = win.scrollTop();
    
    //1. slide 등장인물
    $('#section4 .slide_wrap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
    });

  
    // section2 부드럽게
    AOS.init();
    
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
       
    
    

    // $(".con:nth-of-type(1)").click(() => {
    //     $(".con:nth-of-type(1)").toggleClass("back1")
    //     $(".con:nth-of-type(1) .card .back").toggleClass(".card")
    // });
    // $(".con:nth-of-type(2) .card").click(() => {
    //     $(".con:nth-of-type(2) .card .front").toggleClass("back1")
    //     $(".con:nth-of-type(2) .card .back").toggleClass(".card")
    // });
    // $(".con:nth-of-type(3) .card").click(() => {
    //     $(".con:nth-of-type(3) .card .front").toggleClass("back1")
    //     $(".con:nth-of-type(3) .card .back").toggleClass(".card")
    // });
    // $(".con:nth-of-type(4) .card").click(() => {
    //     $(".con:nth-of-type(4) .card .front").toggleClass("back1")
    //     $(".con:nth-of-type(4) .card .back").toggleClass(".card")
    // });
    
   
    // 헤더 스크롤시 색바뀌기
    
    win.scroll(() => {
        console.log(win.scrollTop());
        if (win.scrollTop() >= main) {
            // $("header").addClass(".header1");
            $("header").css({backgroundColor:"#000"});
        }
        else {
            $("header").css({backgroundColor:"transparent"});
            
    
        }
                    
        
    });
    


});

// 카드 토글 바꾸기
document.addEventListener('DOMContentLoaded', () => {

    let cards = document.querySelectorAll(".card")
    for (let card of cards) {
        card.addEventListener("click", flipper)
    }
  
    function flipper(event) {
        let target = event.currentTarget
        target.style.transform = "rotateY(180deg)"
        target.addEventListener("click", innerFlipper)
    }

    function innerFlipper(event) {
        let target = event.currentTarget
        target.style.transform = "rotateY(0deg)"
        target.addEventListener("click", flipper)
        target.removeEventListener("click", innerFlipper)
    }
});
