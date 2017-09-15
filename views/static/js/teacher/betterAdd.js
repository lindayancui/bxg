define(["jquery", "template", "util", "form","datepicker","datepickerCN","validate"], 
function($, template, util){
    var id = util.getQueryobj().id;
    if(id){
        $.ajax({
            url: "/api/teacher/edit",
            data: {
                tc_id: id
            },
            success: function(data){
                if(data.code == 200){
                    data.result.title = "编辑讲师";
                    data.result.btnText = "保 存";
                    data.result.url = "/api/teacher/update";
                    renderData(data.result);
                }
            }
        })
    }else{ 
        var obj = {
            title: "添加讲师",
            btnText: "添 加",
            url: "/api/teacher/add"
        }
        renderData(obj);
    }

    function renderData(data){
        var html = template("teacher_add_edit_tpl", data);
        $(".body,.teacher").html(html);
        //日期控件
        $("input[name=tc_join_date]").datepicker({
            format: "yyyy-mm-dd",
            autoclose: true,
            language: "zh-CN"
        })
        //表单验证
        $('form').validate({
            sendForm:false,
            onBlur: true,
            onChange:true,
            valid:function(){
                $(this).ajaxSubmit({
                    success:function(data){
                        if(data.code==200){
                            location.href ="/teacher/list"
                        }
                    }
                })
            },
            //匹配不对时出现下面的提示信息
            description:{
                name:{
                    required:"姓名不能为空",
                },
                pass:{
                    required:"密码不能为空",
                    pattern:"请输入6-15位的数字或字母"
                },
                date:{
                    required:"请选择入职时间"
                }
            },
            eachValidField:function(){
                this.parent().parent().addClass('has-success').removeClass('has-error');
            },
            eachInvalidField:function(){
                this.parent().parent().addClass('has-error').removeClass('has-success')
            }
        })
    }
    //给保存按钮注册点击事件
    // $(".body,.teacher").on("submit", "form", function(){
    //     $(this).ajaxSubmit({
    //         success: function(data){
    //             if(data.code == 200){
    //                 location.href = "/teacher/list"
    //             }
    //         }
    //     })
    //     return false;
    // });
    
})