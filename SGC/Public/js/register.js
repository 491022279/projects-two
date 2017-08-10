/**
 * Created by lenovo on 2017/7/6.
 */
$(function () {
    //注册页js
    //开关
    var flag1 = false, flag2 = false;
    //密码显示隐藏
    $('.eye1').on('click', function () {
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $(this).addClass('active')
            $('.edit').find('.password1').attr('type','text')
        }else{
            $(this).removeClass('active')
            $('.edit').find('.password1').attr('type','password')
        }
    })
    $('.eye2').on('click', function () {
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $(this).addClass('active')
            $('.edit').find('.password2').attr('type','text')
        }else{
            $(this).removeClass('active')
            $('.edit').find('.password2').attr('type','password')
        }
    })

    //用户名验证
    $('input[type=text]').focus(function () {
        $('.tip1').removeClass('active');
        $('.right1').removeClass('active');
        $('.errow1').removeClass('active');
    })
    $('input[name=username]').on('change',function(){
        let val = $(this).val();
        var reg = /^[a-zA-z][a-zA-Z0-9_]{5,12}$/;
        if(reg.test(val)){
            let username = $('input[name=username]').val();
            $.ajax({
                url:'/SGC/index.php/login/select',
                data :{username:username},
                success:function(data){
                    if(data =='ok'){
                        $(this).css({color:'#CF2B25'});
                        $('.errow1').addClass('active');
                        $('.tip1').addClass('active');
                        $('.tip1 span').html('用户名已被注册');
                        flag1 = false;;
                    }else if(data == 'error'){
                        $('.tip1').removeClass('active');
                        $('.right1').addClass('active');
                        flag1 = true;
                    }
                }
            })
        }else{
            flag1 = false;
            $('.tip1').addClass('active');
            $('.errow1').addClass('active');
            $('.tip1 span').html('此账号格式不正确');
        }
    })

    //密码两次一致验证
    $('input[type=password]').eq(1).focus(function () {
        $('.right2,.right3').removeClass('active');
        $('.tip2').removeClass('active');
        $('.errow2,.errow3').removeClass('active');
    })

    $('input[type=password]').eq(1).on('input', function () {
        let val = $(this).val();
        if(val.length>8&&val.length<18){
            if (val == $('input[type=password]').val()) {
                flag2 = true;
                $('.right2,.right3').addClass('active');
                $('.tip2').removeClass('active');
            } else {
                flag2 = false;
                $('.floor .button').removeClass('active');
                $('.right2,.right3').removeClass('active');
                $('.tip2').addClass('active');
                $('.errow2,.errow3').addClass('active');
                $('.tip2 span').html('两次密码不一致');
                $(this).css({color: '#CF2B25'});
            }
            if (flag1 == true && flag2 == true) {
                $('.floor .button').addClass('active');
                $('input[type=submit]').on('click', function () {
                    var username = $('#username').val();
                    var password = $('#password').val();
                    $.ajax({
                        url: '/SGC/index.php/login/add',
                        data: {username: username, password: password},
                        success: function (data) {

                        }
                    })
                    location.href = '/SGC/index.php/login/login1';
                    return false;
                })
            }
        }
    })


})
