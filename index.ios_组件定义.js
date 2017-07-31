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
  View
} from 'react-native';


//定义组件

var FirstDemo = React.createClass({
  render: function() {
    return (
      <View style={styles.contariner}>
        <View style={[styles.top,styles.border]}>
        </View>
        <View style={[styles.bottom,styles.border,{borderWidth: 5}]}>
        </View>
      </View>
    )
  }

})

/*
  1.html5以；结尾   react以，结尾
  2.html5中key、value都不加引号  react中属于js对象，key的名字不能出现“-”，需要使用驼峰命名法。如果value为字符串，需要加引号
  3.html5中，value如果是数字，需要带单位   react中不需要带单位
  4.[styles.bottom,styles.border,{borderWidth: 5}]样式越靠后优先级越高
 */

var styles = StyleSheet.create({
  //外层View
  contariner: {
    backgroundColor: "red",
    marginLeft: 30,
    width: 300,
    height: 400,
  },
  // 上层view
  top:{
    backgroundColor: "green",
    width: 280,
    height: 250,
    margin: 10,
  },
  //下层view
  bottom: {
    backgroundColor: "yellow",
    width: 280,
    height: 110,
    margin: 10,
    borderWidth: 2,
    borderColor: "black"
  },
  border: {
    borderWidth: 2,
    borderColor: "black"
  }
});

//flexbox盒模型
//学习实例w3c——flexbox——弹性盒子

AppRegistry.registerComponent('FirstDemo', () => FirstDemo);
