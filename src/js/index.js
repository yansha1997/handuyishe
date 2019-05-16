//一、banner    
//左右按钮显示
$btn = $('#banner-content span');
$('#banner-content').hover(
	function(){
		$btn.css('opacity',1);
		$btn.fadeIn(400);
	},
	function(){
		$btn.fadeOut(400);
		autoPlay();
	}
)
var ban = document.getElementById('banner-content');   //中心板块
var pic = document.querySelector('.pic');  //放图片的盒子
var imgs = pic.children;   //所有图片
var imgWidth = imgs[0].offsetWidth;   //图片宽度
var num = imgs.length;   //图片数量
var circle = document.querySelectorAll('#banner-content ul li');  //小圆点
var ltbtn = document.getElementById('leftbtn');  //左按钮
var rtbtn = document.getElementById('rightbtn');   //右按钮
var index = 0; //初始化下标
var timer = null;  //计时器
//  缓慢 移动
function animate(obj,target){
	clearInterval(obj.timer);
	var speed = obj.offsetLeft < target ? 40 : -40;
	obj.timer = setInterval(function(){		
		obj.style.left = obj.offsetLeft + speed + 'px';
		if(Math.abs(target - obj.offsetLeft) <= Math.abs(speed)){
			clearInterval(obj.timer);
			obj.style.left = target + 'px';
		}
	},30)
}
//轮播
function slider(){
	//小圆点轮播
	for(var i = 0;i < num;i ++){
		circle[i].style.background = 'dimgray';
	}
	circle[index].style.background = '#000';
	animate(pic,index * (-imgWidth));
}
//自动轮播
function autoPlay(){
	if(index == num -1){
		index = 0;
	}else{
		index ++;
	}
	slider();
}
//左按钮点击
ltbtn.onclick = function(){
	if(index == 0){
		index = num - 1;
	}else{
		index --;
	}
	slider();
}
//右按钮点击
rtbtn.onclick = function(){
	if(index == num -1){
		index = 0;
	}else{
		index ++;
	}
	slider();
}
//小圆点划入
for(var i = 0;i < num;i ++){
	circle[i].index = i;
	circle[i].onmouseenter = function(){
		index = this.index;
		slider();
	}
}
//  鼠标滑过      图片缩放
$('.scale').hover(
	function(){
		$(this).animate({"width" : 600,"left" : "-20px","top" : "-20px"},200,function(){
			$(this).animate({"width" : 580,"left" : "-10px","top" : "-10px"},200,function(){
				$(this).animate({"width" : 590,"left" : "-15px","top" : "-15px"},200)
			})
		})
	},
	function(){
		$(this).animate({"width" : 560,"left" : "0px","top" : "0px"})
	}
)
$('.scale2').hover(
	function(){
		$(this).animate({"width" : 530,"left" : "-15px","top" : "-9px"},200,function(){
			$(this).animate({"width" : 510,"left" : "-5px","top" : "-3px"},200,function(){
				$(this).animate({"width" : 520,"left" : "-10px","top" : "-6px"},200)
			})
		})
	},
	function(){
		$(this).animate({"width" : 500,"left" : "0px","top" : "0px"})
	}
)
//    鼠标滑过     图片变 文字
$('.box1').hover(
	function(){
		$(this).children('img').animate({"opacity" : 0},500);
		$(this).find('b').animate({"opacity" : 1},500);
	},
	function(){
		$(this).children('img').animate({"opacity" : 1},500);
		$(this).find('b').animate({"opacity" : 0},500);	
	}
)
//右下角   小图 轮播
//var box = document.querySelector('.right ul');  //大盒子
//var ullis = box.children;  //所有图片
//var nums = ullis.length;  //图片数量
//var liWidth = ullis[0].offsetWidth;   //图片宽度
//var ollis = document.querySelector('right ol').children;  //图片对应的文字
//var olliWidth = ollis[0].offsetHeight;
//var indexA = 0;  //初始化下标
//var lt = document.querySelector('.lt');  //左按钮
//var rt = document.querySelector('.rt');  //右按钮
//var timer = null;
//function animate1(obj,target){
//	clearInterval(obj.timer);
//	var speed = obj.offsetTop < target ? 15 : -15;
//	obj.timer = setInterval(function(){		
//		obj.style.top = obj.offsetTop + speed + 'px';
//		if(Math.abs(target - obj.offsetLeft) <= Math.abs(speed)){
//			clearInterval(obj.timer);
//			obj.style.left = target + 'px';
//		}
//	},30)
//}
//轮播
//function slider(){
//	//图片
//	animate(box,index * (-liWidth));
//	//
//	for(var i = 0;i < nums;i ++){
//		$(ollis[i]).fadeOut();
//		$(ollis[indexA]).animate({"top":'ollisWidth * indexA'},600);
//	}
//}
////自动轮播
//function autoPlay(){
//	if(indexA == nums -1){
//		indexA = 0;
//	}else{
//		indexA ++;
//	}
//	slider();
//}
////左按钮点击
//lt.onclick = function(){
//	alert(1);
//	if(indexA == 0){
//		indexA = nums - 1;
//	}else{
//		indexA --;
//	}
//	slider();
//}
////右按钮点击
//rt.onclick = function(){
//	alert(1);
//	if(indexA == nums -1){
//		indexA = 0;
//	}else{
//		indexA ++;
//	}
//	slider();
//}
 
