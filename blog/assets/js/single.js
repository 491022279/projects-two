$(function(){
    var good=$('.fa-heart');
    var bad=$('.fa-comment');
    good.on('click', function () {
        var url;
        if($(this).hasClass('active')){
            url='/blog/index.php/home/min_good';
        }else{
            url='/blog/index.php/home/add_good';
        }
        $.ajax({
            url:url,
            data:{article_id:$("input:hidden").val()},
            success: function (data) {
                good.html(data);
            }
        });
        $(this).toggleClass('active');
    });
    bad.on('click', function () {
        var url;
        if($(this).hasClass('active')){
            url='/blog/index.php/home/min_bad';
        }else{
            url='/blog/index.php/home/add_bad';
        }
        $.ajax({
            url:url,
            data:{article_id:$("input:hidden").val()},
            success: function (data) {
                bad.html(data);
            }
        });
        $(this).toggleClass('active');
    })
})