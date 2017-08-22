$(function(){
	var index=0,timer=0,len=$('.show-image li').length;
	function run(){
		timer = setInterval(()=>{
			lun(()=>{
				index = ++index>len-1 ? 0 : index;
			})
		},4000);
	}
	run();
	$('.hide li').mouseover(function(){
		lun(()=>{
			index = $(this).index();
		})
	}).mouseout(()=>{
		clearInterval(timer);
	})
	$('.show-slider').mouseover(()=>{
		clearInterval(timer);
	}).mouseout(()=>{
		run();
	});
	function lun(cb){
              
		$('.show-image li').stop(true,true);
        
		$('.show-image li').eq(index).fadeOut(1000);
		$('.hide li').eq(index).removeClass('active');
		cb();
		$('.show-image li').eq(index).fadeIn(1000);
		$('.hide li').eq(index).addClass('active');
	}
//轮播部分结束

//搜索框代码
var arr = ["搜目的地/攻略/酒店/旅行特价","请输入国家、地区、城市名称","我要去...","产品名称/目的地/优惠"];
$('.search-top li').click(function(){
	$('.search-top i').removeClass('save');
	var indexa = $(this).index();
	$('.search-bottom input').attr("placeholder",arr[indexa])
	$('.search-top i').eq(indexa).addClass('save');
})
//侧边栏轮播部分
var inx = 0,len1 = $('.adise-u>li').length;
$('.back>li').click(function(){
	$('.back>li').removeClass('act');
	var inx = $(this).index();
	$('.back>li').eq(inx).addClass('act');
	$('.adise-u').animate({
			left:-inx*260
		},500,()=>{
			if (inx==len1) {
				$(this).css('left',0);
				inx = 0;
			}
		})
})
//热门游记
$('.clearfix>ul>li').click(function(){
	$('.clearfix>ul>li').removeClass('navhot');
	$('.cleararr').fadeOut(500);
	var sy = $(this).index();
	$('.clearfix>ul>li').eq(sy).addClass('navhot');
	$('.cleararr').eq(sy).fadeIn(500);
})

//我的活动
$('.client').hover(function() {
    //     $(this).children('.scrollBar').stop().animate({
    //         opacity: 0.8
    //     }, 400);
    // }, function() {
    //     $(this).children('.scrollBar').stop().animate({
    //         opacity: 0
    //     }, 400);
    $(this).siblings('.scrollbar').fadeIn(300);
    }, function(){
    $(this).siblings('.scrollbar').fadeOut(300);
});

    $('.client').on('mousewheel', function(event) {
        // console.log(event.deltaX, event.deltaY, event.deltaFactor);
        // event.preventDefault();
        var Top = parseInt($(this).children('.client-top').css('top'));
        var sTop = parseInt($(this).siblings('.scrollbar').css('top'));
        var maxTop = $(this).children('.client-top').height() - $(this).height();
        var maxsTop = $(this).height() - $(this).siblings('.scrollbar').height();
        console.log(maxsTop);
        Top = Top + 50 * event.deltaY;
        /*同步比例*/
        var btop = Math.abs(Top / maxTop) * maxsTop;
        if (Top <= -maxTop) {
            Top = -maxTop;
            btop = maxsTop;
        }
        if (Top >= 0) {
            Top = 0;
            btop = 0;
        }
        // console.log(sTop);
        $(this).children('.client-top').css({
            top: Top + 'px'
        });
        $(this).siblings('.scrollbar').css({
            top: btop + 'px'
        });
        return false;
    });

//reg获取value值

$('.inner-t input').on('blur',function(){
	if($(this).val() == '') {
		$('.hide').show();
	}else  if (/(13[0-9]|14[57]|15[012356789]|17[135678]|18[0-9])[0-9]{8}/.test($(this).val())==false){
		$('.hide').show().text('请输入正确手机号');
	}
})


$('.bottom a').click(function(){
	if ($(this).text() == '马上登录') {
		$('.box').stop(true,true).fadeOut(100);
		$('.bhide').stop(true,true).fadeIn(100);
	}
	if ($(this).text() == '马上注册') {
		$('.box').stop(true,true).fadeIn(100);
		$('.bhide').stop(true,true).fadeOut(100);
	}
})



$('.xh').click(function(){
	$(this).attr('href','./reg.html');
	
})

//遍历
$.get('./data.json',function(msg){
	var content = '';
	msg.forEach(function(value,key){
		content+='<div class="col">';
		value.forEach(function(v,k){					
			if (key<1) {
				content+=`	
					<dl>
				        <dt>${v.shi}</dt>
				        <dd>
				            <a href="#" target="_blank">${v.bj}</a>
				            <a href="#" target="_blank">${v.sh}</a>   
				            <a href="#" target="_blank">${v.cq}</a>
				            <a href="#" target="_blank">${v.tj}</a>
				        </dd>
				    </dl>
				`;
			}if (key==1) {
				content+=`
					<dl>
				        <dt>${v.shi}</dt>
				        <dd>
				            <a href="#" target="_blank">${v.bj}</a>
				            <a href="#" target="_blank">${v.sh}</a>   
				            <a href="#" target="_blank">${v.cq}</a>
				            <a href="#" target="_blank">${v.tj}</a>
				        </dd>
				    </dl>
				`;
			}
		})
		content+='</div>';
	})
	$('.hot-list:eq(0)').html(content);
})

// $.get('./data1.json',function(msg){
// 	var list = '';
// 	console.log(msg.theme.four.length);//7
// 	for(var i=0;i<msg.theme.one.length;i++){
// 		list+=`
			
// 		`;
// 	}
	
// })

})