
window.onload = function(){
    this.setMenuHeight()
    this.scrollerEdit()
    this.loadEdit()
}

window.onscroll = function(){
     this.scrollerEdit()
}

window.onresize = function(){
    setMenuHeight()
}

/**
 * 设置目录中盒子的高度
 */
function setMenuHeight(){
    let element = document.getElementById("menu")
    let menuLeft = document.querySelector("#menu > .menu-left")
    let menuRight = document.querySelector("#menu > div:nth-child(1)")
    let menuLeftUl = document.querySelector("#menu > .menu-left > ul")
    let menuLeftUlLis = document.querySelectorAll("#menu > .menu-left > ul > li")
    let w = document.documentElement.clientWidth || document.body.clientWidth
    let h = document.documentElement.clientHeight || document.body.clientHeight
    let a = parseInt(getStyle(menuLeftUlLis[0],"height"))
    let b = parseInt(getStyle(menuLeftUlLis[0],"margin-bottom"))
    element.style.height = h+"px"
    menuLeft.style.height = h+"px"
    menuRight.style.height = h+"px"
    menuLeftUl.style.height = (a+b)*menuLeftUlLis.length+"px"


}

function loadEdit(){
    let section_ul = document.querySelector(".section_box")
    this.movePx(section_ul,"top",0,300,function(){})
}

/**
 * 鼠标移入ICON进行替换
 */
function menuCloseIcon(){
    let menu_open_close_span = document.querySelector(".menu_open_close > span")
    menu_open_close_span.innerHTML = "&#xeb91;"
}

/**
 * 鼠标移入ICON进行替换
 */
function menuCloseIconOut(){
    let menu_open_close_span = document.querySelector(".menu_open_close > span")
    menu_open_close_span.innerHTML = "&#xe729;"
}



/**
 * 设置滚动
 */
function scrollerEdit(){
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
    let clientHeight = document.documentElement.clientHeight
    console.log("scrollTop------>   "+scrollTop)
    console.log("scrollHeight------>   "+scrollHeight)
    console.log("clientHeight------>   "+clientHeight)
    let menu_close = document.querySelector(".menu_open_close")
    let main_log = document.querySelector(".main_log")
    let content_box = document.querySelectorAll(".content_box div")
    let footer = document.querySelector("#footer")
    let box = document.querySelector("#box")
    let menu_open_close_span = document.querySelector(".menu_open_close > span")

    if(scrollTop > 40){
         main_log.style.opacity = 0;
    }
    if(scrollTop < 40){
        main_log.style.opacity = 1;
    }
    if(scrollTop > 500){
        this.movePx(content_box[0],"top",0,300,function(){})
    }
    if(scrollTop > 1200){
        this.movePx(content_box[1],"top",0,300,function(){})
    }
    if(scrollTop > 1700){
        this.movePx(content_box[2],"top",0,300,function(){})
    }
    if(scrollTop > 2300){
        this.movePx(content_box[3],"top",0,300,function(){})
    }

    if(scrollTop > 3166){
        box.style.background = "rgba(0,0,0,0)"
    }else{
        box.style.background = "#FFFFFF"
    }

    if(scrollTop > 3700){
        menu_open_close_span.innerHTML = "&#xeb0a;"
    }else{
        menu_open_close_span.innerHTML = "&#xe729;"
    }

    // if(scrollHeight - scrollTop >= clientHeight){
    //     console.log(scrollHeight - scrollTop," : ",clientHeight)
    //     // box.style.background = "rgba(0,0,0,0)"
    // }
}





//阻止浏览器事件
function disabledMouseWheel() {
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
    document.addEventListener('mousewheel',scrollFunc,false);
}
//取消阻止浏览器事件
function cancelDisMouseWheel(){
    document.removeEventListener('DOMMouseScroll',scrollFunc,false);
    document.removeEventListener('mousewheel',scrollFunc,false);
}
function scrollFunc(evt) {
    evt = evt || window.event;
    if(evt.preventDefault) {
        // Firefox
        evt.preventDefault();
        evt.stopPropagation();
    } else{
        // IE
        evt.cancelBubble=true;
        evt.returnValue = false;
    }
    return false;
}

