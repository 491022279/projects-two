$(function(){
    $(".close").on("click",function(){
        $(".box").removeClass('active');
    });
    $('#submit').on('click',function () {
        $(".box").addClass('active');
    })
    let key=$('#key');
    let divEl=$('#wrap-box');
    let lineEl=$('#linebox .line');
    key.on('input',function () {
        let length=$(this).val().length;
        render(length);
        lineEl.removeClass('active');
        if(length<1){
            length=1;
        }
        lineEl.eq(length-1).addClass('active');
    })

    key.trigger('click');

    function render(len) {
        divEl.empty();
        for(let i=0;i<len;i++){
            $('<div>').html('*').appendTo(divEl);
        }
    }
})