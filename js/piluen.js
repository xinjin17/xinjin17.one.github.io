var btn = document.getElementById("btn");
var text = document.getElementById("comment");
var ul = document.getElementById("ul_comment");
btn.onclick = function() {
	if (text.value == '') {
		alert('您没有输入内容');
		return false;
	} else {
		var p = document.createElement("p");
		p.innerHTML = text.value;
		// ul.appendChild(li);
		ul.insertBefore(p, ul.firstChild);
		text.value = '';
	}
};
