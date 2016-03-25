var EventUtil = {
	addHandler: function(element, type, handler) {
		if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		}else if (element.addEventListener) {
			element.attachEvent("on" + type, handler)
		}else {
			element["on" + type] = handler;
		}
	},
	getTarget: function(event) {
		return event.target || event.srcElement;
	},
  getEvent:function(event) {
    return event ? event : window.event;
  }
}
function creat0xRandom () {	         
    return 'rgb('+ Math.floor(Math.random() * 255) +','+ Math.floor(Math.random() * 255)+','+Math.floor(Math.random() * 255)+')';
}

var divContent = document.querySelector('.content');
window.last = divContent;
EventUtil.addHandler(divContent, "click", function(event) {
  window.last.style.backgroundColor = "#fff";
  var target = EventUtil.getTarget(event);
  window.last = target;
  target.style.backgroundColor = creat0xRandom ();
   return target;
},false)


