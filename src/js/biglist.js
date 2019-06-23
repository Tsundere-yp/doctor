/**
 * Created by Administrator on 2019-06-18.
 */
require(["config/loader-config"],function() {
//导入依赖模块
    require(["swiper", "jquery","ajax" ,"tools", "cookie", "public"], function (swiper, $,ajax, tools, cookie, public) {
//轮播图
        tools.Shuffling('.swiper-container', 'horizontal', '.swiper-pagination', 2000, '.swiper-button-next', '.swiper-button-prev');
        tools.Shuffling('.swiper-container .swiper-container2', 'horizontal', '.swiper-pagination .swiper-A', 2000);
        $(".swiper-pagination").children().addClass("option-bg");
//弹框
        var Popup = document.getElementById("Popup");
        var body = document.getElementById("body");
        var t1 = $(".a-li");
        var t2 = $(".iconfont");
        var x = $(".x");
        var url = "http://127.0.0.1:8080";
        tools.Bounced(Popup, body, t1, x);  //点击每一个轮播展示框实现弹框
        tools.Bounced(Popup, body, t2, x);  //点击按钮实现弹框

//获取数据
        var arr = [];

        ajax.get(url + "/content", function (str) {
            console.log("+++++++++++++++");
            console.log(str);
            var obj = JSON.parse(str);
            console.log(typeof (obj.content));//object
            for (var i in obj.content) {
                console.log(i);
                arr.push(obj.content[i]);
            }
            console.log("大医同盟");
            console.log(arr);
            var html = '';
            $.each(arr, function (index, value) {
                console.log(index);
                html += '<a href=' + value.link + '><div class="a-div"><p class="p1A">' + value.desc + '</p><p class="p2A">' + value.doctor + '</p></div></a>';
            })
            // console.log(html);
            $(".Micro-left").html(html);
            $(".Micro-right").html(html);
        });
//鼠标滑出效果
        tools.hover("#li1", "#li1 .doctor-img");
        tools.hover("#li2", "#li2 .doctor-img");
        tools.hover("#li3", "#li3 .doctor-img");
        tools.hover("#li4", "#li4 .doctor-img");
    })
})