$(function(){
    $('#fullpage').fullpage({           //接受JSON对象
        navigation: true,
        recordHistory:true,                //是否记录历史，默认为true,浏览器的前进后退可导航。若autoScrolling:false,那么这个属性将被关闭
        menu:true,
        loopBottom:false,                  //滚动到最底部后是否滚回顶部
        anchors:['one', 'two', 'three', 'four'],//anchors定义锚链接，默认为[]
        resize:true,
        licenseKey:'YOUR_KEY_HERE',
        css3:true,
        fitToSection:true,                 //设置是否自适应整个窗口的空间，默认值：true
        sectionsColor:['hotpink', 'pink', 'green', 'orange'],//为每个section设置background-color属性
        // scrollingSpeed:700,
        paddingTop:"48px",
        controlArrows:false,               //隐藏水平箭头
        // scrollBar:true,                 //显示滚动条
        // scrollOverflow:true,            //内容超过一屏幕显示滚动条
        // navigation:true,                //是否显示导航原点

        afterLoad:function( anchorLink , index){
              console.log("anchorLink=====>   ",anchorLink)
              console.log("index=====>   ",index)
        },
    });

});