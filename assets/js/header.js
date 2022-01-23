window.onload = function(){
    window.onscroll = scroll

}


function scroll(){
    // let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
    // let clientHeight = document.documentElement.clientHeight
    // console.log("scrollHeight------>   "+scrollHeight)
    // console.log("clientHeight------>   "+clientHeight)
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    let element = document.querySelector("#theme")
    // if(scrollTop/100 >= 3){
        moveRem(element,"top",-100,20)
    // }
    // if(scrollTop/100 <= 3){
    //     moveRem(element,"top",0,20)
    // }
}

// function rightBoxMove(){
//     $("#content").animate({
//         top:350
//     },{
//         easing: 'easeInSine',
//         duration:2000
//     })
// }





