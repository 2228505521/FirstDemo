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
  Image
} from 'react-native';

//Image组件
/*
  用于显示图片的组件，包括网络图片、静态资源等等。
  常用性能：
  resizeMode：图片适应模式cover、contain、strech
  source：图片引用地址
  iOS支持属性：onLoad、onLoadEnd、onLoadStart、onProgress
 */

var imageList = React.createClass({
  render: function () {
    return (
      <View style={Styles.container}>
        <View style={Styles.topView}>
          <Image style={Styles.netImage} source={{uri:"http://inews.gtimg.com/newsapp_bt/0/1837692334/1000"}}></Image>
        </View>
        <View style={Styles.localView}>
          <Image
            style={Styles.localImage}
            source={require("./img/1883B91F-A8AB-4649-9132-3CA13348F7BD.png")}

          />
        </View>
      </View>
    );
  }
});

var Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    alignItems: "center"
  },
  topView: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    height: 300,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green"
  },
  netImage: {
    width: 200,
    height: 200,
    backgroundColor: "#ffffff"
  },

  localView: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    height: 300,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green"
  },
  localImage: {
    width: 200,
    height: 200,
    backgroundColor: "white"
  }
});







module.exports = imageList;

// AppRegistry.registerComponent('FirstDemo', () => FirstDemo);
