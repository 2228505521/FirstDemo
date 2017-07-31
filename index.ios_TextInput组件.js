/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeeback,
  TextInput,
} from 'react-native';

//TouchableOpacity组件
/*
  React Natvie提供三个组件作用于其他没有触摸事件的组件绑定触摸事件

  TouchableOpacity：透明触摸，点击时，自减会出现透明过渡效果
  TouchableHighlight：高亮触摸，点击时，组件会出现高亮效果
  TouchableWithoutFeeback：无反馈性触摸，点击时，组件无视觉变化

  如果使用，需要导入以上组件
 */

/*
  TextInput是一个允许用户在应用中通过键盘输入文本的基本组件。
  本组件的属性提供了多种特性的配置，譬如自动完成、自动大小写、展位文字，以及都中不同的键盘类型等等。。
  placeholder占位符
  value输入框的值
  password是否密文输入
  editable输入框是否可以编辑
  returnKeyType键盘return键类型

 */

var TextInputPage = React.createClass({

  clickBtn: function () {
    alert(this.state.inputText);
  },

  getInitialState: function () {
    return {
      inputText: ""
    };
  },

  getContent: function (text) {
    this.setState({
      inputText: text
    });
  },

  render: function () {
    return (
      <View style={Styles.container}>
        <View style={Styles.flex}>
          <TextInput
            style={Styles.input}
            placeholder="请输入内容"
            returnKeyType="search"
            onChangeText={this.getContent}
          />
        </View>
        <TouchableOpacity style={Styles.btn} onPress={this.clickBtn}>
          <Text style={Styles.search}>搜索</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

var Styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 45,
    marginTop: 25,
  },
  flex: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    marginLeft: 5,
    paddingLeft: 5,
    borderColor: "#ccc",
    borderRadius: 4
  },
  btn: {
    width: 55,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "blue",
    height: 45,
    justifyContent: "center",
    alignItems: "center"
  },
  search: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold"
  },
});


module.exports = TextInputPage;









// AppRegistry.registerComponent('FirstDemo', () => FirstDemo);
