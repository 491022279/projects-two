$(function(){
    //密码显示隐藏
    $('.eye').on('click', function () {
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $(this).addClass('active')
            $('.edit').find('#password').attr('type','text')
        }else{
            $(this).removeClass('active')
            $('.edit').find('#password').attr('type','password')
        }
    })

    ////////登录////////
    var flag2=false;
    var flag1=false;
    var name=$('input[name=username]');
    var pass=$('input[name=password]');
    $(".button").on("click",function(){
        var data=$("form").serializeArray();
        var postData={};
        data.forEach(function(v,i){
            postData[v.name]=v.value;
        })
        $.ajax({
            url:'/SGC/index.php/login/check',
            data:postData,
            success:function(data){
                if(data=='ok'){
                    location.href='/SGC/index.php/main';
                }else if(data=='error'){
                    $('.tip2').addClass('active').find('span').html('密码有误，请重新输入!')
                    $(".errow").addClass('active')
                }
            }
        })
        return false;
    })


    //用户名验证
    $('input[name=username]').focus(function(){
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
                        $('.right1').addClass('active');
                        $('.tip1').removeClass('active');
                        $(this).css({color:'#CF2B25'});
                        flag1 = true;
                        $("input[name=username]").addClass('usernames');

                        if(name.hasClass("usernames")&&pass.hasClass('passwords')){
                            $('input[type=submit]').addClass('active')

                        }
                    }
                    else if(data == 'error'){
                        $('.right1').removeClass('active');
                        $('.errow1').addClass('active');
                        $('.tip1').addClass('active');
                        $('.tip1 span').html('用户名不存在');
                        flag1 = false;
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

    //密码验证
    $('input[name=password]').on('input',function() {
        let password = $('input[name=password]').val();
        if( password.length>8&& password.length<18){
            $.ajax({
                url: '/SGC/index.php/login/select2',
                data: {password: password},
                success: function (data) {
                    if (data == 'ok') {
                        $('.right2').addClass('active');
                        $('.errow2').removeClass('active');
                        $('.tip2').removeClass('active');
                        $(this).css({color: '#CF2B25'});
                        flag2 = true;
                        $("input[name=password]").addClass('passwords');

                        if(name.hasClass("usernames")&&pass.hasClass('passwords')){
                            $('input[type=submit]').addClass('active')
                        }

                    }
                    else if (data == 'error') {
                        $('.floor .button').removeClass('active');
                        $('.errow2').addClass('active');
                        $('.right2').removeClass('active');
                        $('.tip2').addClass('active');
                        $('.tip2 span').html('密码有误，重新输入');
                        flag2 = false;
                    }
                }
            })
        }
    })

 })
