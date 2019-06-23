/**
 * Created by Administrator on 2019-06-19.
 */
require(["config/loader-config"],function() {
//导入依赖模块
    require(["jquery", "ajax", "tools", "cookie", "public"], function ($, ajax, tools, cookie, public) {
//进行用户登录
        var btn = $(".submit");
        console.log(btn);
        var url = "http://127.0.0.1:8080";
        btn.click(function () {
            let username = $("#phone").val();
            let password = $(".pwd").val();
            //进行判断手机号是否正确
            if (/^1[3|4|5|8][0-9]\d{4,8}$/.test(username)) {
                //进行判断密码是否正确
                if (/^[a-zA-Z0-9]{6,20}$/.test(password)) {
                    //进行ajax的post传递
                    ajax.post(url + "/login", "username=" + username + "&pwd=" + password, function (str) {
                        var objJSON = JSON.parse(str);
                        //进行判断如果注册成功，则跳转到登录界面，如果注册失败，提示！
                        if (objJSON.ok == 1) {
                            alert(objJSON.msg);
                            sessionStorage.setItem("uname", username);
                            window.location.href = "personal.html";
                        } else {
                            alert(objJSON.msg);
                        }
                    })
                } else {
                    alert("您输入的密码不正确");
                }
            } else {
                alert("您输入的手机号不正确");
            }
        })
    })
})
