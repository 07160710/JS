eventHander.addHander(window,"load",init);

function init(){
	var div1=document.createElement("div");
	div1.setAttribute("id","div1");
	document.body.appendChild(div1);

	var herfs=document.getElementsByTagName("a");
	for(var i=0;i<herfs.length;i++){
		eventHander.addHander(herfs[i],"mouseover",fun1);
		eventHander.addHander(herfs[i],"click",fun2);
	}
}
function fun1(){
	var e=event||window.event;
	var herf=e.srcElement;

	var path=herf.getAttribute("href");
	var newimg=document.createElement("img");
	newimg.setAttribute("src",path);
	newimg.setAttribute("style","width:150px;height:150px");
	var div1=document.getElementById("div1");
	div1.innerHTML="";
	div1.appendChild(newimg);
}
function fun2(){
	var e=event||window.event;
	eventHander.preventDefault(e);
}
