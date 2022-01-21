  /**
 * 
 * @param {Object} obj    要执行动画的对象
 * @param {Object} attr   属性
 * @param {Object} target 执行动画的目标位置
 * @param {Object} speed  移动的速度
 * @param {Object} callback  动画执行完毕，执行的函数
 */
function movePx(obj, attr, target, speed, callback) {
	clearInterval(obj.timer);
    console.log(234)
	var current = parseInt(getStyle(obj, attr));
	if(current > target) {
		speed = -speed;
	}

	obj.timer = setInterval(function() {
		var oldValue = parseInt(getStyle(obj, attr));
		var newValue = oldValue + speed;

		if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
			newValue = target;
		}

		obj.style[attr] = newValue + "px";
		if(newValue == target) {
			clearInterval(obj.timer);
			callback && callback();
		}
	}, 50);
};


  function moveRem(obj, attr, target, speed, callback) {
	  clearInterval(obj.timer);
	  var current = parseInt(getStyle(obj, attr));
	  if(current > target) {
		  speed = -speed;
	  }

	  obj.timer = setInterval(function() {
		  var oldValue = parseInt(getStyle(obj, attr));
		  var newValue = oldValue + speed;

		  if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
			  newValue = target;
		  }

		  obj.style[attr] = newValue + "rem";
		  if(newValue == target) {
			  clearInterval(obj.timer);
			  callback && callback();
		  }
	  }, 5);
  };

function getStyle(obj, name) {

	if(window.getComputedStyle) {
		return getComputedStyle(obj, null)[name];
	}
	return obj.currentStyle[name];
}

function hassClass(obj, cn) {
	var reg = new RegExp("\\b" + cn + "\\b");
	return reg.test(obj.className);
}

function addClass(obj, cn) {
	var reg = new RegExp("\\b" + cn + "\\b");
	return reg.test(obj.className)
}

function removeClass(obj, cn) {
	var reg = new RegExp("\\b" + cn + "\\b");
	obj.className = obj.className.replace(reg, "");
}

function toggleClass(obj, cn) {
	if(hassClass(obj, cn)) {
		return removeClass(obj, cn);
	} else {
		return addClass(obj, cn);
	}

}

  /**
   * 获取滚动条距离顶端的距离
   * @return {}支持IE6
   */
  function getScrollTop() {
	  var scrollPos;
	  if (window.pageYOffset) {
		  scrollPos = window.pageYOffset; }
	  else if (document.compatMode && document.compatMode != 'BackCompat')
	  { scrollPos = document.documentElement.scrollTop; }
	  else if (document.body) { scrollPos = document.body.scrollTop; }
	  return scrollPos;
  }

