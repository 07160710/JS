var eventHander={
	addHander:function(element,event,funname){
		if(element.addEventListener){
			element.addEventListener(event,funname,false);
		}else if(element.attachEvent){
			element.attachEvent("on"+event,funname);
		}else{
			element["on"+event]=funname;
		}
	},
	removeHander:function(element,event,funname){
		if(element.removeEventListener){
			element.removeEventListener(event,funname,false);
		}else if(element.detachEvent){
			element.detachEvent("on"+event,funname);
		}else{
			element["on"+event]=null;
		}
	},
   stopup:function(e){
   	if(e.stopPropagation){
    	e.stopPropagation();
    		
    	}else{
    		e.cancelBubble=true;
    	}
   },
  	preventDefault:function(e){
  		if(e.preventDefault){
    		e.preventDefault();
    	}else{
    		e.returnValue=false;
    	}
   }

}