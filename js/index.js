$(".slide_group1").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 5000, // 간격시간
    dots: true, // 동그라미버튼
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    responsive: [{
        breakpoint: 1025,
        settings: {arrows: false},
        
    }
]
})



$(".slide_group2").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    speed: 600, // 바뀌는시간(생략가능)
    slidesToShow: 3, // 보여질슬라이드수
    slidesToScroll: 1, // 이동슬라이드수
    cssEase: 'linear', // 속도함수(생략가능)
    arrows: false,
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    responsive: [{
            breakpoint: 1025,
            settings: {slidesToShow: 2,}
        },
        {breakpoint: 501,
        settings: {slidesToShow: 1, centerMode: false}
        }
    ]
})



$(".slide_group3").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    speed: 600, // 바뀌는시간(생략가능)
    slidesToShow: 5, // 보여질슬라이드수 
    slidesToScroll: 1, // 이동슬라이드수
    cssEase: 'linear', // 속도함수(생략가능)
    arrows: false,
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    responsive: [{
    breakpoint: 501,
    settings: {slidesToShow: 3, centerMode: false}
    }
]
})



$('.article1 .playstop').on('click', function () {
    var $ibutton = $(this).find('i')
    if ($ibutton.hasClass('fas fa-pause')) {
        $('.slide_group1').slick('slickPause')
        $ibutton.removeClass('fas fa-pause').addClass('fas fa-play')
    } else {
        $('.slide_group1').slick('slickPlay')
        $ibutton.removeClass('fas fa-play').addClass('fas fa-pause')
    }
})



$(window).on('scroll', function () {
    var sct = $(this).scrollTop()
        if (sct >= 1 && !$('.article2').hasClass('on')) {
        $('.article2').addClass('on')
    } else if (sct === 0) {
        $('.article2').removeClass('on')
    }

})


