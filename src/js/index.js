/**
 * Created by Administrator on 2019-06-18.
 */
require(["config/loader-config"],function(){
//导入依赖模块
require(["swiper","jquery","tools","cookie","public"],function(swiper,$,tools,cookie,public){
    tools.Shuffling('.swiper-container','horizontal','.swiper-pagination',2000,'.swiper-button-next','.swiper-button-prev');
    $(".swiper-pagination").children().addClass("option-bg");
//鼠标滑出效果
    tools.hover("#div1","#div1 #im");
    tools.hover("#div2","#div2 #im");
    tools.hover("#div3","#div3 #im");
    tools.hover("#div4","#div4 #im");
    tools.hover("#div5","#div5 #im");
    tools.hover("#div6","#div6 #im");
})
})


