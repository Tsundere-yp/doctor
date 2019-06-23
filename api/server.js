const express = require("express");
const fs = require("fs");
const app = express();
const querystring = require("querystring");
app.use(express.static("data"))//设置成为静态资源
var getNowTime= function() { //初始化时间
    var nowTime = new Date();
    var timeStr = nowTime.getFullYear() + "-" +
        (nowTime.getMonth() + 1).toString().padStart(2, "0") + "-" +
        nowTime.getDate().toString().padStart(2, "0") + " " +
        nowTime.getHours().toString().padStart(2, "0") + ":" +
        nowTime.getMinutes().toString().padStart(2, "0") + ":" +
        nowTime.getSeconds().toString().padStart(2, "0");
    return timeStr;
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++获取table数据+++++++++++++++++++++++++++++++++++++++++++++
app.get('/content',function(req,res){
	//解决跨域，任何都可以访问'
    res.header("Access-Control-Allow-Origin", "*");
    //读取json文件
	fs.readFile("../src/data/table.json","utf-8",function(err,data){
		if(err){
			console.log(data);
			res.send("文件读取失败!");
		}else{
			res.send(data);
		}
	})
})
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++用户进行注册++++++++++++++++++++++++++++++++++++++++++++++
//用户注册
app.post('/rega',function(req,res){
    //解决跨域，任何都可以访问'
    res.header("Access-Control-Allow-Origin", "*");
    //定义一个字符串接收数据
    var str = "";
    //进行监听接收数据
    req.addListener("data",function(json){
        str+=json;
        // console.log(str);
    })
    //首先读取json文件,如果没有用户名一样的，则可以写入data数据
    fs.readFile("../src/data/login.json","utf-8",function(err,data){
        if(err){
            console.log("文件读取失败!");
        }else{
            console.log("文件读取成功!");
            //1：进行判断用户有没有注册过，遍历json文件数据，再根据前台传入的数据进行判断
            //   console.log(data);
              var dataJSON = JSON.parse(data);//将json字符串转成json对象
              // console.log(dataJSON);
              dataJSON.forEach(function(i){//遍历数组
                  console.log(i);
                  //将json字符串转成json对象
                  var arr = JSON.parse(data);
                  var query = querystring.parse(str);
                  // console.log(query);
                  //将数据添加到数组中备用
                  arr.push({
                      id:Date.now(),
                      addTime:getNowTime(),
                      userName:query.username,
                      passWord:query.pwd
                  });
                  // console.log(arr);
                  //<2>如果有注册过，则向前台返回已经注册过
                  // console.log(query.username);
                  if(query.username == i.userName){
                      res.end(JSON.stringify({
                          ok:0,
                          msg:"您的手机号已经注册过了！"
                      }))
                  }else{
                      //<1>如果没有注册过，则可以将信息写入data文件，插入失败，返回失败语句，插入成功，则返回成功语句
                      fs.writeFile("../src/data/login.json",JSON.stringify(arr),function () {
                          res.end(JSON.stringify({
                              ok:1,
                              msg:"注册成功！"
                          }))

                      })
                  }
            })
        }
    })
})
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++用户进行登录++++++++++++++++++++++++++++++++++++++++++++++
//用户登录
app.post('/login',function(req,res){
    //解决跨域，任何都可以访问'
    res.header("Access-Control-Allow-Origin", "*");
    //定义一个字符串接收数据
    var str = "";
    //进行监听接收数据
    req.addListener("data",function(json){
        str+=json;
        // console.log(str);
    })
	//首先读取json文件、
    fs.readFile("../src/data/login.json","utf-8",function(err,data){
        if(err){
            console.log("文件读取失败!");
        }else{
            console.log("文件读取成功!");
            //一：读取json文件成功后，遍历json内的信息与前台传入的用户名是否有一致的
            var query = querystring.parse(str);
            // console.log(query);
            // console.log(data);
            var dataJSON = JSON.parse(data);//将json字符串转成json对象
            // console.log(dataJSON);
            let userInfo = dataJSON.find(v=>(v.userName == query.username && v.passWord == query.pwd));
            if(userInfo){
                    //  1：如果有一致的，则在进行相对应的密码判断
                // <1>如果密码判断成功，则可以成功登录，返回登录成功
                res.end(JSON.stringify({
                            ok:1,
                            msg:"登录成功！"
                        }))
                        console.log("登录成功");
            }else{
                    // 2：如果没有一致的，则返回前台告知无此用户
                res.end(JSON.stringify({
                        ok:0,
                        msg:"用户名或者密码错误！"
                    }))
                    console.log("用户名或者密码错误");
                }

        }})
})
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++添加用户信息++++++++++++++++++++++++++++++++++++++++++++++
//添加用户信息
app.post("/adduser",function(req,res){
    //解决跨域，任何都可以访问'
    res.header("Access-Control-Allow-Origin", "*");
    //定义一个字符串接收数据
    var str = "";
    //进行监听接收数据
    req.addListener("data",function(json){
        str+=json;
        console.log(str);
    })
    //读取json文件
    fs.readFile("../src/data/u.json","utf-8",function(err,data){
        if(err){
            console.log(data);
            res.send("文件读取失败!");
        }else{
            console.log("文件读取成功");
            //1：根据前台传入的数据进行判断
            var dataJSON = JSON.parse(data);//将json字符串转成json对象
            dataJSON.forEach(function(i){//遍历数组
                console.log(i);
                //将json字符串转成json对象
                var arr = JSON.parse(data);
                var query = querystring.parse(str);
                console.log(query);
                arr.push({
                    id:query.id,
                    name:query.name,
                    sex:query.sex =1?"男":"女",
                    age:query.age,
                    text:query.text
                });
                if(query.id == i.id){
                    res.end(JSON.stringify({
                        ok:0,
                        msg:"您应该修改"
                    }))
                }else{
                    fs.writeFile("../src/data/u.json",JSON.stringify(arr),function () {
                        res.end(JSON.stringify({
                            ok:1,
                            msg:"添加信息成功",
                            name:query.name,
                            sex:query.sex =1?"男":"女",
                            age:query.age,
                            text:query.text
                        }))

                    })
                }
            })
        }
    })
})
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++用户修改信息++++++++++++++++++++++++++++++++++++++++++++++
//用户修改信息
app.post('/update',function(req,res){
    //解决跨域，任何都可以访问'
    res.header("Access-Control-Allow-Origin", "*");
    //定义一个字符串接收数据
    var str = "";
    //进行监听接收数据
    req.addListener("data",function(json){
        str+=json;
        console.log(str);
    })
    //读取json文件
    fs.readFile("../src/data/u.json","utf-8",function(err,data){
        if(err){
            console.log(data);
            res.send("文件读取失败!");
        }else{
            console.log("文件读取成功");
            //1：根据前台传入的数据进行判断
            var dataJSON = JSON.parse(data);//将json字符串转成json对象
            dataJSON.forEach(function(i){//遍历数组
                console.log(i);
                //将json字符串转成json对象
                var arr = JSON.parse(data);
                console.log("arr");
                console.log(arr);
                var query = querystring.parse(str);
                console.log(query);
                if(query.id == i.id){
                    res.end(JSON.stringify({
                        ok:0,
                        msg:"您应该修改"
                    }))
                }else{
                    fs.writeFile("../src/data/u.json",JSON.stringify(arr),function () {
                        res.end(JSON.stringify({
                            ok:1,
                            msg:"添加信息成功",
                            name:query.name,
                            sex:query.sex =1?"男":"女",
                            age:query.age,
                            text:query.text
                        }))

                    })
                }
            })
        }
    })
})
app.listen(8080, () => {
  console.log('success');
})
