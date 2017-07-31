import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  RefreshControl,
  Alert,
} from 'react-native';

/*
  实现监测拖拽、滑动的相关方法

  添加几个子组件

 */

var MyScrollView = React.createClass({

  _onScrollBeginDrag: function () {
    console.log("开始拖拽");
  },

  _onScrollEndDrag: function () {
    console.log("结束拖拽");
  },

  _onMomentumScrollBegin: function () {
    console.log("开始滑动");
  },
  _onMomentumScrollEnd: function () {
    console.log("滑动结束");
  },

  //刷新控件的方法

  _onRrefresh: function () {
    alert("正在刷新");
  },

  render: function () {
    return (
      <View style={Styles.container}>
        <ScrollView
          style={Styles.scrollView}
          showsVerticalScrollIndicator={true}
          onScrollBeginDrag={this._onScrollBeginDrag}
          onScrollEndDrag={this._onScrollEndDrag}
          onMomentumScrollBegin={this._onMomentumScrollBegin}
          onMomentumScrollEnd={this._onMomentumScrollEnd}
          refreshControl={
            <RefreshControl
              refreshing={false}
              tintColor="red"
              title="正在刷新.."
              onRefresh={this._onRrefresh}
            />
          }
          >
          <View style={Styles.view_1}></View>
          <View style={Styles.view_2}></View>
          <View style={Styles.view_3}></View>
        </ScrollView>
      </View>
    );
  }
});

var Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue"
  },
  scrollView: {
    marginTop: 20,
    backgroundColor: "white",
  },

  //子组件
  view_1: {
    margin: 15,
    flex: 1,
    height: 300,
    backgroundColor: "yellow"
  },
  view_2: {
    margin: 15,
    flex: 1,
    height: 300,
    backgroundColor: "red"
  },
  view_3: {
    margin: 15,
    flex: 1,
    height: 300,
    backgroundColor: "green"
  },
});



module.exports = MyScrollView;
