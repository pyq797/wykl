window.onload = function() {

    var sjkl = document.getElementById('sjkl');
    var oli1 = document.getElementsByClassName('oli1');
    var erji = document.getElementsByClassName('erji');
    var a2 = document.getElementsByClassName('a2');
    var a22 = document.getElementsByClassName('a22');

    //鼠标摸手机考拉显示二维码,鼠标离开隐藏
    sjkl.onmouseover = function() {
        sjkl.firstElementChild.style.display = "block";
    }
    sjkl.onmouseout = function() {
        sjkl.firstElementChild.style.display = "none";
    }

    //鼠标摸上去显示二级菜单
    for (var i = 0; i < oli1.length; i++) {
        oli1[i].setAttribute("index", i);
        oli1[i].onmouseover = function() {
            this.style.backgroundColor = "#ffffff";
            this.style.borderColor = "#CCCCCC";
            this.firstElementChild.style.color = "#FF2A5B";
            erji[this.getAttribute("index")].style.display = 'block';
        }

        //鼠标离开二级菜单消失	
        oli1[i].onmouseout = function() {
            this.style.backgroundColor = "";
            this.style.borderColor = "";
            this.firstElementChild.style.color = "";
            erji[this.getAttribute("index")].style.display = 'none';
        }
    }

    //鼠标摸上二级菜单改变字体颜色并显示对应的二维码，鼠标离开颜色复原
    for (var j = 0; j < a2.length; j++) {
        a2[j].onmouseover = function() {
            this.style.color = "#FF2A5B";
            this.nextElementSibling.style.display = 'block';
        }
        a2[j].onmouseout = function() {
            this.style.color = "";
            this.nextElementSibling.style.display = 'none';
        }
    }

    //输入框获得焦点，内容清空；失去焦点，内容恢复
    var ipt = document.getElementsByTagName('input')[0];
    ipt.onfocus = function() {
        ipt.value = '';
        ipt.style.color = "black";
        ipt.style.fontStyle = 'normal';
    }
    ipt.onblur  =   function()  {
        ipt.value = '口红';
        ipt.style.color = "";
        ipt.style.fontStyle = '';
    }


    //鼠标摸上所有商品显示ul
    var all = document.getElementsByClassName('all')[0];
    var oul = document.getElementsByClassName('oul')[0];
    all.onmouseover = function() {
        oul.style.display = "block";
    }
    all.onmouseout = function() {
        oul.style.display = "none";
    }

    //鼠标摸上所有商品的li,显示二级菜单
    var li1 = document.getElementsByClassName('li1');
    var cont0 = document.getElementsByClassName('cont0');
    console.log(cont0);
    var li1_d = document.getElementsByClassName('li1_d');
    for (var i = 0; i < li1.length; i++) {
        li1[i].setAttribute('index', i);
        li1[i].onmouseover = function() {
            this.style.backgroundColor = '#ffffff';
            this.style.color = '#FF1E32';

            for (var j = 0; j < li1_d.length; j++) {
                li1_d[j].style.display = "none"
            }
            li1_d[this.getAttribute('index')].style.display = 'block';
            for (var c = 0; c < cont0.length; c++) {
                cont0[c].src = 'images/cont' + 0 + (c + 1) + '.png';
            }
            cont0[this.getAttribute('index')].src = 'images/cont' + (Number(this.getAttribute('index')) + 1) + ".png";
        }
        li1[i].onmouseout = function() {
            this.style.backgroundColor = '';
            this.style.color = '';

            li1_d[this.getAttribute('index')].style.display = 'none';
        }
    }



    //鼠标摸运动品牌，显示二级菜单
    var spn1 = document.getElementsByClassName('spn1');
    var div = document.getElementsByClassName('ej');
    for (var i = 0; i < spn1.length; i++) {
        spn1[i].setAttribute('index', i);
        spn1[i].onmouseover = function() {
            for (var j = 0; j < div.length; j++) {
                div[j].style.display = 'none';
            }
            div[this.getAttribute('index')].style.display = 'block';
        }
        spn1[i].onmouseout = function() {
            div[this.getAttribute('index')].style.display = 'none';
        }
    }



    //商品放大镜效果
    //大图盒子
    var zt = document.getElementsByClassName('zhongtu')[0];
    //滑块
    var hua = document.getElementsByClassName('hua')[0];
    //放大镜效果盒子
    var bigtu = document.getElementsByClassName('bigtu')[0];
    //放大镜效果图片
    var bt1 = document.getElementsByClassName('bt1')[0];

    zt.onmousemove = function(e) {

        var l = e.pageX - getPos(this).left - hua.offsetWidth / 2;

        var t = e.pageY - getPos(this).top - hua.offsetHeight / 2;

        console.log(l + "," + t)
        var L = zt.clientWidth - hua.offsetWidth;
        var T = zt.clientHeight - hua.offsetHeight;

        if (l < 0) {
            l = 0;
        }

        if (l > L) {
            l = L;
        }

        if (t < 0) {
            t = 0;
        }
        if (t > T) {
            t = T;
        }

        hua.style.left = l + "px";
        hua.style.top = t + "px";

        var bx = (bt1.clientWidth - bigtu.clientWidth) / (zt.clientWidth - hua.offsetWidth);
        var by = (bt1.clientHeight - bigtu.clientHeight) / (zt.clientHeight - hua.offsetHeight);
        console.log(bx + "," + by);

        bt1.style.left = -l * bx + "px";
        bt1.style.top = -t * by + "px";

    }

    // 鼠标移入到缩略图时，显示大图和滑块
    zt.onmouseover = function() {
        hua.style.display = bigtu.style.display = "block";
    };
    // 鼠标离开到缩略图时，显示大图和滑块
    zt.onmouseout = function() {
        hua.style.display = "none";
        bigtu.style.display = "none";
    };
    // 求绝对距离的函数
    function getPos(ele) {
        var l = 0;
        var t = 0;
        while (ele.offsetParent) {
            l += ele.offsetLeft + ele.offsetParent.clientLeft;
            t += ele.offsetTop + ele.offsetParent.clientTop;
            ele = ele.offsetParent;
        }
        return {
            'left': l,
            'top': t
        }
    }


    // 鼠标摸上去更换图片
    var ul1 = document.getElementsByClassName('ul1')[0];
    var li = ul1.children;
    var i1 = document.getElementsByClassName('i1')[0];
    for (var i = 0; i < li.length; i++) {
        li[i].setAttribute('index', i);
        li[i].onmouseover = function() {
            this.style.border = '1px solid red';
            i1.src = "images/converse" + (Number(this.getAttribute('index')) + 1) + '.jpg';
            bt1.src = 'images/big' + (Number(this.getAttribute('index')) + 1) + '.jpg';
        }
        li[i].onmouseout = function() {
            this.style.border = '';
        }
    }



    //地区选择
    var xx = document.getElementsByClassName('xx')[0];
    var dz = document.getElementsByClassName('dt')[0];
    var tab1 = document.getElementsByClassName('tab1')[0];
    var two = document.getElementsByClassName('two')[0];
    var span = two.children;
    var div2 = document.getElementsByClassName('div2')[0];
    var flag = true;
    xx.onclick = function() {
        if (flag) {
            tab1.style.display = 'block';
            for (var i = 0; i < span.length; i++) {
                span[i].setAttribute('index', i);
                span[i].onmouseover = function() {
                    // 	for (var j = 0; j <div2.length; j++) {

                    //               if(j==this.getAttribute('index')){
                    //                   div2[this.getAttribute('index')].style.display="block";


                    //               }else{
                    //                  div2[this.getAttribute('index')].style.display="none";

                    //               }
                    // 	}

                    // }

                    flag = false;
                }
            }
        } else {
            tab1.style.display = 'none';
            flag = true;
        }
    }




    //选择尺码
    var cm = document.getElementsByClassName('cm');
    for (var i = 0; i < cm.length; i++) {
        cm[i].onclick = function(e) {
            e.preventDefault(); //阻止a的默认行为
            for (var i = 0; i < cm.length; i++) {
                cm[i].style.borderColor = '#E1E1E1';
            }
            this.style.borderColor = '#D41C44';
        }
    }



    // 商品数量加减
    var zj1 = document.getElementsByClassName('zj1')[0];
    var zj2 = document.getElementsByClassName('zj2')[0];
    var sz = document.getElementsByClassName('sz')[0];
    zj1.onclick = function() {
        var i = 1;
        if (sz.value == 1) {
            return false;
        } else {
            sz.value = sz.value - i
        }
    }
    zj2.onclick = function() {
        var i = 1;
        if (sz.value == 10) {
            return false;
        } else {
            sz.value = Number(sz.value) + i
        }
    }


}