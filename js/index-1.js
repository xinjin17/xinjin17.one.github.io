var imglist = document.getElementById("imglist");
var butleft = document.querySelector(".button-left");
var butright = document.querySelector(".button-right");
var icolist = document.getElementById("icolist").getElementsByTagName("li");
var icolistss = document.querySelector("#icolist");
var icolistli = document.querySelector('#imglist');

var left = 0;
var timer;

function run() {

	if (left < -4800) {
		left = 0;
	};
	var m = Math.floor(-left / 1200);

	// 图片的移动
	imglist.style.marginLeft = left + "px";
	// 图片的移动速度时间的判断
	var n = (left % 1200 == 0) ? n = 6000 : n = 0;
	left -= 10;
	timer = setTimeout(run, n);
	icochange(m);
}
// 启动函数
run();

// 图片函数定位函数
function imgchange(n) {
	let lt = -(n * 1200);
	imglist.style.marginLeft = lt + "px";
	left = lt;
}

// butleft向左图片
butleft.onclick = function() {
	let butleftgo = Math.floor(-left / 1200) - 1;
	if (butleftgo == -1) {
		butleftgo = 3;
	}
	imgchange(butleftgo);
}
// butright向右图片
butright.onclick = function() {
	let butrightgo = Math.floor(-left / 1200) + 1;
	if (butrightgo == 4) {
		butrightgo = 0;
	}
	imgchange(butrightgo);
}

// 小红点

function icochange(m) {
	for (let index = 0; index < icolist.length; index++) {
		icolist[index].style.backgroundColor = '';
	}
	if (m < icolist.length) {
		icolist[m].style.backgroundColor = 'red';
	}
}

icolistss.onclick = function() {
	var tg = event.target;
	let ico = tg.innerHTML - 1;
	imgchange(ico);
	icochange(ico);
}
icolistli.onmouseover = function() {
	clearTimeout(timer);
}

icolistli.onmouseout = function () {
	run();
}
