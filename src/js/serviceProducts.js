/**
 * Created by Administrator on 2019-06-18.
 */
//选项卡切换
window.onload = function(){
    var oDiv = document.getElementById("tab");
    var lis = document.querySelectorAll("#tab-li");
    var oDivCon = document.getElementById("tab-right");
    var lisDiv = oDivCon.getElementsByTagName("section");
    console.log(oDiv);
    console.log(lis);
    for(var i=0;i<lis.length;i++){
        lis[i].index = i;
        console.log(lis[i]);
        lis[i].onclick = function(){
            show(this.index);
        }
    }
    function show(a){
        for(var j=0;j<lis.length;j++){
            lis[j].className = "";
            lisDiv[j].className = "";
        }
        lis[a].className = "cur";
        lis[a].className = "li-tab";
        lisDiv[a].className = "cur";
    }
}