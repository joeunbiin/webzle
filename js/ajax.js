var photolist = ''
$.ajax({
    type: 'GET',
    url: 'js/photodata.json', //json경로를 써주는것
    timeOut: 3000,
    beforeSend: function (xhr) {
        if (xhr.overrideMimeType) {
            xhr.overrideMimeType('application/json')
        }
    },
    dataType: 'json',
    success: function (data) {
        photolist = data
        dataPrint()

    },
    error: function (xhr) {
        alert(xhr.status + '/' + xhr.errorText)
    }
})

function dataPrint() {
    var gallery = '';
    for (var i in photolist) {
        gallery += `<li><img src="${photolist[i].Img}" onerror="this.src='img/no-photo2.jpg'" alt="">`
        gallery += `<p>${photolist[i].Title}</p><button type="button"><i class="far fa-trash-alt"></i></button></li>`
    }
    $('.article9 .row').append(`<ul class="gallery">${gallery}</ul>`)
}

// 삭제버튼 누르면 삭제되도록
$('.article9 .row').on('click', 'ul.gallery li button', function(e){
    e.preventDefault()
    var index = $(this).parent().index()
    photolist.splice(index, 1)
    $('ul.gallery').remove()
    dataPrint()
})


// 추가버튼 누르면 폼박스가 열리도록
$('.article9 .pushBtn button').on('click', function(e){
    e.preventDefault()
    $('.formBox').css({display: 'block'})
})


// 닫기버튼 누르면 폼박스가 닫히도록
$('.article9 .row').on('click', '.formBox .closeform' ,function(){
    $('.formBox').css({display: 'none'})
})


// 취소버튼 누르면 폼박스가 닫히도록
$('.article9 .row').on('click', '.formBox button[type=reset]' ,function(){
    $('.formBox').css({display: 'none'})
})

// 폼박스 확인버튼 누르면 추가되도록
$('.article9 .row').on('click', '.formBox button[type=submit]' ,function(e){
    e.preventDefault()
    if ( $('#img').val()==='' && $('#title').val()==='') {
        return false
    }
    var last = {
        Img : $('#img').val(),
        Title : $('#title').val(),
    }
    photolist.push(last)
    $('ul.gallery').remove()
    dataPrint()
})