// 회원가입폼 데이터유효성 체크
$('.qnabox form').on('submit', function(){

    $('input').css({
        border:'1px solid #ddd'
    })

    var irum = $('#irum').val()
    var check2 = /^[가-힣]+$/
    if (irum.length>=2) {
        if ( !check2.test(irum) ) {
            alert('이름은 한글 두글자 이상입니다.')
            $('#irum').css({
                border:'1px solid #f00'
            }).focus().select()
            return false
        }
    } else {
        alert('이름은 한글 두글자 이상입니다.')
        $('#irum').css({
            border:'1px solid #f00'
        }).focus().select()
        return false
    }


    var check = /^(?=[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).*$/
    var pwbox = $('#pwbox').val()
    if ( !check.test(pwbox) ) {
        alert('비밀번호 조건에 맞지 않습니다.')
        $('#pwbox').css({
            border:'1px solid #f00'
        }).focus().select()
        return false
    }


    // 휴대폰번호 유효성체크 : 중간번호(숫자 3~4개), 끝번호(숫자 4개)
    var hp1 = $('#hp1').val()
    var hp2 = $('#hp2').val()
    var check3 = /^[0-9]{3,4}$/   
    var check4 = /^[0-9]{4}$/
    if ( !check3.test(hp1) ) {
        alert('번호형식이 맞지 않습니다.')
        $('#hp1').css({
            border:'1px solid #f00'
        }).focus().select()
        return false
    } else if (!check4.test(hp2)) {
        alert('번호형식이 맞지 않습니다.')
        $('#hp2').css({
            border:'1px solid #f00'
        }).focus().select()
        return false
    }

    // 이메일 아이디 유효성체크 : 특수문자제외
    var emailid = $('#emailid').val()
    var check5 = /^[a-zA-Z0-9]+$/
    if ( !check5.test(emailid) ) {
        alert('이메일 형식이 아닙니다.')
        $('#emailid').css({
            border:'1px solid #f00'
        }).focus().select()
        return false
    }

    // 이메일도메인 유효성체크 : 회사명.com, 회사명.co.kr
    var emaildo = $('#emaildomain').val()
    var check6 = /^[a-zA-Z0-9]+[\.][a-z]+([\.][a-z]+)*$/
    if ( emaildo !== '' ) {
        if ( !check6.test(emaildo) ) {
            alert('이메일형식이 틀립니다.')
            $('#emaildomain').css({
                border:'1px solid #f00'
            }).focus().select()
            return false
        }
    } else {
        alert('이메일도메인을 선택해주세요.')
        $('#emaildomain').css({
            border:'1px solid #f00'
        }).focus().select()
        return false
    }





    // return false // 테스트완료후에는 삭제할 것
})



$('#pwbox').on('focus', function(){
    $(this).after('<span>비밀번호 첫글자는 영문자이고, 숫자, 특수문자중 2가지 이상 조합해야 함<span>')
    $(this).next().css({
        color:'#f00', paddingLeft:'10px'
    })
})
$('#pwbox').on('blur', function(){
    $(this).next().remove()
})

$('#domainlist').on('change', function(){
    var doval = $('#domainlist option:selected').val()
    if ( doval !== 'noselect' && doval != 'self' ) {
        $('#emaildomain').val(doval)
    } else if ( doval === 'noselect') {
        $('#emaildomain').attr({
            disabled:true
        }).val('')
    } else {
        $('#emaildomain').attr({
            disabled:false
        }).val('')
    }
})

// 체크박스
$('#all').on('click', function(){
    var bool = $(this).prop('checked')
    $('input[name^=as]').prop('checked', bool)

})


// 남은 글자 표시하기
$('#memo').on('keydown', function(){
    var curr = $(this).val().length
    var max = 100
    var remain = max - curr
    $('.remain').text(remain)
})
