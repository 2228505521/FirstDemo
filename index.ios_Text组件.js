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

/*
  Text组件常用特性：
  onPress手指触摸事件
  numberOfLines显示多少行
  设置字体颜色、大小、对齐方式等
 */

//引入TextHeaderView文件
var Header = require("./text_view/TextHeaderView");
var News = require("./text_view/TextNewsView")

var FirstDemo = React.createClass({
  render: function() {

    //定义一个需要显示的数组传递给News
    var news = [
      "打扫房间奥斯卡地方啦看见对方空间里萨接待来访阿道夫骄傲了开发",
      "adkfajladkfaldfjlakdfjlakdjflakjdlfkadjflkajdflajldfjaldkfjalskdfj",
      "adLjdflakjdflakjdflk独守空房静安寺两地分居埃里克减肥啦数据库党费交历史课的飞机",
      "独守空房就爱看党费交阿里"
    ];

    return (
      <View style={styles.flex}>
        { /* Header */ }
          <Header> </Header>
        { /* News */ }
        <News news={news}></News>
      </View>
    );
  }

});

var styles = StyleSheet.create({
  flex: {
    flex: 1
  }
});



AppRegistry.registerComponent('FirstDemo', () => FirstDemo);
