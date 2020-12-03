window.onload=function () {

	var sjkl=document.getElementById('sjkl');
	var oli1=document.getElementsByClassName('oli1');
	var erji=document.getElementsByClassName('erji');
	var a2=document.getElementsByClassName('a2');
	var a22=document.getElementsByClassName('a22');

	//鼠标摸手机考拉显示二维码,鼠标离开隐藏
	sjkl.onmouseover=function () {
		sjkl.firstElementChild.style.display="block";
	}
	sjkl.onmouseout=function () {
		sjkl.firstElementChild.style.display="none";
	}


	//鼠标摸上去显示二级菜单
	for (var i = 0; i <oli1.length; i++) {
		oli1[i].setAttribute("index",i);
		oli1[i].onmouseover=function () {
			this.style.backgroundColor="#ffffff";
			this.style.borderColor="#CCCCCC";
			this.firstElementChild.style.color="#FF2A5B";
			erji[this.getAttribute("index")].style.display='block';
		}


	//鼠标离开二级菜单消失	
		oli1[i].onmouseout=function () {
			this.style.backgroundColor="";
			this.style.borderColor="";
			this.firstElementChild.style.color="";
			erji[this.getAttribute("index")].style.display='none';
		}
	}


	//鼠标摸上二级菜单改变字体颜色并显示对应的二维码，鼠标离开颜色复原
	for (var j = 0; j < a2.length; j++) {
		a2[j].onmouseover=function () {
			this.style.color="#FF2A5B";
			this.nextElementSibling.style.display='block';
		}
		a2[j].onmouseout=function () {
			this.style.color="";
			this.nextElementSibling.style.display='none';
		}
	}


	//输入框获得焦点，内容清空；失去焦点，内容恢复
	var ipt=document.getElementsByTagName('input')[0];
	ipt.onfocus=function () {
		ipt.value='';
		ipt.style.color="black";
		ipt.style.fontStyle='normal';
	}
	ipt.onblur = function() {
		ipt.value='口红';
		ipt.style.color="";
		ipt.style.fontStyle='';
	}



	//搜索框悬浮定位
	var sousu=document.getElementsByClassName('sousu')[0];
	var zuofu=document.getElementsByClassName('zuofu')[0];
	var youfu=document.getElementsByClassName('youfu')[0];
	document.onscroll=function () {
		var t=getPos(sousu).top+sousu.offsetHeight;
		var top=document.documentElement.scrollTop||document.body.scrollTop;
		if (top>t) {
			sousu.setAttribute("id",'xf');
		}else{
	        sousu.setAttribute("id",'');
	    };

	    var T=getPos(zuofu).top;
		if (top>T) {
			zuofu.setAttribute("id",'at');
		}else{
			zuofu.removeAttribute("id");
	    };

	    var T2=getPos(youfu).top;
		if (top>T2) {
			youfu.setAttribute("id",'at2');
		}else{
	        youfu.removeAttribute("id");
	    }
		
	}
	function getPos (ele) {
      var l=0;
      var t=0;
      while (ele.offsetParent) {
        l+=ele.offsetLeft+ele.offsetParent.clientLeft;
        t+=ele.offsetTop+ele.offsetParent.clientTop;
        ele=ele.offsetParent;
      }
      return {
          'left':l,
          'top':t
      };

    }



    // 点击TOP回到顶部
    var TOP=youfu.lastElementChild;
    TOP.onclick=function () {
    	var ding=document.documentElement.scrollTop;
    	var timer=setInterval(function(){
        	ding=ding-20;
	        document.documentElement.scrollTop=ding;
	        if(ding<=0){
	          clearInterval(timer);
	        }
	      },0.5);
    }
   



	//轮播图
	// 大盒子
	var div=document.getElementsByClassName('div1')[0];
	//装图片的ul
	var lbt=document.getElementsByClassName('lbt')[0];
	// 两个按钮
	var anniu=document.getElementsByClassName('anniu')[0];
	// 左边按钮
	var zuo=anniu.firstElementChild;
	// 右边按钮
	var you=anniu.lastElementChild;
	// 小圆点
	var dots0=document.getElementsByClassName('dots0');
	console.log(div)
	var b=0;//图片计数器
	//左边按钮
	zuo.onclick=function () {
		b--;
		if (b<0) {
			b=2;
		}
		lbt.style.left=-1349*b+'px';
		
		for (var j = 0; j <dots0.length; j++) {
			dots0[j].className="dots0";
			dots0[b].className="dots0 dots1";
		}
		
	}
	//右边按钮
	you.onclick=function () {
		b++;
		if (b>2) {
			b=0;
		}
		lbt.style.left=-1349*b+'px';
		
		for (var j = 0; j <dots0.length; j++) {
			dots0[j].className="dots0";
			dots0[b].className="dots0 dots1";
		}
		
	}
	//小圆点绑定点击事件
	for (var i = 0; i< dots0.length; i++) {
		dots0[i].setAttribute("b",i);
		dots0[i].onclick=function () {
			b=this.getAttribute('b');
			lbt.style.left=-1349*b+"px";
			for (var j = 0; j <dots0.length; j++) {
				dots0[j].className="dots0";
				this.className="dots0 dots1";
			}
			
		}
	}

	//设置定时器实现自动播放
	function fun(){
		you.onclick()
	}
	var timer=setInterval(fun,2000);
    div.onmouseover=function () {
    	clearInterval(timer);
    	anniu.style.display="block";
    } 
    div.onmouseout=function(){
        timer=setInterval(fun,2000);
        anniu.style.display="none";
    }  


    //鼠标摸上所有商品的li,显示二级菜单
    var li1=document.getElementsByClassName('li1');
    var cont0=document.getElementsByClassName('cont0');
    console.log(cont0);
    var li1_d=document.getElementsByClassName('li1_d');
    for (var i = 0; i <li1.length; i++) {
    	li1[i].setAttribute('index',i);
    	li1[i].onmouseover=function () {
    		this.style.backgroundColor='#ffffff';
    		this.style.color='#FF1E32';
    		for (var j = 0; j <li1_d.length; j++) {
    			li1_d[j].style.display="none"
    		}
    		li1_d[this.getAttribute('index')].style.display='block';
    		for (var c = 0; c <cont0.length; c++) {
    			cont0[c].src='images/cont'+0+(c+1)+'.png';
    		}
    		cont0[this.getAttribute('index')].src='images/cont'+(Number(this.getAttribute('index'))+1)+".png";
    	}
    	li1[i].onmouseout=function () {
    		this.style.backgroundColor='';
    		this.style.color='';
    		
    		li1_d[this.getAttribute('index')].style.display='none';
    	}
    }

    //商品右边的轮播图2
    var dot=document.getElementsByClassName('dot')[0];
  
    var span=dot.children;
    var lbt2=document.getElementsByClassName('lbt2')[0];
    
    var dv1=lbt2.children;
    span[0].style.backgroundColor="black";
    var c=0;
    function funn() {
    	c=c+1;
    	if (c>1) {
    		c=0;
    	}
    	for (var j = 0; j <dv1.length; j++) {
			dv1[j].style.zIndex=1;
			dv1[c].style.zIndex=0;
		}
		
		for (var i = 0; i <span.length; i++) {
			span[i].style.backgroundColor="#E1E1E1";
			span[c].style.backgroundColor="black";
		}
		
    }
    var timer2= setInterval(funn,2000);
  
	for (var i = 0; i <span.length; i++) {
    	span[i].setAttribute('c',i);

    	span[i].onmouseover=function () {
    		
    		clearInterval(timer2);
    		for (var i = 0; i <span.length; i++) {
				span[i].style.backgroundColor="#E1E1E1";
			}
    		this.style.backgroundColor="black";
    		for (var j = 0; j <dv1.length; j++) {
    			dv1[j].style.zIndex=1;

    		}
    		dv1[this.getAttribute('c')].style.zIndex=0;
    	}
    	span[i].onmouseout=function () {
    		timer2=setInterval(funn,2000);
    	
    		this.style.backgroundColor="#E1E1E1";
    		
    	}
    }
   
    
    

    


   

    //鼠标摸上热卖品牌，显示爱心
    var one=document.getElementsByClassName('one');
    var xin=document.getElementsByClassName('xin');
    for (var i = 0; i < one.length; i++) {
    	one[i].setAttribute('index',i);
    	one[i].onmouseover=function () {
    		xin[this.getAttribute('index')].style.display="block";
    	}
    	one[i].onmouseout=function () {
    		xin[this.getAttribute('index')].style.display="none";
    	}
    }



    //热门品牌轮播图3
	var lbt3=document.getElementsByClassName('lbt3')[0];
	var lbt3_ul=document.getElementsByClassName('lbt3_ul')[0];
	var anniu2=document.getElementsByClassName('anniu2')[0];
	var l=anniu2.firstElementChild;
	var r=anniu2.lastElementChild;
	var xian=document.getElementsByClassName('xian')[0];
	var son=xian.children;
	console.log(son);
	var d=0;//图片计数器
	//左边按钮
	l.onclick=function () {
		d--;
		if (d<0) {
			d=2;
		}
		lbt3_ul.style.left=-181*d+'px';
		
		for (var j = 0; j <son.length; j++) {
			son[j].className="";
			son[d].className="un";
		}
	}
	//右边按钮
	r.onclick=function () {
		d++;
		if (d>2) {
			d=0;
		}
		lbt3_ul.style.left=-181*d+'px';
		
		for (var j = 0; j <son.length; j++) {
			son[j].className="";
			son[d].className="un";
		}
	}

	//设置定时器实现自动播放
	function fun1(){
		l.onclick();
	}
	var time1=setInterval(fun1,2000);
    lbt3.onmouseover=function () {
    	clearInterval(time1);
    	anniu2.style.display="block";
    } 
    lbt3.onmouseout=function(){
        time1=setInterval(fun1,2000);
        anniu2.style.display="none";
    }


    //鼠标摸上热门品牌，显示关注和进入品牌
    var d1=document.getElementsByClassName('d1');
    var gz=document.getElementsByClassName('gz');
    var go=document.getElementsByClassName('go');
    var p8=document.getElementsByClassName('p8');
    for (var i = 0; i <d1.length; i++) {
    	d1[i].setAttribute('index',i);
    	d1[i].onmouseover=function () {

    		p8[this.getAttribute('index')].style.display='none';
    		for (var j = 0; j <gz.length; j++) {
    			gz[j].style.display='none';
    		}
    		gz[this.getAttribute('index')].style.display='block';

    		for (var z = 0; z <go.length; z++) {
    			go[z].style.display='none';
    		}
    		go[this.getAttribute('index')].style.display='block';    
	    }

	    d1[i].onmouseout=function () {
	    	p8[this.getAttribute('index')].style.display='block';
    		
    		gz[this.getAttribute('index')].style.display='none';

    		go[this.getAttribute('index')].style.display='none';    
	    }
	}



}

