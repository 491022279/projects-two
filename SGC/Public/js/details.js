window.onload = function(){

    // 禁止选中文字
    document.onselectstart = function(){
        return false;
    }

    // 获取dom对象
    function dom(className){
        return document.querySelector(className);
    }

    var add,reduce,num,price,step,total=0,nums=0,number,orprice=36;

    add = dom('.add');
    reduce = dom('.reduce');
    num = dom('.num');
    price = dom('.price-p');
    step=500;



    // 增加
    add.onclick = function(){
        // number++;
        nums = parseInt(num.value);
        total=nums+=step;
        num.value=total+'g';
        var priceCon = price.innerHTML;
        var i = priceCon.substring(1,priceCon.length);
        i=Number(i)+orprice;
        price.innerHTML='¥ '+i+'.00';
    }

    // 减少
    reduce.onclick = function(){

        nums = parseInt(num.value);
        if(nums){
            total=nums-=step;
        }

        var priceCon = price.innerHTML;
        var i = priceCon.substring(1,priceCon.length);
        i=Number(i)-orprice;
        if(total==0){
            num.value=0;
            price.innerHTML=0;
        }else{
            num.value=total+'g';
            price.innerHTML='¥ '+i+'.00';

        }

    }


    // 输入数字
    num.onkeyup = function(){
        var oldValue = this.value;
        var newValue = Number(oldValue.substring(0,oldValue.length-1));
        console.log(newValue,isNaN(newValue));
        if(isNaN(newValue)){
            alert('您输入的有误,请重新输入!!!');
            this.value='500g';
            price.innerHTML='¥ 36.00';
        }else{
            var priceCon = price.innerHTML;
            var i = priceCon.substring(1,priceCon.length);
            i=Math.floor(newValue*36/500);
            price.innerHTML='¥ '+i+'.00';
        }
    }

}
