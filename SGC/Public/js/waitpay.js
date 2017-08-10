/**
 * Created by MACHENIKE on 2017/7/5.
 */
$(function () {
    let all=$('#all');
    let waitpaybox=$('#waitpaybox');
    let waitpay=$('#waitpay');
    let payed=$('#payed');
    all.on('click',function () {
        $('.payitem,.paybox').removeClass('active');
        if($(this).hasClass('active')){
            return
        }
        $(this).add(payed).addClass('active');
    });
    waitpaybox.on('click',function () {
        $('.payitem,.paybox').removeClass('active');
        if($(this).hasClass('active')){
            return
        }
        $(this).add(waitpay).addClass('active');
    })
});
