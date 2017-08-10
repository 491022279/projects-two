//分类搜索轮播
window.addEventListener('load', function () {
    var box = document.querySelector('.swiper-container');
    var son = document.querySelector('.swiper-wrapper');
    var offsetX = 0, ox = 0, mx = 0;
    var bx = son.offsetWidth - box.offsetWidth;
    box.addEventListener('touchstart', function (e) {
        var ev = e.changedTouches[0];
        ox = ev.pageX;
    });
    box.addEventListener('touchmove', function (e) {
        var ev = e.changedTouches[0];
        mx = ev.pageX;
        var cx = mx - ox + offsetX;
        if (cx > 0) {
            cx = 0;
        }
        if (cx < -bx) {
            cx = -bx;
        }
        son.style.marginLeft = cx + 'px';
    })
    son.addEventListener('touchend', function (e) {
        offsetX = son.offsetLeft;
    })
})


$(function () {
    var search = $('#search');
    search.on('click', function () {
        $('.search-alert').addClass('active');
        $('.searching').focus();
    });
    $('.search-alert').on('click', function () {
        $(this).removeClass('active');
    });
    $('.search-alert').find('.active').on('click',false);

    var btn=$('.btn-wifi');
    btn.on('click', function () {
        $('.search-wifi').css('display','none');
    })

    var timerId;
    function renderList(selector,data){
        $(selector).empty();
        data.forEach(function (v,i) {
            var el=`
            <li>
            <div class="menu-left" data-id="${v.id}">
                <p id="ss">
                    ${v.ying}
                <img src="${v.jewel}" alt="">
                </p>

                <p>FROM ${v.name}</p>
                </div>
                <div class="menu-right">
                <img src="${v.spic}" alt="">
                <span>${v.omit}</span>
                </div>
                </li>
            `;
            $(el).appendTo(selector);
        })
    }
    $('.searching').on('input', function () {
        if(!$(this).val()){
            return;
        }
        clearTimeout(timerId);
        var that=this;
        timerId = setTimeout(function () {
            $.ajax({
                url:'/SGC/index.php/search/searching',
                data:{keyword:$(that).val()},
                dataType:'json',
                success: function (data) {
                    renderList('.search-menu',data);
                    $('.search-list').slideDown();
                }
            });
        },500);
    });
    $('.search-menu').on('click','#ss', function () {
        $('.searching').val($(this).text().trim());
    })
})