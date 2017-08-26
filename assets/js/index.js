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

// //遍历
$.get('./data.json',function(msg){
	content='';
	msg.forEach(function(value,key){
		// console.log(key);//0,1,2,3
		content+=`<div class="hot-list">`;
			value.forEach(function(v,k){
				content+=`<div class="col">`;
					v.forEach(function(x,y){
					content+=`
						<dl>
					        <dt>${x.shi}</dt>
					        <dd>
					            <a href="#" target="_blank">${x.bj}</a>
					            <a href="#" target="_blank">${x.sh}</a>   
					            <a href="#" target="_blank">${x.cq}</a>
					            <a href="#" target="_blank">${x.tj}</a>
					        </dd>
				    	</dl>
					`; 
				})		
				content+=`</div>`;
			})
		content+=`</div>`;
	})

	$('.china').html(content);
})
$('.hot>ul>li').mouseover(function(){
	var index = $(this).index()/2;
	$('.china>.hot-list').eq(index).show().siblings().hide();
})


//当季推荐部分遍历
$.get('./data1.json',function(msg){
	con='';
	msg.forEach(function(value,key){
		// console.log(value);
		con+=`<div class="tiles">`;

		value.forEach(function(v,k){
			if (v.type == "3") {
			con+=`<div class="item col3">
        			<a href="#" target="_blank">
        			<img src="assets/images/list/${v.img}" width="323" height="220">
        			<div class="title">${v.title}</div></a>
    			</div>`;		
			}else if(v.type == "4"){
				con+=`<div class="item col4">
        			<a href="#" target="_blank">
        			<img src="assets/images/list/${v.img}" width="238" height="220">
        			<div class="title">${v.title}</div></a>
    			</div>`;
			}
		})
		con+= `</div>`;	
	})			
	$('.season').html(con);	
})

$('.navbar:eq(1) ul li').mouseover(function(){
	var sy = $(this).index()/2;
	$('.season>.tiles').eq(sy).show().siblings().hide();
})

$.get('./data2.json',function(msg){
	var ject = '';
	msg.forEach(function(value,key){
		ject+=`<div class="tiles cate-tile">`;
			value.forEach(function(v,k){
				ject+=`
					<div class="item col4">
						<a href="#" target="_blank">
						<img src="assets/images/list/${v.img}" width="238" height="220">
						<div class="title">${v.title}</div>
						</a>
					</div>
				`;
			})
		ject+=`</div>`;
	})
	$('.cate').html(ject);
})

$('.row-theme .navbar li').mouseover(function(event) {
	var index = $(this).index()/2;
	$('.cate .cate-tile').eq(index).show().siblings().hide();
});

//foot fixed 
$('.toolbar>div>.btn').mouseover(function(){
	$(this).children('em').hide().show();
}).mouseout(function(){
	$(this).children('em').hide();
});
$('.toolbar>.toolbar-bot>.btn').mouseover(function(){
	console.log(11);
	$(this).siblings('.code').show();
}).mouseout(function(){
	$(this).siblings('.code').hide();
});
// var x = $(document).height();
// console.log(x);
$(window).scroll(function(){
	var x = $(this).scrollTop();
	var y = $(this).height();
	var z = $(document).height();
	if (x>450) {
		$('.toolbar-top').show();
	}else{
		$('.toolbar-top').hide();
	}
	if (z-x-y<600) {
		$('.toolbar').css({
			"position":"absolute",
			"bottom":"-600px"
		});
	}else{
		$('.toolbar').css({
			"position":"fixed",
			"bottom":"20px"
		});
	}
});

$('.toolbar1>div>.btn').mouseover(function(){
	$(this).children('em').hide().show();
}).mouseout(function(){
	$(this).children('em').hide();
});
$('.toolbar1>.toolbar-bot>.btn').mouseover(function(){
	console.log(11);
	$(this).siblings('.code').show();
}).mouseout(function(){
	$(this).siblings('.code').hide();
});
$(window).scroll(function(){
	var x = $(this).scrollTop();
	var y = $(this).height();
	var z = $(document).height();
	if (x>450) {
		$('.toolbar-top').show();
	}else{
		$('.toolbar-top').hide();
	}
	if (z-x-y<600) {
		$('.toolbar1').css({
			"position":"absolute",
			"bottom":"-2150px"
		});
	}else{
		$('.toolbar1').css({
			"position":"fixed",
			"bottom":"20px"
		});
	}
});

//xxk lb aside
$('.md-nav>.nav-item').mouseover(function(){
	$(this).find('.nav-panel').show();
	//var ix = $(this).index();
	//$('.md-nav>.nav-item').eq(ix).find('.nav-panel').show();
	//	$(this).index().eq(ix).find('.nav-panel').show(); cuowu
}).mouseout(function(){
	$(this).find('.nav-panel').hide();
});

//show lunbo
var ind = 0,time=0,lht = $('.slide-box li').length;
		
function so(){
	time = setInterval(function(){
		bo(function(){
			ind = ++ind>lht-1 ? 0 : ind;
		})
	},2000)
}
so();

$('.focus .slide').mouseover(function(){
	clearInterval(time);
}).mouseout(function(){
	so();
});

$('.thumb-box li').click(function(){
	console.log(111);
	bo(()=>{
		ind = $(this).index();
	})
})

function bo(call){
	$('.slide-box li').eq(ind).fadeOut(1000);
	$('.thumb-box li').eq(ind).removeClass('active');
	call();
	$('.slide-box li').eq(ind).fadeIn(1000);
	$('.thumb-box li').eq(ind).addClass('active');
}	

//pbl
demo('./data3.json');
function demo(aaa){
	$.get(aaa,function(msg){
	con='';
	msg.forEach(function(value,key){
	// console.log(value,key);		
		con+=`<div class="feed-item">`;
			value.forEach(function(v,k){
				con+=`
					<a href="javascript:;">
					<div class="bar clearfix">
						<span class="stat">
							<span class="num">684</span> 蜂蜂顶
							<i class="icon-hand"></i>
						</span>
						<span class="type">
							<i class="icon-line"></i>来自
							<strong>${v.yj}</strong>
						</span>
					</div>
					<div class="title">${v.nr}
					</div>
					<!--========下======-->
					<dl class="art clearfix">
						<dt>
							<img src="assets/images/show/${v.img}" alt="">
						</dt>
						<dd>
							<div class="info">${v.xq}
							</div>
							<div class="ext">
								<span class="author">
									<img src="assets/images/show/${v.img1}" alt="">${v.zz}
								</span>
								<span class="nums">${v.pl}</span>
							</div>
						</dd>
					</dl>
				</a>
				`;				
			})
		con+=`</div>`;
		con+=`<div class="hr">`;
		con+=`</div>`;	
	})
	$('.data').append(con);
})
}

var bool = true;
$(window).scroll(function(){
	loadImg();
	var x = $(window).scrollTop();
	console.log(111);
	if(bool){
		if (x >=2750) {				
			demo('./data4.json');
			$('.scri').animate({opacity:1},2000);
			bool=false;
		}
	}
})
$('.scri').click(function(){
	demo('./data4.json');
})
loadImg();
function loadImg() {
    // 1.获取滚动的距离
    var sTop = $(window).scrollTop();
    // 2.窗口的高度
    var wHeight = $(window).height();
    // 3.图片距页面顶部的距离
    $('img:not(.change)').each(function() {
        if ($(this).offset().top < sTop + wHeight) {
            $(this).attr('src', $(this).attr('_src'));
            $(this).hide().fadeIn(500);
            // 已经改变src地址的图片做个标记
            $(this).addClass('change');
        }
    })
}


















})