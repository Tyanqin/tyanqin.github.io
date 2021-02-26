window.onload = function(){
    // document.querySelector("#bold-wrapper .bold-content-middle").innerHTML = marked(
    //     "# CSS3\n" +
    //     "\n" +
    //     "## animation\n" +
    //     "\n" +
    //     "HTML5语法：\n" +
    //     "\n" +
    //     "```html\n" +
    //     "animation: name duration timing-function delay iteration-count direction;\n" +
    //     "```\n" +
    //     "\n" +
    //     "JAVAScript语法：\n" +
    //     "\n" +
    //     "```js\n" +
    //     "object.style.animation=\"mymove 5s infinite\"\n" +
    //     "```\n" +
    //     "\n" +
    //     "请始终规定 animation-duration 属性，否则时长为 0，就不会播放动画了。\n" +
    //     "\n" +
    //     "| 值                        | 描述                                                         |\n" +
    //     "| ------------------------- | ------------------------------------------------------------ |\n" +
    //     "| animation-name            | 规定需要绑定到选择器的 keyframe 名称。                       |\n" +
    //     "| animation-duration        | 规定完成动画所花费的时间，以秒或毫秒计。                     |\n" +
    //     "| animation-timing-function | 规定动画的速度曲线。指定动画将如何完成一个周期。             |\n" +
    //     "| animation-delay           | 规定在动画开始之前的延迟。                                   |\n" +
    //     "| animation-iteration-count | 规定动画应该播放的次数。                                     |\n" +
    //     "| animation-direction       | 规定是否应该轮流反向播放动画。                               |\n" +
    //     "| animation-fill-mode       | 规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。 |\n" +
    //     "| animation-play-state      | 指定动画是否正在运行或已暂停。                               |\n" +
    //     "\n" +
    //     "##animation-timing-function\n" +
    //     "\n" +
    //     "| 值                    | 说明                                                         |\n" +
    //     "| --------------------- | ------------------------------------------------------------ |\n" +
    //     "| linear                | 动画从头到尾的速度是相同的。该设置只会动行一次。             |\n" +
    //     "| ease                  | 默认。动画以低速开始，然后加快，在结束前变慢。               |\n" +
    //     "| ease-in               | 动画以低速开始。                                             |\n" +
    //     "| ease-out              | 动画以低速结束。                                             |\n" +
    //     "| ease-in-out           | 动画以低速开始和结束。                                       |\n" +
    //     "| cubic-bezier(n,n,n,n) | 在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。 |\n" +
    //     "| step-start            | 在变化过程中，都是以下一帧的显示效果来填充间隔动画           |\n" +
    //     "| step-end              | 在变化过程中，都是以上一帧的显示效果来填充间隔动画           |\n" +
    //     "| steps()               | 可以传入两个参数，第一个是一个大于0的整数，他是将间隔动画等分成指定数目的小间隔动画，然后根据第二个参数来决定显示效果。第二个参数设置后其实和step-start，step-end同义，在分成的小间隔动画中判断显示效果。 |\n" +
    //     "\n" +
    //     "`cubic-bezier(n,n,n,n)`称为三次贝塞尔曲线，速度曲线。\n" +
    //     "`cubic-bezier(n,n,n,n)`曲线定制网站地址：http://cubic-bezier.com/#.23,.66,.76,.52\n" +
    //     "小球落地又弹起demo地址：http://codepen.io/aSuncat/pen/gwLBWz\n" +
    //     "我不知道这个cubic-bezier曲线是怎么算出来的，难道是要靠自己试出来的嘛，不知道有没有人知道怎么算出来的。???\n" +
    //     "不同值之间差异demo地址（4个方块背景颜色变化）：http://codepen.io/aSuncat/pen/JRRzax\n" +
    //     "demo解析：`step-start`：20%(background: green;)到60%(background: blue;)之间，显示的是60%的效果(background: blue;)\n" +
    //     "`step-end`：与step-start相反，20%(background: green;)到60%(background: blue;)之间，显示的是20%的效果(background: green;)\n" +
    //     "`steps(1, start) `等于`step-start`，`steps(1,end)`等于`step-end`\n" +
    //     "`steps`函数的工作机制："
    // )

    var rendererMD = new marked.Renderer();
    var markdownString = '```js\n' +
        'object.style.animation="mymove 5s infinite";\n' +
        'object.style.animation="mymove 5s infinite";\n' +
        'object.style.animation="mymove 5s infinite";\n' +
        'object.style.animation="mymove 5s infinite";\n' +
        'object.style.animation="mymove 5s infinite";\n' +
        '```';
    marked.setOptions({
        renderer: rendererMD,
        highlight: function (code) {
            var strs = new Array();
            strs = code.split(";")
            var markDowns = null
            for(var i = 0;i < strs.length;i++){
                markDowns+=`<div style="border:1px solid black;line-height: 30px;text-align: left;background:#F8F8F8;border:1px solid #E7EAED;padding: 15px">`+
                hljs.highlightAuto(strs[i]).value;
                +`</div>`
            }
            console.log("code======>    ",markDowns)
            return markDowns
        },
        pedantic: false,
        gfm: true,
        tables: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: true
    });

    document.querySelector("#bold-wrapper .bold-content-middle").innerHTML = marked(markdownString);




    // var rendererMD = new marked.Renderer();
    // marked.setOptions({
    //     renderer: rendererMD,
    //     gfm: true,
    //     tables: true,
    //     breaks: false,
    //     pedantic: false,
    //     sanitize: false,
    //     smartLists: true,
    //     smartypants: false
    // });
    // // rendererMD.heading = function (text, level) {
    // //     var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
    // //     return '<h' + level + '><a name="' +
    // //         escapedText +
    // //         '" class="anchor" href="#' +
    // //         escapedText +
    // //         '"><span class="header-link"></span></a>' +
    // //         text + '</h' + level + '>';
    // // }
    // rendererMD.code = function(code, language){
    //     return "public static void main(String[] args){}","java"
    // }
    //
    //
    // console.log(marked('# heading', { renderer: rendererMD }));
    // document.querySelector("#bold-wrapper .bold-content-middle").innerHTML = marked('# heading', { renderer: rendererMD });
}