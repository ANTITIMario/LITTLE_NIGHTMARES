$(function () {
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
        
    });

    //more button
// news
    $('#news .btn .list li').hide();
    $('#news .btn .list li').slice(0, 8).show();
    $("#news .btn .load").click(function(e){ // Load More를 위한 클릭 이벤트e
		e.preventDefault();
		$("#news .btn .list li:hidden").slice(0, 8).show(); // 숨김 설정된 다음 n개 표시
        if($("#news .btn .list li:hidden").length == 0){ // 숨겨진 DIV가 있는지 체크해서 없으면 more 버튼 숨기기
			$('#news .btn .load').hide();
		}
    });
   
// event
    $('#event .btn .list li').hide();
    $('#event .btn .list li').slice(0, 8).show();

    $("#event .btn .load").click(function(e){ // Load More를 위한 클릭 이벤트e
		e.preventDefault();
		$("#event .btn .list li:hidden").slice(0, 8).show(); // 숨김 설정된 다음 n개 표시
   		if($("#event .btn .list li:hidden").length == 0){ // 숨겨진 DIV가 있는지 체크해서 없으면 more 버튼 숨기기
			$('#event .btn .load').hide();
		}
	});

});