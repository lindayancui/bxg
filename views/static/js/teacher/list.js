define([
    'jquery',
    'template',
    'bootstrap'
], function($, template) {
    //获取列表
    $(function(){
        $.ajax({
            url:'/api/teacher',
            type:'get',
            success:function(data){
                // console.log(data)
                var html = template('teacher_list_info',data)
                $('#teacher_list_tbody').html(html);
            }
        })
        //查看模态框
        $('#teacher_list_tbody').on('click','#checkBtn',function(){
            var userId = $(this).parent().data('id');
            $.ajax({
                url:'/api/teacher/view',
                data:{
                    tc_id:userId
                },
                success:function(data){
                    // console.log(data);
                    if(data.code==200){
                        var html = template('modalTpl',data.result);
                        $('#teacherModal>.modal-dialog').html(html);
                        $('#teacherModal').modal("show");
                    }
                    
                }
            })
            return false;
        })
        //注销事件
        $('#teacher_list_tbody').on('click','#btnStatus',function(){
            var id = $(this).parent().data('id');
            var status = $(this).data('status');
            var _this = $(this);
            $.ajax({
                url:"/api/teacher/handle",
                type:'POST',
                data:{
                    tc_id:id,
                    tc_status:status
                },
                success:function(data){
                    console.log(data)
                    //tc_status==1  已注销
                    //按钮应该是启用按钮
                    if(data.code == 200){
                        if(data.result.tc_status ==1){
                            _this.removeClass('btn-success').addClass('btn-warning').text("启 用");
                        }else{
                            _this.addClass("btn-success").removeClass("btn-warning").text("注 销");
                        }
                        _this.data('status',data.result.tc_status)
                    }
                }
            })
        })
    })  
});