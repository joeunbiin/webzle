$('#header .open').addClass('on')
$('#header .open').on('click', function () {
    $(this).next().css({
        opacity: 1
    }).animate({
        right: 0
    }, 300)
    $(this).removeClass('on')
    $(this).next().next().addClass('on')
})
$('#header .close').on('click', function () {
    $(this).prev().animate({
        right: '-220px'
    }, 300, function () {
        $(this).css({
            opacity: 0
        })
    })
    $(this).removeClass('on')
    $(this).prev().prev().addClass('on')
    $('.depth1 > li').find('.depth2').slideUp(100)
})



// 여기서부터 resize 이벤트 발생시 스크롤바 유무에 따른 상태제어 프로그램
var deviceSize1 = 1024;
var deviceSize2 = 768;

function scrollOX(status) {
    $('html').css({
        overflowY: status
    })
    var htmlWidth = $('html').width()
    return htmlWidth
}
var swh = scrollOX('hidden')
var sws = scrollOX('scroll')
var swd = swh - sws
if (swd > 0) {
    deviceSize1 = deviceSize1 - swd
    deviceSize2 -= swd;
}
var ww;
var wh;

function init() {
    ww = $(window).width()
    wh = $(window).height()
    if (ww > deviceSize1 && !$('html').hasClass('pc')) {
        $('html').addClass('pc').removeClass('tablet mobile')
        $('html').scrollTop(0)
        $('.depth1 > li').find('.depth2').css({
            display: 'none'
        })
        $('.nav').css({
            opacity: 1,
            right: 0
        })
    } else if (ww <= deviceSize1 && ww > deviceSize2 && !$('html').hasClass('tablet')) {
        $('html').addClass('tablet').removeClass('pc mobile')
        $('html').scrollTop(0)
        $('.depth1 > li').find('.depth2').css({
            display: 'none'
        })
        $('.nav').css({
            right: '-220px',
            opacity: 0
        })
        $('#header .close').removeClass('on')
        $('#header .open').addClass('on')
    } else if (ww <= deviceSize2 && !$('html').hasClass('mobile')) {
        $('html').addClass('mobile').removeClass('tablet pc')
        $('html').scrollTop(0)
        $('.nav').css({
            right: '-220px',
            opacity: 0
        })
        $('#header .close').removeClass('on')
        $('#header .open').addClass('on')
    }
}

init()

$(window).on('resize', function () {
    init()
})
// 여기까지 resize 이벤트 발생시 스크롤바 유무에 따른 상태제어 프로그램



$('.depth1 > li').hover(
    function () {
        if ($('html').hasClass('pc')) {
            // $(this).addClass('on')
            $(this).find('.depth2').stop().slideDown(300)
        }
    },
    function () {
        if ($('html').hasClass('pc')) {
            // $(this).removeClass('on')
            $(this).find('.depth2').stop().slideUp(300)
        }
    }
)



var licnt = $('.depth1 > li').length
$('.depth1 > li').on('click', function (e) {
    var ind = $(this).index()
    if (ind !== 0 && ind !== licnt - 1) {
        if ($('html').hasClass('mobile') || $('html').hasClass('tablet')) {
            e.preventDefault()
            // $(this).toggleClass('on').siblings().removeClass('on')
            $(this).find('.depth2').stop().slideToggle(300)
            $(this).siblings().find('.depth2').stop().slideUp(300)
        }
    }


})



$('.depth2 > li').on('click', function (e) {
    e.stopPropagation()
})



$(window).on('scroll', function () {
    var sct = $(this).scrollTop()
    if (sct >= 10 && !$('#header').hasClass('on')) {
        $('#header').addClass('on')
        $('.gotop').addClass('on')
    } else if (sct < 10 && $('#header').hasClass('on')) {
        $('#header').removeClass('on')
        $('.gotop').removeClass('on')
    }
})



// 돋보기 클릭시 검색창 박스 열고닫기
$('.search label').on('click', function () {
    $(this).prev().toggleClass('on')
})



// gotop버튼 클릭시 부드럽게 위로 스크롤시키기
$('.gotop').on('click', function (e) {
    e.preventDefault()
    $('html').animate({
        scrollTop: 0
    }, 500)
})