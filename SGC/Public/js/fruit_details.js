window.onload = function () {
    let tbodyEl = $('tbody');
    let btnEl = $('button.btn-default');
    let nameEl, EnglishEl, priceEl, jinEl, placeEl, dateEl, pic1El, pic1E2, pic1E3,pic1E4, pic1E5, text1El, text2El, text3El, text4El, text5El, text6El, text7El, text8El, text9El, text10El;

    if(!location.hash){
        location.href=location.pathname+'#list';
    }
    $(window).on('hashchange', function () {
        $('.tab-pane, .nav-tabs li').removeClass('active');
        $(location.hash).addClass('active');
        $(location.hash + '_tab').parent().addClass('active');
        if (location.hash == '#list') {
            location.harf = location.pathname + '#list';
            $.ajax({
                url: '/SGC/index.php/fruit_details/select_store',
                success: function (data) {
                    data = JSON.parse(data);
                    loading(data);
                }
            });
        }else if(location.hash == '#add'){
        }
    });
    $(window).trigger('hashchange');


    // console.log($('location.hash'));【
    $(document).ajaxStart(function () {
        $('.tip').css({height: '2px', background: 'red'}).animate({width: '50%'});
    });

    $(document).ajaxSuccess(function () {
        $('.tip').css({background: 'yellow'}).animate({width: '80%'});
    });

    $(document).ajaxComplete(function () {
        $('.tip').css({background: '#00C853'}).stop().animate({width: '100%'}).queue(function () {
            $('.tip').css({width: '5%', height: '0'}).dequeue();
        })
    });

    function loading(data) {
        tbodyEl.empty();
        $.each(data, function (i, v) {
            $(`
             <tr class="dels" data-id = '${v.id}'>
                <th scope="row" style="text-align: center">${v.id}</th>
                <td><input type="" class="title" value="${v.title}"></td>
                <td><input type="" class="etitle" value="${v.etitle}"></td>
                <td><input type="" class="price" value="${v.price}"></td>
                <td><input type="" class="jin" value="${v.jin}"></td>
                <td><input type="" class="place" value="${v.place}"></td>
                <td><input type="" class="date" value="${v.date}"></td>
                <td><img src="${v.pic1}" alt="" width="50"></td>
                <td><img src="${v.pic2}" alt="" width="50"></td>
                <td><img src="${v.pic3}" alt="" width="50"></td>
                <td><img src="${v.pic4}" alt="" width="50"></td>
                <td><img src="${v.pic5}" alt="" width="50"></td>
                <td><input type="text" class="word1" value="${v.word1}"></td>
                <td><input type="text" class="word2" value="${v.word2}"></td>
                <td><input type="text" class="word3" value="${v.word3}"></td>
                <td><input type="text" class="word4" value="${v.word4}"></td>
                <td><input type="text" class="word5" value="${v.word5}"></td>
                <td><input type="text" class="word6" value="${v.word6}"></td>
                <td><input type="text" class="word7" value="${v.word7}"></td>
                <td><input type="text" class="word8" value="${v.word8}"></td>
                <td><input type="text" class="word9" value="${v.word9}"></td>
                <td><input type="text" class="word10" value="${v.word10}"></td>
                <td><a href="javascript:void(0)" class="del">删除</a></td>
             </tr>`).appendTo(tbodyEl);
        })
    }
    //把原来图片路径换成图片
    // <--<td><input type="" class="pic" value="${v.pic}"></td>-->

    //加载数据
    $.ajax({
        url: '/SGC/index.php/fruit_details/select_store',
        success: function (data) {
            data = JSON.parse(data);
            loading(data);
        }
    });

    function add(data) {
        data = JSON.parse(data);
        $(`<tr class="dels" data-id = ${data}>
            <th scope="row" style="text-align: center">${data}</th>
            <td><input type="" class="title" value="${nameEl}"></td>
            <td><input type="" class="etitle" value="${EnglishEl}"></td>
            <td><input type="" class="price" value="${priceEl}"></td>
            <td><input type="" class="jin" value="${jinEl}"></td>
            <td><input type="" class="place" value="${placeEl}"></td>
            <td><input type="" class="date" value="${dateEl}"></td>
            <td><img src="${pic1El}" alt="" width="50"></td>
            <td><img src="${pic1E2}" alt="" width="50"></td>
            <td><img src="${pic1E3}" alt="" width="50"></td>
            <td><img src="${pic1E4}" alt="" width="50"></td>
            <td><img src="${pic1E5}" alt="" width="50"></td>
            <td><input type="" class="word1" value="${text1El}"></td>
            <td><input type="" class="word2" value="${text2El}"></td>
            <td><input type="" class="word3" value="${text3El}"></td>
            <td><input type="" class="word4" value="${text4El}"></td>
            <td><input type="" class="word5" value="${text5El}"></td>
            <td><input type="" class="word6" value="${text6El}"></td>
            <td><input type="" class="word7" value="${text7El}"></td>
            <td><input type="" class="word8" value="${text8El}"></td>
            <td><input type="" class="word9" value="${text9El}"></td>
            <td><input type="" class="word10" value="${text10El}"></td>
            <td><a href="javascript:void(0)" class="del">删除</a></td>
         </tr>`).prependTo(tbodyEl);
        $('input[name=title]').val('');
        $('input[name=etitle]').val('');
        $('input[name=price]').val('');
        $('input[name=jin]').val('');
        $('input[name=place]').val('');
        $('input[name=date]').val('');
        $('input[name=word1]').val('');
        $('input[name=word2]').val('');
        $('input[name=word3]').val('');
        $('input[name=word4]').val('');
        $('input[name=word5]').val('');
        $('input[name=word6]').val('');
        $('input[name=word7]').val('');
        $('input[name=word8]').val('');
        $('input[name=word9]').val('');
        $('input[name=word10]').val('');
        location.href = location.pathname + '#list';
    }
    //添加
    /*btnEl.on('click', function () {
        let value = $('form').serialize();
        nameEl = $('input[name=name]').val();
        priceEl = $('input[name=price]').val();
        picEl = $('input[name=pic]').val();
        numEl = $('input[name=num]').val();
        cidEl = $('input[name=type]:checked').val();
        if (nameEl && picEl) {
            $.ajax({
                url: '/index.php/StoreAdmin/add_store',
                data: {name: nameEl, price: priceEl, pic: picEl, num: numEl, cid: cidEl},
                success: function (data) {
                    add(data);
                }
            })
        }
    });
*/

    //添加完成后的变化
    $('#file').on('change', function () {
        $(this).prev().html(this.files[0].name);
    });

    //添加
    btnEl.on('click', function () {
        var fromdata = new FormData($('#form').get(0)); //必须写
        $.ajax({
            url: '/SGC/index.php/fruit_details/add_store',
            method: 'post',
            // data: {name: nameEl, price: priceEl, pic: picEl, num: numEl, cid: cidEl},
            data: fromdata,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                location.href = location.pathname + '#list';
            }
        });
        return false;
    });
    // enctype="multipart/form-data"   //html 上 form中写

    //更新  修改
    tbodyEl.on('change', '.title,.etitle,.price,.jin,.place,.date,.word1,.word2,.word3,.word4,.word5,.word6,.word7,.word8,.word9,.word10', function () {
        let value = $('form').serializeArray();
        // console.log(value);
        // console.log($(this));
        // console.log($(this).val());
        let key = $(this).attr('class');
        let values = $(this).val();
        let id = $(this).closest('tr').attr('data-id');
        $.ajax({
            url:'/SGC/index.php/fruit_details/updata',
            data:{key:key,value:values,id:id},
        })
    });

    tbodyEl.on('click', '.del', function () {
        let self = $(this);
        let id = $(this).closest('tr').attr('data-id');
        $.ajax({
            url: '/SGC/index.php/fruit_details/delete_store',
            data: {id: id},
            success: function (data) {
                self.closest('tr').remove();
            }
        })
    });

};


