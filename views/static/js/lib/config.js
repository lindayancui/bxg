require.config({
    baseUrl:"/views/assets",
    paths:{
        jquery:"./jquery/jquery",
        cookie:"./jquery-cookie/jquery.cookie",
        template:"./artTemplate/template",
        bootstrap: "./bootstrap/js/bootstrap",
        util:"../static/js/lib/util",
        form:"./jquery-form/jquery.form",
        echarts:"./echarts/echarts.min",
        nprogress:"./nprogress/nprogress",
        datepicker:"./bootstrap-datepicker/js/bootstrap-datepicker",
        datepickerCN: "./bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min",
        validate:"./jquery-validate/jquery-validate",
        ckeditor:"./ckeditor/ckeditor"
    },
    shim:{
        bootstrap:{
            deps: ["jquery"]
        },
        datepickerCN:{
            deps:["jquery"]
        },
        validate:{
            deps:["jquery"]
        },
        ckeditor:{
            exports: "CKEDITOR"
        }
    }
})