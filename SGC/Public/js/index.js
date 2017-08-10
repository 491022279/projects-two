$(function () {
//        //轮播
//        let win = document.querySelector(".win");
//        let imgBox = document.querySelector('.imgBox');
//        let imgWidth = win.offsetWidth;
//        let offset = 0, ox = 0;
//        imgBox.innerHTML += imgBox.innerHTML;
//        let length = imgBox.children.length;
//        imgBox.style.width = length * imgWidth + 'px';
//
//        //轮播点
//        let btn = document.querySelectorAll('.button');
//        imgBox.addEventListener('touchstart', function (e) {
//            let ev = e.changedTouches[0];
//            let num = Math.round(imgBox.offsetLeft / imgWidth);
//            if (num == 0) {
//                num = -5;
//            }
//            if (num == 1 - length) {
//                num = -4;
//            }
//            let nums = Math.abs(num % 5);
//            for (let i = 0; i < btn.length; i++) {
//                btn[i].className = 'button';
//            }
//            $('.button').eq(nums).addClass('hotss');
//            imgBox.style.transition = "";
//            imgBox.style.left = num * imgWidth + 'px';
//            ox = ev.pageX;
//            offset = imgBox.offsetLeft;
//        })
//        imgBox.addEventListener('touchmove', function (e) {
//            let ev = e.changedTouches[0];
//            let cx = ev.pageX;
//            imgBox.style.left = offset + (cx - ox) + 'px';
//        })
//        imgBox.addEventListener('touchend', function () {
//            let num = Math.round(imgBox.offsetLeft / imgWidth);
//            imgBox.style.transition = "0.5s";
//            imgBox.style.left = num * imgWidth + 'px';
//        })
//
//    //选项卡
//    //$('.Control .item').on('click',function(){
//    //    $('.Control .item').removeClass('active');
//    //    $(this).addClass('active');
//    //    $('.hot_products .food').removeClass('display').eq($(this).index()).addClass('display');
//    //})
    let tab=$('.Control .item');
    let content = $('.hot_products .food');
    let lists = $('.fruit_list .lists');
    tab.on('click',function (e) {
        if($(this).hasClass('active')){
            return;
        }
        tab.add(content).add(lists).removeClass('active');
        $(this).addClass('active');
        let index = $(this).index();
        if(index==2){
            content.eq(index-1).addClass('active');
            lists.eq(index-1).addClass('active');
        }
        content.eq(index).addClass('active');
        lists.eq(index).addClass('active');

    });

        var myScroll = new IScroll('.scrolls', {
            mousewheel:true,
            click:true,
        });

//
});