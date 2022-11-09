$(".Popupbtn").click(function() {
    $("div[id=" + $(this).attr("data-activity") +"]").fadeIn(200);
    });
$(".popup_close").click(function() {
    $(".mask").fadeOut(200);
});


$(window).ready(function(){
    $(".menu-r,.menu-l").hide();
});
$(".menu-l").click(function(){
    $(".menu-r").show().fadeOut(200);
    $(".menu-l").hide();
    $(".menu-0").show();
});

$(".menu-0").click(function(){
    $(".menu-r").hide().fadeIn(200);
    $(".menu-0").hide();
    $(".menu-l").show();
});

new Clipboard( "#copy" );

$(document).ready(function(){
    $('.page01pe').mousemove(function(e){
        var xx = -(e.pageX + this.offsetLeft) / 20;
        $('.page01pe').css('left', xx +150 + 'px');
    });
});

// music
$("#audio_btn").click(function(){
	var music = document.getElementById("music");
	if(music.paused){
		music.play();
        $("#music_btn").attr("src","img/icon_music.png");
	}else{
		music.pause();
		$("#music_btn").attr("src","img/icon_music_pause.png");
	}
});

$("#rwdaudio_btn").click(function(){
	var music = document.getElementById("music");
	if(music.paused){
		music.play();
        $("#rwdmusic_btn").attr("src","img/icon_music.png");
	}else{
		music.pause();
		$("#rwdmusic_btn").attr("src","img/icon_music_pause.png");
	}
});

// $(document).ready(function(){
//     if($(window).width()>1024){
//         $('.page01pe').mousemove(function(e){
//             var xx = -(e.pageX + this.offsetLeft) / 20;
//             $('.page01pe').css('left', xx +150 + 'px');
//         });
//     }
//     else{
//         $('.page01pe').mousemove(function(e){
//             var xx = -(e.pageX + this.offsetLeft) / 0;
//             $('.page01pe').css('left', xx +150 + 'px');
//         });
//     }
// });

$(document).ready(function(){
    $('.page01pe').mousemove(function(e)
    {
        var xx = -(e.pageX + this.offsetLeft) / 20;
        $('.page01pe').css('left', xx +150 + 'px');
    });
});

$(window).bind('scroll', function() {
    var currentTop = $(window).scrollTop();
    var elems = $('.secblock');
    elems.each(function(index){
        var elemTop   = $(this).offset().top;
        var elemBottom  = elemTop + $(this).height();
        var id    = $(this).attr('id');
        var navElem = $('ul.menubox li[id="#' + id+ '"]');
        navElem.removeClass( 'active' )
        if(currentTop >= elemTop && currentTop <= elemBottom){
        navElem.addClass('active');
        }
    })
});

var currentTop = $(window).scrollTop();
var elems = $('.secblock');
elems.each(function(index){
    var elemTop   = $(this).offset().top;
    var elemBottom  = elemTop + $(this).height();
    var id    = $(this).attr('id');
    var navElem = $('ul.menubox li[id="#' + id+ '"]');
    navElem.removeClass( 'active' )
    if(currentTop >= elemTop && currentTop <= elemBottom){
        navElem.addClass('active');
    }
})

$(document).ready(function(){
    $('.menubtn01').click(function(){ 
        $('html,body').animate({scrollTop:$('.sec01-block').offset().top}, 500);
    });
    $('.menubtn02').click(function(){ 
        $('html,body').animate({scrollTop:$('.sec02-block').offset().top}, 500);
    });

    $('.menubtn03').click(function(){ 
        $('html,body').animate({scrollTop:$('.sec03-block').offset().top}, 500);
    });

    $('.menubtn06').click(function(){ 
        $('html,body').animate({scrollTop:$('.sec06-block').offset().top}, 500);
    });
});


// tabbox
$(function(){
    var _showTab = 0;
    $('.characterbox').each(function(){
        var $tab = $(this);
        var $defaultLi = $('ul.tab-title li', $tab).eq(_showTab).addClass('active');
        $($defaultLi.find('a').attr('href')).siblings().hide();

        $('ul.tab-title li', $tab).click(function() {
            var $this = $(this),
                _clickTab = $this.find('a').attr('href');
            $this.addClass('active').siblings('.active').removeClass('active');
            $(_clickTab).stop(false, true).fadeIn().siblings().hide();
            return false;
        })
    });
});

$(".rwd-humburger-box").click(function(){
    $(".rwdmenu").addClass("nav-mobile-slide");
    $(".rwdmenu-bg").css("z-index","999; opacity: 1;");
    $(".rwdmenu-bg").fadeIn();
});

$(" ul.rwdmenubox li a , .navbar-close-btn").click(function(){
    $(".rwdmenu").removeClass("nav-mobile-slide");
    $(".rwdmenu-bg").css("z-index","1; opacity: 0;");
    $(".rwdmenu-bg").fadeOut();
});


var swiper = new Swiper('.swiper1', {
    loop: true,
    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + " " + newClass  + '">'  + '</span>';
        },
        renderBullet: function (index, className) {
            var newClass;
            switch(index){
                case 0:newClass='slidebtn01';break;
                case 1:newClass='slidebtn02';break;
                case 2:newClass='slidebtn03';break;
                case 3:newClass='slidebtn04';break;
                case 4:newClass='slidebtn05';break;
            }
            return '<span class="' + className + " " + newClass  + '">'  + '</span>';
        },
    },
});
// var swiper = new Swiper(".rwdswiper", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

// $(document).scroll(function() {
//     var topy = $(this).scrollTop();
//     if (topy > 4900) {
//         $('.scroll').addClass('scrollappear');
//     } else {
//         $('.scroll').removeClass('scrollappear');
//     }
// });

