/**
 * Created by Administrator on 2019-06-20.
 */
//个人中心显示内容的切换
$(".content-personal-ul li:nth-child(1)").click(function(){
       $(".personal-form").css({
           display:"block",
       });
        $(".personal-order").css({
            display:"none",
        });
})
$(".content-personal-ul li:nth-child(2)").click(function(){
    $(".personal-order").css({
        display:"block",
    });
    $(".personal-form").css({
        display:"none",
    });

})

//用户
$(".user").text(sessionStorage.uname);

//添加用户信息
$("#true").click(function(){
    var id = sessionStorage.uname;
    var name = $("#name").val();
    var sex = $(".inputa1").val();
    let age = $(".age").val();
    var text = $(".inputa3").val();
    console.log($(".name"));
    console.log(age);
//进行ajax的post传递
    ajax.post(url+"/adduser","name="+name+"&sex="+sex+"&age="+age+"&text="+text+"&id="+id,function(str){
        var objJSON = JSON.parse(str);
        //进行判断如果注册成功，则跳转到登录界面，如果注册失败，提示！
        if(objJSON.ok == 1){
            alert(objJSON.msg);
            name = objJSON.name;
            age = objJSON.age;
            text = objJSON.text;
        }else{
            alert(objJSON.msg);
        }
    })
})

//修改用户信息
$("#true1").click(function(){
    var id = sessionStorage.uname;
    var name = $("#name").val();
    var sex = $(".inputa1").val();
    var age = $(".age").val();
    var text = $(".inputa3").val();
    console.log($(".name"));
    console.log(age);
//进行ajax的post传递
    ajax.post(url+"/update","name="+name+"&sex="+sex+"&age="+age+"&text="+text+"&id="+id,function(str){
        var objJSON = JSON.parse(str);
        //进行判断如果注册成功，则跳转到登录界面，如果注册失败，提示！
        if(objJSON.ok == 1){
            alert(objJSON.msg);
            name = objJSON.name;
            age = objJSON.age;
            text = objJSON.text;
        }else{
            alert(objJSON.msg);
        }
    })
})