define(function(){
    var ajax = {
    get:function(url,fn){
        var xhr =new XMLHttpRequest();
        xhr.open("get",url,true);
        xhr.send();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                if(typeof fn == "function"){
                    fn(xhr.responseText);
                }
            }
        }
    },
    post:function(url,data,fn){
        var xhr =new XMLHttpRequest();
        xhr.open("post",url,true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
        xhr.send(data);
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                if(typeof fn == "function"){
                    fn(xhr.responseText);
                }
            }
        }
    }
}
return ajax;
})


