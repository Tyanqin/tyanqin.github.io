
let i = 0;

window.onload = function(){




}


function menuOpenCloseOnClick(){
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
    let clientHeight = document.documentElement.clientHeight
    let body = document.querySelector("body")
    let pag_title = document.querySelector(".page-title")
    let box = document.querySelector("#box")
    let menu_open_close = document.querySelector(".menu_open_close")
    let menu_open_close_span = document.querySelector(".menu_open_close span")
    let menu = document.querySelector("#menu")
    let section_box = document.querySelector(".section_box")
    let width = parseInt(this.getStyle(menu,"width"))
    if(i===0){
        this.unScroll()
        this.movePx(menu,"left",0,70,function(){
            menu_open_close.style.color = "rgba(255,255,255,0.8)"
            menu_open_close_span.innerHTML = "&#xe714;"
            pag_title.style.opacity = "0.2";
            //this.movePx(pag_title,"margin-left",300,30,function(){})
        })
        // this.movePx(section_box,"left",450,25,function(){})
        i=1
        return
    }
    if(i===1){
        this.removeUnScroll()
        menu_open_close.style.color = "#000000"
        pag_title.style.opacity = "0.8";
        this.movePx(menu,"left",width*-1,70,function(){
            menu_open_close_span.innerHTML = "&#xe729;"
            //this.movePx(pag_title,"margin-left",0,30,function(){
            //    menu_open_close_span.innerHTML = "&#xe729;"
            //})
        })
        // this.movePx(section_box,"left",0,25,function(){})

        i=0
        return
    }
}


function unScroll() {
    var top = $(document).scrollTop();
    $(document).on('scroll.unable',function (e) {
        $(document).scrollTop(top);
    })
}
function removeUnScroll() {
    $(document).unbind("scroll.unable");
}