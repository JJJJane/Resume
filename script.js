
window.onload=function(){
var btns=document.getElementsByClassName('nav-btn');
var x1=document.getElementById('x1');
var x2=document.getElementById('x2');
var x3=document.getElementById('x3');
var x4=document.getElementById('x4');
var p1=document.getElementById('p1');
var p2=document.getElementById('p2');
var p3=document.getElementById('p3');
var p4=document.getElementById('p4');
var curIndex = 0;

var x=document.getElementById('nav');
$x=$("#nav");
var btn_img=$(".btn-img");

var page=document.getElementsByClassName('page');
console.log(page[0].className[9]);
function getPageIndex(){

}


 btns['0'].onclick=function(){

 		var x1=document.getElementsByClassName('page1');
 		smoothScroll(x1['0']);
        curIndex=0
 	}
 btns['1'].onclick=function(){

 		var x2=document.getElementsByClassName('page2');
 		smoothScroll(x2['0']);
        curIndex=1
 	}
 btns['2'].onclick=function(){
 	var x3=document.getElementsByClassName('page3');
 	smoothScroll(x3['0']);
    curIndex=2
 }
 btns['3'].onclick=function(){
 	var x4=document.getElementsByClassName('page4');
 	smoothScroll(x4['0']);
    curIndex=3
 }
 btns['4'].onclick=function(){

 	var x5=document.getElementsByClassName('page5');
 	smoothScroll(x5['0']);
    curIndex=4
 }
p1.onclick=function(){
 		var x2=document.getElementsByClassName('page2');
 		smoothScroll(x2['0']);
 	}
p2.onclick=function(){
 	var x3=document.getElementsByClassName('page3');
 	smoothScroll(x3['0']);
 }
p3.onclick=function(){
 	var x4=document.getElementsByClassName('page4');
 	smoothScroll(x4['0']);
 }
p4.onclick=function(){
 	var x5=document.getElementsByClassName('page5');
 	console.log('page5');
 	smoothScroll(x5['0']);
 }

x1.onmouseenter=function(){
	var timer=null;
	startMove(x1,{'width' :45});
}
x1.onmouseout=function(){
	var timer=null;
	startMove(x1,{'width' :34});
}
x2.onmouseenter=function(){
	var timer=null;
	startMove(x2,{'width' :75});
}
x2.onmouseout=function(){
	var timer=null;
	startMove(x2,{'width' :65});
}
x3.onmouseenter=function(){
	var timer=null;
	startMove(x3,{'width' :80});
}
x3.onmouseout=function(){
	var timer=null;
	startMove(x3,{'width' :66});
}
x4.onmouseenter=function(){
	var timer=null;
	startMove(x4,{'width' :80});
}
x4.onmouseout=function(){
	var timer=null;
	startMove(x4,{'width' :64});
}

var container = $(".mainboard");
var sumCount = $(".page").length;
var duration = 1050;
//时间控制
var aniTime = 0;
var tur =true
var scrollFunc = function (e) {
    e.preventDefault();
    if(tur){
      e = e || window.event;
    setTimeout(function(){
       //如果动画还没执行完，则return
    if(new Date().getTime() < aniTime + duration){
        return;
    }
    var t = 0;
    t=(e.wheelDelta)?e.wheelDelta/120:-(e.detail||0)/3;//兼容性处理
        if (t > 0 && curIndex > 0) {
            //上滚动
            movePrev();
        } else if (t < 0 && curIndex < sumCount - 1) {
            //下滚动
            moveNext();
        } 
    },500)
    }
    
};

function moveNext(){
    //获取动画开始时的时间
    $target=$(".page"+String(++curIndex+1))
    console.log($target)
    aniTime = new Date().getTime();
    smoothScroll($target[0])
}

function movePrev(){
    $target=$(".page"+String(--curIndex+1))
    console.log($target)
    aniTime = new Date().getTime();
    smoothScroll($target[0])
}
HTMLElement.prototype.stopScroll = function(){
    this.scroll({top:this.scrollTop+1})
}

function init(){
    // /*注册事件*/
    // if (document.addEventListener) {
    //      document.addEventListener('DOMMouseScroll', scrollFunc, false);
    // }
    $('body')[0].stopScroll()
    window.onmousewheel = document.onmousewheel = scrollFunc;//IE/Opera/Chrome
    container.css({
        "transition": "all 1s",
        "-moz-transition": "all 1s",
        "-webkit-transition": "all 1s"
    });
}

init();

//监听滚动条
var posi = 0; //初始默认页
window.onscroll = function() {
    //获取滚动条像素位置
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    //获取单页高度
    var heightOfOnePage = document.getElementsByClassName("page1")[0].clientHeight;
    //位于哪一页 [0-3]
    var newPosi = Math.floor(scrollTop / heightOfOnePage);
    if (posi != newPosi) {
        posi = newPosi;
        if (posi == 0) {
            refreshNavBtn();
            document.getElementById("btn1").firstChild.src = "index/u56_2.png";
        } else if (posi == 1) {
            refreshNavBtn();
            document.getElementById("btn2").firstChild.src = "index/u59_2.png";
        } else if (posi == 2) {
            refreshNavBtn();
            document.getElementById("btn3").firstChild.src = "index/u62_2.png";
        } else if (posi == 3) {
            refreshNavBtn();
            document.getElementById("btn4").firstChild.src = "index/u65_2.png";
        } else if (posi == 4) {
            refreshNavBtn();
            document.getElementById("btn5").firstChild.src = "index/u68_2.png";
        }
    }
};
}

var mo=function(e){e.preventDefault();}
function stop(){
    document.body.style.overflow='hidden';
    document.addEventListener("touchmove",mo,false);
}
function refreshNavBtn() {
    var btns = document.querySelectorAll(".nav-btn");
    btns[0].firstChild.src = "index/u56.png";
    btns[1].firstChild.src = "index/u59.png";
    btns[2].firstChild.src = "index/u62.png";
    btns[3].firstChild.src = "index/u65.png";
    btns[4].firstChild.src = "index/u68.png";
}
function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offsetTop},
        	600
        );
	}

function getStyle(obj,attr){
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			}else{
				return getComputedStyle(obj,false)[attr];
			}
		}

function startMove(obj,json,fn){
			var flag=true;
			clearInterval(obj.timer);
			obj.timer=setInterval(function(){
				for(var attr in json){
				if (attr=='opacity'){
					var curr=Math.round(parseFloat(getStyle(obj,attr))*100);
				}else{
					var curr=parseInt(getStyle(obj,attr));
				}
				var speed=(json[attr]-curr)/10;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
				if(curr!=json[attr]){
					flag=false;
				}
				if(attr=='opacity'){
					obj.style[attr]=(curr+speed)/100;
					obj.style.filter='alpha(opacity:'+(curr+speed)+')';
					}else{
						obj.style[attr]=curr+speed+'px';
					}
					if(flag){
						clearInterval(obj.timer);
						if(fn){
					fn();
				}
				}
			}
			},30);
		}



let $buttons = $('#select-btn img')
let $imgs = $('#select-btn img')
let $slides = $('#work')
let $images = $slides.children('img')
let current = 0

makeFakeSlides()

$slides.css({
    transform: 'translate(-100%)'
})

bindEvents()


let timerId = setInterval(() => {
    goToSlide(current + 1)
}, 2000)

$('.middle-anim').on('mouseenter', function () {
    window.clearInterval(timerId)
})

$('.middle-anim').on('mouseleave', function () {
    timerId = setInterval(() => {
        goToSlide(current + 1)
    }, 2000)
})

document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        window.clearInterval(timerId)
    } else {
        timerId = setInterval(() => {
            goToSlide(current + 1)
        }, 2000)
    }
})




function bindEvents() {
    $('#select-btn').on('click', 'img', function (e) {
        let $button = $(e.currentTarget)
        let index = $button.index()
        goToSlide(index)
    })
}

function goToSlide(index) {
    if (index < 0) {
        index = $buttons.length - 1
    } else if (index > $buttons.length - 1) {
        index = 0
    }
    for (let i = 0; i < $imgs.length; i++) {
        $imgs.eq(i).removeClass('active')
        // console.log($imgs.eq(i))
    }
    $imgs.eq(index).addClass('active')
    if (current === $buttons.length - 1 && index === 0) {
        $slides.css({
            transform: 'translate(' + (($buttons.length + 1) * -100) + '%)'
        }).one('transitionend', function () {
            $slides.hide().css({
                transform: 'translate(' + ((index + 1) * -100) + '%)'
            }).offset()
            $slides.show()
        })
        current = index
    } else if (current === 0 && index === $buttons.length - 1) {
        console.log(2)
        $slides.css({
            transform: 'translate(0)'
        }).one('transitionend', function () {
            $slides.hide().css({
                transform: 'translate(' + ((index + 1) * -100) + '%)'
            }).offset()
            $slides.show()
        })
        current = index
    } else {
        $slides.css({
            transform: 'translate(' + ((index + 1) * -100) + '%)'
        })
        current = index
    }
}

function makeFakeSlides() {
    let $firstCopy = $images.eq(0).clone(true) //$($images[0])
    let $lastCopy = $images.eq($images.length - 1).clone(true) //$($images[$images.length - 1])
    $imgs.eq(0).addClass('active')

    $slides.append($firstCopy)
    $slides.prepend($lastCopy)
}
