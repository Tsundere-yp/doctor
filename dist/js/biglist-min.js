"use strict";function _typeof(o){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}Shuffling(".swiper-container","horizontal",".swiper-pagination",2e3,".swiper-button-next",".swiper-button-prev"),Shuffling(".swiper-container .swiper-container2","horizontal",".swiper-pagination .swiper-A",2e3),$(".swiper-pagination").children().addClass("option-bg");var Popup=document.getElementById("Popup"),body=document.getElementById("body"),t1=$(".a-li"),t2=$(".iconfont"),x=$(".x");Bounced(Popup,body,t1,x),Bounced(Popup,body,t2,x);var arr=[];ajax.get(url+"/content",function(o){console.log("+++++++++++++++"),console.log(o);var t=JSON.parse(o);for(var n in console.log(_typeof(t.content)),t.content)console.log(n),arr.push(t.content[n]);console.log("大医同盟"),console.log(arr);var e="";$.each(arr,function(o,t){console.log(o),e+="<a href="+t.link+'><div class="a-div"><p class="p1A">'+t.desc+'</p><p class="p2A">'+t.doctor+"</p></div></a>"}),$(".Micro-left").html(e),$(".Micro-right").html(e)}),hover("#li1","#li1 .doctor-img"),hover("#li2","#li2 .doctor-img"),hover("#li3","#li3 .doctor-img"),hover("#li4","#li4 .doctor-img");