//一、商品轮播   及放大镜
//获取页面元素
var bigimgs = document.querySelectorAll('.big li');   //大图
var smallimgs = document.querySelectorAll('.small li');  //小图
var num = smallimgs.length;  //图片数量
var index = num - 1;//初始化下标
//var magnifier = document.querySelector('.magnifier');
//var mark = document.getElementById('lt-mark');
//var go = document.querySelector('.go');
//var bigPics = magnifier.children;
//遍历  小图   轮播
for(var i = 0;i < num;i ++){
	smallimgs[i].index = i;
	smallimgs[i].onmouseenter = function(){
		index = this.index;
		for(var i = 0;i < num;i ++){
			bigimgs[i].style.opacity = 0;
//			bigPics[i].style.opacity = 0;
			smallimgs[i].style.border = 0;
		}
		bigimgs[index].style.opacity = 1;
//		bigPics[index].style.opacity = 1;
		smallimgs[index].style.border = '1px solid #000';
	}
}
////鼠标移入遮罩层     
//mark.onmouseenter = function(){
//	go.style.display = 'block';
//	magnifier.style.display = 'block';
//}
////鼠标移出遮罩层
//mark.onmouseleave = function(){
//	go.style.display = 'none';
//	magnifier.style.display = 'none';
//}
////鼠标移动     滑块移动
//mark.onmousemove = function(evt){
//	var e = evt || window.event;
//	var left = e.offsetX - go.offsetWidth / 2;
//	var top = e.offsetY - go.offsetHeight / 2;
//	//设置边界
//	if(left <= 0){
//		left = 0;
//	}else if(left >= mark.offsetWidth-go.offsetWidth){
//		left = mark.offsetWidth-go.offsetWidth;
//	}
//	if(top <= 0){
//		top = 0;
//	}else if(top >= mark.offsetHeight - go.offsetHeight){
//		top = mark.offsetHeight - go.offsetHeight;
//	}
//	go.style.left = left + 'px';
//	go.style.top = top + 'px';
//	//滑块移动比例   （滑块当前位置/滑块能移动的宽度）
//	var PX = go.offsetLeft / (mark.offsetWidth - go.offsetWidth);
//	var PY = go.offsetTop / (mark.offsetHeight - go.offsetHeight);
//	//大图比例
//	bigPics[index].style.left = PX * (magnifier.offsetWidth - bigPics[0].offsetWidth) + 'px';
//	bigPics[index].style.top = PY * (magnifier.offsetHeight - bigPics[0].offsetHeight) + 'px';
//}
//二、地址   框
var address = document.querySelector('.address');
var mark = document.getElementById('mark');
address.onclick = function(){
	mark.style.display = 'block';
}
var lis = document.querySelectorAll('#pro2-content .center .box2 ul li');
var btn = document.querySelector('.btn');
var num2 = lis.length;
var index2 = 0;
for(var i = 0;i < num2;i ++){
	lis[i].index = i;
	lis[i].onclick = function(){
		//点击下一个    让以前所有背景去掉
		for(var i = 0;i < num2;i ++){
			lis[i].style.background = '';
		}
		index2 = this.index;
		lis[index2].style.background = 'red';
		mark.style.display = 'none';
	}
}
btn.onclick = function(){
	mark.style.display = 'none';
}
//三、尺寸
var sizelis = document.querySelectorAll('.size li');
var num3 = sizelis.length;
function select(obj,num){
	for(var i = 0;i < num;i ++){
		obj[i].index = i;
		//选中后  边框变红色
		obj[i].onclick = function(){
			//点击下一个    让以前所有边框去掉
			for(var i = 0;i < num;i ++){
				obj[i].style.borderColor = '';
			}
			index = this.index;
			obj[index].style.borderColor = 'red';
		}
	}
	return index;
}
select(sizelis,num3);
//主要颜色
var colorlis = document.querySelectorAll('.pri-color li');
var num4 = colorlis.length;
select(colorlis,num4);
//四、数量 的按钮事件
var otxt = document.getElementById('txt');
var otop = document.querySelector('.num .top');
var obottom = document.querySelector('.num .bottom');
var index = 1;
//  
otop.onclick = function(){
	index ++;
	otxt.value = index;
}
obottom.onclick = function(){
	if(index > 1){
		index --;
//		alert(index);
		otxt.value = index;
	}				
}
otxt.onblur = function(){
	if(isNaN(otxt.value) || parseInt(otxt.value) != otxt.value || otxt.value < 1){
		otxt.value = 1;
	}
}
//
