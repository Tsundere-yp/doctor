"use strict";$(".content-personal-ul li:nth-child(1)").click(function(){$(".personal-form").css({display:"block"}),$(".personal-order").css({display:"none"})}),$(".content-personal-ul li:nth-child(2)").click(function(){$(".personal-order").css({display:"block"}),$(".personal-form").css({display:"none"})}),$(".user").text(sessionStorage.uname),$("#true").click(function(){var e=sessionStorage.uname,s=$("#name").val(),n=$(".inputa1").val(),a=$(".age").val(),o=$(".inputa3").val();console.log($(".name")),console.log(a);var t=new XMLHttpRequest;t.open("post",url+"/adduser"),t.send("name="+s+"&sex="+n+"&age="+a+"&text="+o+"&id="+e),t.onload=function(e){if(200===t.status){var n=JSON.parse(t.responseText);console.log(t.responseText),1==n.ok?(alert(n.msg),alert("1"),s=n.name,a=n.age,o=n.text):alert(n.msg)}}}),$("#true1").click(function(){var e=sessionStorage.uname,s=$("#name").val(),n=$(".inputa1").val(),a=$(".age").val(),o=$(".inputa3").val();console.log($(".name")),console.log(a);var t=new XMLHttpRequest;t.open("post",url+"/update"),t.send("name="+s+"&sex="+n+"&age="+a+"&text="+o+"&id="+e),t.onload=function(e){if(200===t.status){var n=JSON.parse(t.responseText);console.log(t.responseText),1==n.ok?(alert(n.msg),alert("1"),s=n.name,a=n.age,o=n.text):alert(n.msg)}}});