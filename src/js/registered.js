/**
 * Created by Administrator on 2019-06-19.
 */
require(["config/loader-config"],function() {
//导入依赖模块
    require([ "jquery", "ajax", "tools", "cookie", "public"], function ($, ajax, tools, cookie, public) {
//验证两次密码是否一致
        $(".password").blur(function () {
            var psdA = $(".pwd").val();
            var psdB = $(".password").val();
            var p = $(".promptpwd");
            tools.psda(psdA, psdB, p);
        })

//生成随机验证码
        var url = "http://127.0.0.1:8080";
        $(".input-button").on("click", function () {
            var randomNum = Math.random().toFixed(6).slice(-6);
            $(".verification").html(randomNum);
            //用户输入的验证码和随机验证码的相互比较
            $(".code").blur(function () {
                let codeval = $(".code").val();//验证码
                var prompt = $(".prompt-code");
                tools.code(codeval, randomNum, prompt);
            })
        })


//用户进行注册
        let btn = $(".submit1");
        var m = $(".radio");
        console.log(btn);
        btn.click(function () {
            let username = $("#phone").val();
            let pwd = $(".pwd").val();
            let code = $(".code").val();//验证码
            let pwda = $(".password").val();//确认密码
            //判断手机号是否符合
            if (/^1[3|4|5|8][0-9]\d{4,8}$/.test(username)) {
                //判断验证码
                if (code != randomNum) {
                    alert("验证码错误");
                } else {
                    //判断密码是否正确
                    if (/^[a-zA-Z0-9]{6,20}$/.test(pwd)) {
                        //判断两次密码是否一致
                        if (pwd == pwda) {
                            if (m.is(':checked')) {
                                //进行ajax的post传递
                                ajax.post(url + "/rega", "username=" + username + "&pwd=" + pwd, function (str) {
                                    var objJSON = JSON.parse(str);
                                    //进行判断如果注册成功，则跳转到登录界面，如果注册失败，提示！
                                    if (objJSON.ok == 1) {
                                        alert(objJSON.msg);
                                        location.href = "login.html";
                                    } else {
                                        alert(objJSON.msg);
                                    }
                                })
                            } else {
                                alert("请您仔细阅读协议，并且同意");
                            }
                        } else {
                            alert("您两次密码不一致");
                        }
                    } else {
                        alert("您设置的密码格式不正确");
                    }
                }
            } else {
                alert("您输入的手机号不能为空、不正确");
            }
        })
    })
})