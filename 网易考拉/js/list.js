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


	//鼠标摸上所有商品显示ul
	var all=document.getElementsByClassName('all')[0];
	var oul=document.getElementsByClassName('oul')[0];
	all.onmouseover=function () {
		oul.style.display="block";
	}
	all.onmouseout=function () {
		oul.style.display="none";
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


    //鼠标摸上去显示隐藏内容
    var div1=document.getElementsByClassName('div1');
    console.log(div1)
    var aa0=document.getElementsByClassName('aa0');
    for (var i = 0; i <div1.length; i++) {
    	div1[i].setAttribute('index',i);
    	div1[i].onmouseover=function () {
    		
    		for (var j = 0; j <aa0.length; j++) {
    			aa0[j].style.overflow='hidden';
    			aa0[j].style.textDecoration='nono';
    			aa0[j].onmouseover=function () {
    				this.style.textDecoration='underline';
    			}
    			aa0[j].onmouseout=function () {
    				this.style.textDecoration='';
    			}
    			
    		}
    		aa0[this.getAttribute('index')].style.overflow='visible';    		
			aa0[this.getAttribute('index')].style.height='auto'; 
			this.style.borderColor='#FF060B';
    	}
    	div1[i].onmouseout=function () {
    		this.style.border='';
    		aa0[this.getAttribute('index')].style.overflow='';    		
			aa0[this.getAttribute('index')].style.height=''; 
    	}
    }
     
}