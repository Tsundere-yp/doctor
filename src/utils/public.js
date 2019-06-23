/**
 * Created by Administrator on 2019-06-18.
 */
var url = "http://127.0.0.1:8080";
//引入公共头部和尾部以及服务侧边栏
$('.html1').load("./article/header.html",function(responseTxt,statusTxt,xhr){
    if(statusTxt=='success'){
        //加载完毕前要处理的事件
        //公共吸顶设置
        var header=$(".header"); //得到导航对象
        var content = $(".nav .nav-content");//得到导航内容
        var win=$(window); //得到窗口对象
        var ment=$(document);//得到document文档对象
        Sucktop(header,content,win,ment,"sucktop","sucktop-content");
        console.log('header加载成功!')
    }
})
$(".html2").load("./article/footer.html");
$(".html3").load("./article/side.html");
$(".login-footer-html").load("./article/login-footer.html");
//验证公共手机号
//正则判断输入的手机号
$("#phone").blur(function(){
    let m = $("#phone").val();
    let p = $(".prompt");
    // console.log(m);
    Mobile(m,p);
})
//正则判断输入的密码
$(".pwd").blur(function(){
    let psd = $(".pwd").val();
    let p = $(".promptpsd");
    // console.log(psd);
    password(psd,p);
})
//切换页面颜色
var option = $("#select-p").children();
option.on("click", function(){
        $(".option-color").css("border-bottom", $(this).css("border-bottom"));
        $(".option-font").css("color",$(this).css("color"));
        $(".option-bg").css("background",$(this).css("background"));
        var bottom = $(this).css("border-bottom");
        var color = $(this).css("color");
        var bg = $(this).css("background");
        $.cookie({"borderbottom": bottom,"color":color,"background":bg,expires:7});
    });
    if ($.cookie("borderbottom","color","background")) {
        $(".option-color").css("border-bottom", $.cookie("borderbottom"));
        $(".option-font").css("color",$.cookie("color"));
        $(".option-bg").css("background",$.cookie("background"));
    }
//判断用户是否登录，如果登录则可以进入个人中心，如果没有登录，则将进入登录页
console.log("+++++++++++++++++++++");
console.log($("#personal-if"));
$("#personal-if").on("click",function(){
    alert("1");
})