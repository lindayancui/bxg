define(['jquery', 'template', 'util'], function ($, template, util,) {
    var id = util.getQueryobj().id;
    // console.log(id)
    //编辑讲师
    if (id) {
        $.ajax({
            url: "/api/teacher/edit",
            data: {
                tc_id: id
            },
            success: function (data) {
                // console.log(data)
                if (data.code == 200) {
                    data.result.title = '编辑讲师',
                        data.result.btnText = '保存',
                        data.result.url = "/api/teacher/update";
                    var html = template('teacher_add_edit_tpl', data.result);
                    $('.body,.teacher').html(html);
                    $("#save-btn").click(function () {
                        $.ajax({
                            url: "/api/teacher/update",
                            type: "post",
                            data: $("form").serialize(),
                            success: function (data) {
                                if (data.code == 200) {
                                    location.href = "/teacher/list"
                                }
                            }
                        })
                        return false;
                    });
                }
            }
        });
    } else {
        //添加讲师数据
        //手动添加一些属性给到模板里
        var obj = {
            title: "讲师添加",
            btnText: "添加",
            url: "/api/teacher/add"
        }
        var html = template('teacher_add_edit_tpl', obj);
        $('.body,.teacher').html(html);
        // console.log(html)
        $("#save-btn").click(function(){
            $.ajax({
                url: "/api/teacher/add",
                type: "post",
                data: $("form").serialize(),
                success: function(data){
                    if(data.code == 200){
                        // console.log(data)
                        // console.log($("form").serialize())
                        location.href = "/teacher/list"
                    }
                }
            })
            //阻止表单的默认提交
            return false;
        });
    }
});