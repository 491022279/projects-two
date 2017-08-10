window.addEventListener('load',function(){
    let min=document.querySelector('.min')
    let imgbox=document.querySelector('.imgbox');
    let li=document.querySelectorAll('.dian>li');
    let offset=0;
    let mx=0,xx=0;
    let imgWidth=min.offsetWidth;
    imgbox.innerHTML+=imgbox.innerHTML;
    let length=imgbox.children.length;
    imgbox.style.width = length * imgWidth + 'px';
    function move(e){
            let num=Math.round(imgbox.offsetLeft/imgWidth);
            if(num==0){
                num=-3
            }
            if(num==1-length){
                num=-2
            }
            imgbox.style.left=num * imgWidth + 'px';
            imgbox.style.transition='';
            let ev=e.changedTouches[0];
            mx=ev.pageX;
            offset=imgbox.offsetLeft;
    }
    function move1(e){
        let ev=e.changedTouches[0];
        xx=ev.pageX;
        imgbox.style.left=offset + (xx - mx) + 'px';
    }
    imgbox.addEventListener('touchstart',move);
    imgbox.addEventListener('touchmove',move1)
    imgbox.addEventListener('touchend',function(){
        let num=Math.round(this.offsetLeft / imgWidth);
        imgbox.style.transition='0.5s'
        imgbox.style.left=num * imgWidth + 'px';
        let yu=Math.abs(num%3)
        for(let i=0;i<li.length;i++){
            li[i].className='dian1'
        }
        li[yu].className='tiao'
        if(yu==2){
            var divs=$("<a href='/SGC/index.php/main'>即刻体验</a>")
            divs.addClass("experience");
            divs.appendTo($(".dian"));
            imgbox.removeEventListener('touchstart',move);
            imgbox.removeEventListener('touchmove',move1);
        }
    })
})