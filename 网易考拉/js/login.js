window.onload=function () {
	//切换登录方式
	var qh=document.getElementsByClassName('qh');
	var go1=document.getElementsByClassName('go1');
	for (var i = 0; i <qh.length; i++) {
		qh[i].setAttribute('index',i) ;
		qh[i].onclick=function () {
			for (var j = 0; j < go1.length; j++) {
				go1[j].style.zIndex='1';
			}
			go1[this.getAttribute("index")].style.zIndex='0';	
		}
	}
	
	//登录验证
	var myform=document.getElementsByClassName('myform')[0];
	// 手机号输入框
	var ipt2=document.getElementsByClassName('ipt2')[0];
	// 验证码输入框
	var ipt3=document.getElementsByClassName('ipt3')[0];
	// 手机号输入框提示文字
	var ts1=document.getElementsByClassName('ts1')[0];
	// 验证码输入框提示文字
	var ts2=document.getElementsByClassName('ts2')[0];
	ipt2.onfocus=function(){
        ipt2.value="";
        ipt2.style.color="black";
    }
    ipt3.onfocus=function(){
        ipt3.value="";
        ipt3.style.color="black";
    }
    
    var flag=false;
    myform.onsubmit=function () {
    	return flag;
    }
    ipt2.onblur=function(){	
    	var reg1=/^1[3-9][0-9]{9}$/;
    	if (!reg1.test(ipt2.value)) {
	    	ts1.innerText="您的手机号输入有误！";
	    	flag=false;
	    }else{
	    	
	    	ts1.innerText="";
	    	flag=true;
	    }
	}

	ipt3.onblur=function(){	
		var reg2=/^[0-9]{4}$/;
    	if (!reg2.test(ipt3.value)){
	    	ts2.innerText="验证码输入有误！";
	    	flag=false;
	    }else{
	    	
	    	ts2.innerText="";
	    	flag=true;
	    }
    }
    



}