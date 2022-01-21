 $(function(){
     $('#box').scrolly({
         enter:function(){
             alert(456)
         }
     })

 })
// window.onload = function(){
//     let header =  document.querySelector("header")
//
//
//
// }
//
//
//
// function headerMove(element){
//     $(element).animate({
//         left: [500, 'swing'],
//         top: [200, 'easeOutBounce']
//     });
// }
//
//
// function scrollFunc(e){
//     e = e || window.event;
//     if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
//         if (e.wheelDelta > 0) { //当滑轮向上滚动时
//             alert('上滚')
//         }
//         if (e.wheelDelta < 0) { //当滑轮向下滚动时
//             alert('下滚')
//         }
//     } else if (e.detail) {  //Firefox滑轮事件
//         if (e.detail> 0) { //当滑轮向下滚动时
//             alert('下滚')
//         }
//         if (e.detail< 0) { //当滑轮向上滚动时
//             alert('上滚')
//         }
//     }
//
// }