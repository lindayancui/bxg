define([
	"jquery",
	"template",
	"nprogress",
	"cookie",
], function ($, template,NProgress) {
	NProgress.start();
	$(function () {
		NProgress.done();
		if(location.pathname != "/dashboard/login"){
			if(!$.cookie("PHPSESSID")){
				location.href = "/dashboard/login";
			}
			//1. 从cookie中获取用户存储好的用户信息
			var userinfo = JSON.parse($.cookie("userinfo"));
			// console.log(userinfo);
			//2. 使用模板引擎将对象渲染到用户信息的模板中去
			var html = template("profile_tpl", userinfo);
			$("#profile").html(html);
		}

		///退出登录
			$('#logout_btn').click(function(){
				$.ajax({
					url:"/api/logout",
					type:'post',
					success:function(data){
						console.log(data)
						if(data.code ==200){
							location.href ="/dashboard/login"
						}
					}
				})
			})
		//aside
		$('.navs>ul>li>ul').parent().click(function(){
			$(this).children('ul').stop().slideToggle();
		})

		$('.navs a').each(function(index,el){
			if($(el).attr('href')==location.pathname){
				$(el).addClass('active')
			}
		})
	})

});
