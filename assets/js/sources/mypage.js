$(function(){

    let navigationUl_Li = document.querySelectorAll(".navigation-ul > li");
    let navigationWrapper = document.querySelector(".navigation-wrapper")
    navigationWrapper.style.opacity = "0"                        //初始化导航栏透明度为0
    navigationUl_Li[0].style.background = "#EEEEEE"    //初始化第一个元素的背景设置

    $('#fullpage').fullpage({           //接受JSON对象
        navigation:true,                   //是否显示导航原点
        recordHistory:true,                //是否记录历史，默认为true,浏览器的前进后退可导航。若autoScrolling:false,那么这个属性将被关闭
        menu:true,
        loopBottom:false,                  //滚动到最底部后是否滚回顶部
        anchors:['one', 'two', 'three', 'four'],//anchors定义锚链接，默认为[]
        resize:true,
        licenseKey:'YOUR_KEY_HERE',
        css3:true,
        fitToSection:false,                 //设置是否自适应整个窗口的空间，默认值：true
        sectionsColor:['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],//为每个section设置background-color属性
        // scrollingSpeed:700,
        paddingTop:"48px",
        controlArrows:false,            //隐藏水平箭头
        // scrollBar:true,                 //显示滚动条
        scrollOverflow:true,            //内容超过一屏幕显示滚动条
        navigationPosition:"top",     //导航小圆点的位置
        slidesNavigation:true,

        afterLoad:function(anchorLink,index){     //当点击导航时，将点击的导航变色同时清空其它的导航背景色
            if(index+"" !== "1"){
                navigationWrapper.style.opacity = "1"  //当导航下标不等于1时，显示导航栏
            }else{
                navigationWrapper.style.opacity = "0" //当导航下标为1时，隐藏导航栏
            }

            for(let i = 0;i < navigationUl_Li.length;i++){
                navigationUl_Li[i].style.background = ""
                if(index+"" === navigationUl_Li[i].id+""){
                    navigationUl_Li[i].style.background = "#EEEEEE"
                }
            }
        },
    });








});