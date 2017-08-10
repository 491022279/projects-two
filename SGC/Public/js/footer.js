$(function(){
    var index=parseInt($('#hidden').val());
    $("footer div").removeClass('active');
    $("footer div").eq(index).addClass('active');

    $("footer ul li").on("click",function(){
        //$("footer div").removeClass('active');
        //$(" footer a").removeClass('active');
        $(this).find('footer div').addClass('active');
        $(this).find('footer a').addClass("active");
    })
})