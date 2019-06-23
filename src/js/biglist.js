/**
 * Created by Administrator on 2019-06-18.
 */
//轮播图
Shuffling('.swiper-container','horizontal','.swiper-pagination',2000,'.swiper-button-next','.swiper-button-prev');
Shuffling('.swiper-container .swiper-container2','horizontal','.swiper-pagination .swiper-A',2000);
$(".swiper-pagination").children().addClass("option-bg");
//弹框
var Popup = document.getElementById("Popup");
var body = document.getElementById("body");
var t1 = $(".a-li");
var t2 = $(".iconfont");
var x = $(".x");
Bounced(Popup,body,t1,x);  //点击每一个轮播展示框实现弹框
Bounced(Popup,body,t2,x);  //点击按钮实现弹框

//获取数据
var arr = [];

ajax.get(url+"/content",function(str){
    console.log("+++++++++++++++");
    console.log(str);
    var obj = JSON.parse(str);
    console.log(typeof(obj.content));//object
    for(var i in obj.content){
        console.log(i);
        arr.push(obj.content[i]);
    }
    console.log("大医同盟");
    console.log(arr);
    var html = '';
    $.each(arr,function(index,value){
        console.log(index);
        html += '<a href='+value.link+'><div class="a-div"><p class="p1A">'+value.desc+'</p><p class="p2A">'+value.doctor+'</p></div></a>';
    })
    // console.log(html);
    $(".Micro-left").html(html);
    $(".Micro-right").html(html);
});
//鼠标滑出效果
hover("#li1","#li1 .doctor-img");
hover("#li2","#li2 .doctor-img");
hover("#li3","#li3 .doctor-img");
hover("#li4","#li4 .doctor-img");