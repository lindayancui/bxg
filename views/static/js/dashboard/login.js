define(["jquery","cookie"],function($) {
    $(function(){
        $('form').submit(function(e){
        var username = $('#tc_name').val();
        var userpass = $('#tc_pass').val();
        
        if(username.trim() ==''){
            alert('请输入用户名')
            return false;
        }
        if(userpass.trim() == ''){
            alert('请输入密码')
            return false;
        }
        $.ajax({
            url:'/api/login',
            type:'POST',
            data:{
                tc_name:username,
                tc_pass:userpass
            },
            success:function(data){
                if(data.code == 200){
                    // console.log(data)  
                   $.cookie("userinfo", JSON.stringify(data.result), {expires: 365, path: "/"});
                   location.href = "/";
                } 
            }
        });
         return false;
     })
    })
});