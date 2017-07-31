import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS,
  TouchableOpacity
} from 'react-native';

/*
  在reactnative中，使用fetch实现网络请求。fetch同XMLHttpRequest非常类似，是一个封装程度更高的网络api，使用起来很简洁，因为使用了promise。

  Promise是异步变成的一种解决方案，比传统的解决方案——回调函数和事件——更合理更强大。ES6将其写进了语言标准，统一了用法，原生提供了Promise对象。简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。

  Promise对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成）、Rejected（已失败）。

  Promise实例生成以后，可以分别指定“完成”和”失败”状态的回调函数。实现方式：链式调用方法。fetch中使用的就是该特性。


  链式调用语法：
    fetch(参数)
    .then(完成的回调函数)
    .catch(失败的回调函数)

    fetch(url,opts)
    .then((response) => {
      //response是网络请求成功后的响应对象
      //网络请求成功执行后回调该函数
        return response.text(); //回调一个文本
        return response.json(); //回调一个json
    })
    .then((resonseData) => {
      //处理请求得到的数据
    })
    .catch((error) => {
    //网络请求失败执行该回调函数，得到错误信息
  })
   */

function getRequest(url) {
  var opts = {
    method: "GET"
  };

  fetch(url, opts)
  .then((response) => {
    return response.text()
  })
  .then((responseText) => {
    alert(responseText)
  })
  .catch((error) => {
    alert(error)
  })
}

/*
  FormData

  Web应用中频繁使用的一项功能就是表单数据的序列化，XMLHttpRequest2级定义了FormData类型。
  FormData主要用于实现序列化表单以及创建与表单格式相同的数据。

  var data = new FormData();
  data.append("name", "yihuiyun");
  append方法接收两个参数：键和值。分别对应表单字段的名字和字段中包含的中，添加多个键值对。

  在jquery中，“key=value&key2=value2”作为参数传入对象框架会自动封装成FormData形式。在Fetch中进行post请求时，需要自动创建FormData对象传给body
 */

function PostRequest(url) {

  //将key=value&key2=value2封装成FormData形式

  let formData = new FormData();
  formData.append("username", "nihao");
  formData.append("password","456");

  var opts = {
    method: "POST",
    body: formData
  }

  fetch(url,opts)
  .then((response) => {
    return response.text()
  })
  .then((responseText) => {
    alert(responseText)
  })
  .catch((error) => {
    alert(error)
  })
}

var GetData = React.createClass({
  render: function () {
    return (
      <View style={Styles.container}>
        <TouchableOpacity onPress={getRequest.bind(this, "http://project.lanou3g.com/projects/bj/reactnative/login.php?username=nihao&password=123")}>
          <View style={Styles.btn}>
            <Text >Get</Text>
          </View>
        </TouchableOpacity >
        <TouchableOpacity onPress={PostRequest.bind(this, "http://project.lanou3g.com/projects/bj/reactnative/login.php")}>
          <View style={Styles.btn}>
            <Text >post</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
});

var Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: "cyan",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  btn: {
    width: 50,
    height: 30,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center"
  },
});


module.exports = GetData;
