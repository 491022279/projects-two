$(function(){
    $('.navbar-toggle.collapsed').on('click',function(e){
        $('.collapse.navbar-collapse').toggle();
        // e.stopPropagation();
    })

    $(".dropdown-toggle").on("click",function () {
       $(this).siblings().slideToggle() ;
    })



})