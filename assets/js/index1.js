$(function(){
	$('.word').click(function(){
		if ($('.inner-t input:eq(0)').val() == '') {
			$('.hide').show().text('账号不能为空');
		}

	})
	$('.inner-b button').click(function(){
		if ($('.inner-t input:eq(0)').val() !='' && $(this).val() == '') {
			$('.hide').show().text('密码不能为空');
		}
		return false;
	})


	$('.inner-t input:eq(0)').blur(function(){	
	if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test($(this).val()) == false) {
		$('.hide').show().text('邮箱格式不正确');
		}else{
			$('.hide').show().text('邮箱可用');
		}
	})




// !email.macth(/^[A-z0-9_.]+@[A-z0-9]+\.[a-z]{2,8}(\.cn)?$/)

//personal 
$('.head-ms').mouseover(function(){
	console.log(11);
	$('.group-a').css({
		display: 'block'
	});
}).mouseout(function(){
	$('.group-a').css({
		display: 'none'
	});
});

$('.head-user').mouseover(function(){
	console.log(11);
	$('.menu').css({
		display: 'block'
	});
}).mouseout(function(){
	$('.menu').css({
		display: 'none'
	});
});

//侧边栏选项卡
var arr = ["-22px 0","-22px -22px","-22px -44px","-22px -66px","-22px -154px","-22px -176px","-22px -198x"];
var arr1 = ["0 0","0 -22px","0 -44px","0 -66px","0 -154px","0 -176px","0 -198x"];
var suoyin = 0;
$('.left a').click(function(){
	$('.left a').eq(suoyin).find('i').css('background-position',arr1[suoyin]);
	var index = $(this).index();
	suoyin = index;
	console.log(suoyin);
	$(this).addClass('on').siblings().removeClass('on');
	$(this).find('i').css('background-position',arr[suoyin]);
});













})