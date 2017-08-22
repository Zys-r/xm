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






})