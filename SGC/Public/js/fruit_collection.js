/**
 * Created by 22967 on 2017/7/8.
 */
window.onload = function () {
    let tbodyEl = $('tbody');
    let btnEl = $('button.btn-default');
    let browseEl, browsenumEl, thumbEl, thumbnumEl, cartEl, cartnumEl;

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
                url: '/SGC/index.php/fruit_collection/select_store',
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
                <td><img src="${v.browse}" alt="" width="50"></td>
                <td><input type="" class="browsenum" value="${v.browsenum}"></td>
                <td><img src="${v.thumb}" alt="" width="50"></td>
                <td><input type="" class="thumbnum" value="${v.thumbnum}"></td>
                <td><img src="${v.cart}" alt="" width="50"></td>
                <td><input type="" class="cartnum" value="${v.cartnum}"></td>
                <td><a href="javascript:void(0)" class="del">删除</a></td>
             </tr>`).appendTo(tbodyEl);
        })
    }
    //把原来图片路径换成图片
    // <--<td><input type="" class="pic" value="${v.pic}"></td>-->

    //加载数据
    $.ajax({
        url: '/SGC/index.php/fruit_collection/select_store',
        success: function (data) {
            data = JSON.parse(data);
            loading(data);
        }
    });

    function add(data) {
        data = JSON.parse(data);
        $(`<tr class="dels" data-id = ${data}>
            <th scope="row" style="text-align: center">${data}</th>
            <td><img src="${browseEl}" alt="" width="50"></td>
            <td><input type="" class="browsenum" value="${browseEl}"></td>
            <td><img src="${thumbEl}" alt="" width="50"></td>
            <td><input type="" class="thumbnum" value="${thumbnumEl}"></td>
            <td><img src="${cartEl}" alt="" width="50"></td>
            <td><input type="" class="cartnum" value="${cartnumEl}"></td>
            <td><a href="javascript:void(0)" class="del">删除</a></td>
         </tr>`).prependTo(tbodyEl);
        $('input[name=browsenum]').val('');
        $('input[name=thumbnum]').val('');
        $('input[name=cartnum]').val('');
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
            url: '/SGC/index.php/fruit_collection/add_store',
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
    tbodyEl.on('change', '.browsenum,.thumbnum,.cartnum', function () {
        let value = $('form').serializeArray();
        // console.log(value);
        // console.log($(this));
        // console.log($(this).val());
        let key = $(this).attr('class');
        let values = $(this).val();
        let id = $(this).closest('tr').attr('data-id');
        $.ajax({
            url:'/SGC/index.php/fruit_collection/updata',
            data:{key:key,value:values,id:id},
        })
    });

    tbodyEl.on('click', '.del', function () {
        let self = $(this);
        let id = $(this).closest('tr').attr('data-id');
        $.ajax({
            url: '/SGC/index.php/fruit_collection/delete_store',
            data: {id: id},
            success: function (data) {
                self.closest('tr').remove();
            }
        })
    });

};


