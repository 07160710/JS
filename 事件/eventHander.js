var eventHander{
	addHander:function(element,event,functionname){
		if(element.addEventListener){
			element.addEventListener(event,functionname,false);
		}else if(element.attachEvent){
			element.attachEvent("on"+event,functionname);
		}else{
			element["on"+event]=functionname;
		}
	},
	removeHander:function(element,event,functionname){
		if(element.removeEventListener){
			element.removeEventListener(event,functionname,false);
		}
	},
}

