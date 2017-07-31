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
  Image,
  TabBarIOS
} from 'react-native';

//TabBar组件
/*
  在ReactNative中，实现页面切换，提供了两个组件：TabBarIOS和TabBar.Item

  常用性能：
  selected：是否选中某个tab，如果选中则为true
  title：标题
  barTintColor：tab栏的背景颜色
  icon：图标
  onPress：点击事件，当某个tab选中时，需要改变组件的selected={true}

  实现原理：点击tab时触发onPress方法，记录被点击tab的title。再通过title设置tab是否被选中（通过比较设置selected的值，true/false）
 */

var ListPage = require("./listView组件/movieListView");//./listView组件/movieListView
var ImagesPage = require("./index.ios_image组件");//./index.ios_image组件
var InputPage = require("./index.ios_TextInput组件");//./index.ios_TextInput组件

var FirstDemo = React.createClass({
  //用于记录显示页面组件对应的title
  getInitialState: function () {
    return {
      tab: "movie"
    };
  },

  //TabBarIOS.Item的onPres的处理方法
  select: function (tabName) {
    this.setState({
      tab: tabName
    });
  },

  render: function () {
    return (
      <TabBarIOS style={{flex: 1}}>
        <TabBarIOS.Item
          title="movie"
          icon={require("./img/status-small@2x.png")}
          onPress={this.select.bind(this, "movie")}
          selected={this.state.tab==="movie"}>
            <ListPage></ListPage>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="image"
          systemIcon="bookmarks"
          onPress={this.select.bind(this, "image")}
          selected={this.state.tab==="image"}>
            <ImagesPage></ImagesPage>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="input"
          icon={require("./img/team-introduction-grey@2x.png")}
          selected={this.state.tab==="input"}
          onPress={this.select.bind(this, "input")}
          >
            <InputPage></InputPage>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});










AppRegistry.registerComponent('FirstDemo', () => FirstDemo);
