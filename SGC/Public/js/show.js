/**
 * Created by MACHENIKE on 2017/7/4.
 */
$(function () {
    let good=$('.good');
    let bad=$('.bad');
    let val=$('input:hidden');
    good.on('click',function () {
        let type;
        let id=val.val();
        type=$(this).hasClass('active')?false:true;
        $.ajax({
            url:'/SGC/index.php/home/good',
            data:{id:id,type:type},
            success:function (data) {
                good.find('span').html(data)
            }
        });
        $(this).toggleClass('active');
        return false;
    })
    bad.on('click',function () {
        let type;
        let id=val.val();
        type=$(this).hasClass('active')?false:true;
        $.ajax({
            url:'/SGC/index.php/home/bad',
            data:{id:id,type:type},
            success:function (data) {
                bad.find('span').html(data)
            }
        });
        $(this).toggleClass('active');
        return false;
    })
});