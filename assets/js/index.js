window.onload = function(){
    // test();
}

function leftBoxMoveNarrow(){
    $("#left_box").animate({
        width:"80%"
    },{
        easing: 'easeInSine',
        duration:200
    })
}
function leftBoxMoveAmplification(){
    $("#left_box").animate({
        width:"100%"
    },{
        easing: 'easeInSine',
        duration:200
    })
}

function rightBoxMove(){
    $("#right_box").animate({
        top:0
    },{
        easing: 'easeInSine',
        duration:200
    })
}

function rightBoxMoveRe(){
    $("#right_box").animate({
        top:"-750px"
    },{
        easing: 'easeInSine',
        duration:500
    })
}



function test(){
    let box = document.querySelector("#box");
    this.movePx(box,"top",50,5,function(){

    })
}
