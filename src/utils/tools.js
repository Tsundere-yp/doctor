/**
 * Created by Administrator on 2019-06-18.
 */
//轮播图
var Shuffling = {};
Shuffling = function(container,direction,els,delay,next,prev){
    var mySwiper = new Swiper (container, {  //哪一个轮播
        direction: direction, // 水平切换选项
        // 分页器
        pagination: {
            el: els,  //挂载的分页器
            clickable :true,
        },
        autoplay: {
            disableOnInteraction: false, //手动滑动之后不打断播放
            delay: delay   //时间
        },
        // 如果需要前进后退按钮
        navigation: {
            nextEl: next,  //前进
            prevEl: prev,  //后退
        },

    })
}

//实现吸顶效果
var Sucktop = function(header,content,win,ment,cssstyle,topcontent){   // (jq版)
    win.scroll(function(){  //win:window窗口
        if(ment.scrollTop()>=60){  //ment:document文档对象
            header.addClass(cssstyle); //header:头部导航栏设置css样式(cssstyle)
            content.addClass(topcontent); //content:头部导航栏内容css样式(topcontent)
        }else{
            header.removeClass(cssstyle); //header:头部导航栏移除css样式(cssstyle)
            content.removeClass(topcontent); //content:头部导航栏移除css样式(topcontent)
        }
    })
}

//弹框
var Bounced = function(Popup,body,event,x){ //参数分别为弹框体、遮罩、事件源（点击出现弹框）、关闭弹框按钮 (jq版)
    //弹框实现弹出
    event.on("click",function(){
        Popup.style.display = "block";
        body.style.display = "block";
    })
    //弹框实现关闭
    x.on("click",function(){
        Popup.style.display = "none";
        body.style.display = "none";
    })
}

//手机号正则表达式判断
var Mobile = function(phone,prompt){  //phone:input输入手机号的value值进行判断;prompt:要提示的语句
    if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(phone))){
        prompt.css({
            opacity:1,
        })
    }else{
        prompt.css({
            opacity:0,
        })
    }
}
//随机验证码判断
var code  = function(code1,code2,prompt){
    if(code1 == code2){
        prompt.css({
            opacity:0,
        })
    }else{
        prompt.css({
            opacity:1,
        })
    }
}
//密码正则表达式判断
var password = function(psd,prompt){
    if(!(/^(?=.*?[a-z)(?=.*>[A-Z])(?=.*?[0-9])[a-zA_Z0-9]{6,10}$/.test(psd))){
        prompt.css({
            opacity:1,
        })
    }else{
        prompt.css({
            opacity:0,
        })
    }
}
//再次验证密码
var psda = function(psdA,psdB,prompt){
    if(psdA === psdB){
        prompt.css({
            opacity:0,
        })
    }else{
        prompt.css({
            opacity:1,
        })
    }
}

//生成随机数
var randomNum = function(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

//鼠标滑出效果
var hover = function(div,img){
$(div).hover(function(){
    $(img).css({
        transform:"scale(1.2)",
        transition:"1s",
    });
},function(){
    $(img).css({
        transform:"scale(1)",
        transition:"1s",
    });
})
}
