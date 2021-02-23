window.onload = function(){
    document.getElementById('content').innerHTML =
        marked(
            '```html\n' +
            '<!DOCTYPE html>\n' +
            '<html>\n' +
            '\t<head>\n' +
            '\t\t<meta charset="utf-8" />\n' +
            '\t\t<title></title>\n' +
            '\t\t<link rel="stylesheet" href = "css/index.css" />\n' +
            '\t</head>\n' +
            '\t<body>\n' +
            '\t\t<div id = "root">\n' +
            '\t\t\t<div>1</div>\n' +
            '\t\t\t<div>2</div>\n' +
            '\t\t\t<div>3</div>\n' +
            '\t\t</div>\n' +
            '\t</body>\n' +
            '</html>\n' +
            '```\n' +
            '\n' +
            '```css\n' +
            '#root{\n' +
            '\tdisplay: flex;                //开启flex布局\n' +
            '\tflex-direction: row;          //默认横向排列\n' +
            '    //column：纵向排列\n' +
            '    //row-reverse:横向反转\n' +
            '    //column-reverse:纵向反转\n' +
            '}\n' +
            '\n' +
            '#root div{\n' +
            '\twidth: 50px;\n' +
            '\theight: 50px;\n' +
            '\tborder:pink 1px solid;\n' +
            '}\n' +
            '\n' +
            '```\n' +
            '\n' +
            'flex-direction: 控制左右\n' +
            '\n' +
            '```css\n' +
            '#root{\n' +
            '\tdisplay: flex;\n' +
            '\tflex-direction: row;\n' +
            '\tflex-wrap: wrap-reverse;  //控制换行\n' +
            '    //inherit:继承\n' +
            '    //initial:最初的\n' +
            '    //wrap:换行\n' +
            '    //nowrap：不换行\n' +
            '    //wrap-reverse:反转换行\n' +
            '}\n' +
            '\n' +
            '#root div{\n' +
            '\twidth: 50px;\n' +
            '\theight: 50px;\n' +
            '\tborder:pink 1px solid;\n' +
            '}\n' +
            '```\n' +
            '\n' +
            'flex-wrap:控制换行\n' +
            '\n' +
            'flex-flow: row wrap-reverse;等价于flex-direction:row;和flex-wrap:wrap-reverse;\n' +
            '\n' +
            '----\n' +
            '\n' +
            '\n' +
            '\n' +
            '\n' +
            '\n');

}