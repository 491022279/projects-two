$(function(){
    var urlEl = $('input[name=url]');


    function render(data){
        $.each(data,function(i,v){
            var el=
                `
                <tr data-id="${v.id}">
                 <td>${v.id}</td>
                 <td>
                 <input type="text" value="${v.name}" class="name">
                 </td>
                 <td>
                 <!--<input type="text" value="${v.url}" class="url">-->
                 <img src="${v.url}" alt="" class="url">
                 </td>
                 <td>
                 <input type="text" value="${v.cid}" class="cid">
                 </td>
                 <td>
                 <a class="delete" href="#">删除</a>
                 <a href="/App/index.php/singer">增加</a>
                 </td>
                </tr>
              `
            $(el).appendTo(tbodyEl);
        })
    }

    submitEl.on('click',function(){
        //e.preventDefault();
        var value=$('#form').serializeArray();
        var formData = new FormData($('#form')[0]);
        $.ajax({
            url:'/App/index.php/geshous/add_geshous?',
            processData:false,
            contentType:false,
            type:'post',
            data:formData,
            success:function(data){
                //  var el =
                //      `
                //<tr data-id="${data}">
                //   <td>${data}</td>
                //   <td>
                //      <input type="text" class="name" value="${value[0].value}">
                //   </td>
                //   <td>
                //   <!--<input type="text" value="${value[1].value}" class="url">-->
                //   <img src="${value[1].value}" alt="" class="url">
                //   </td>
                //   <td>
                //   <!--<input type="text" value="${value[2].value}" class="cid">-->
                //   </td>
                //   <td>
                //   <a class="delete" href="#">删除</a>
                //   </td>
                //</tr>
                //`
                //  $(el).prependTo(tbodyEl);
                location.href=location.pathname +"#list";
                nameEl.add(urlEl).add(cidEl).val('');
            }
        })
        return false;
    })

    tbodyEl.on('click','.delete',function(){
        //closest 最近的父元素
        var trEl = $(this).closest('tr');
        var id = trEl.attr('data-id');
        $.ajax({
            url:'/App/index.php/geshous/delete_geshous',
            data:{id:id},
            success:function(data){
                trEl.detach();
            }
        })
    })

    tbodyEl.on('change','.name,.url,.cid',function(){
        var id = $(this).closest('tr').attr('data-id');
        var value = $(this).val();
        var key =$(this).attr('class');
        $.ajax({
            url:'/App/index.php/geshous/update_geshous',
            data:{key:key,value:value,id:id},
            success:function(data){

            }
        })
    })

    $.ajax({
        url:'/App/index.php/geshous/select_geshous',
        success:function(data){
            data=JSON.parse(data);
            render(data);
        }
    })
})