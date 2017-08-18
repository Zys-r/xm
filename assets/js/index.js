$(function(){
	var index=0,timer=0,len=$('.show-image li').length;
	function run(){
		timer = setInterval(function(){
			lun(function(){
				index = ++index>len-1 ? 0 : index;
			})
		},4000);
	}
	run();
	$('.hide li').mouseover(function(){
		lun(()=>{
			index = $(this).index();
		})
	}).mouseout(function(){
		clearInterval(timer);
	})
	$('.show-slider').mouseover(function(){
		clearInterval(timer);
	}).mouseout(function(){
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
})
//轮播部分结束

//搜索框代码
$('.search-top li').click(function(){
	$('.search-top i').removeClass('save');
	var indexa = $(this).index();
	$('.search-top i').eq(indexa).addClass('save');
})
//侧边栏轮播部分
var inx = 0,len1 = $('.adise-u>li').length;
$('.aside-image').clone(true).appendTo($('.adise-u'));
function run1(){
	setInterval(function(){
		$('.back>li').eq(inx).removeClass('act');
		inx++;
		$('.back>li').eq(inx).addClass('act');
		if (inx==len1) {
			$('.atc').eq(0).addClass('act');
		}
		$('.adise-u').animate({
			left:-inx*260
		},500,function(){
			if (inx==len1) {
				$(this).css('left',0);
				inx = 0;
			}
		})
	},3000)
}
run1();