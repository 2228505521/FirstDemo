import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

//组件
var TextHeaderView = React.createClass({
  render: function() {
    return (
      <View style={Styles.container}>
        <Text>
          <Text style={[Styles.font_1,Styles.font]}>网易</Text>
          <Text style={[Styles.font_2,Styles.font]}>新闻</Text>
          <Text style={Styles.font}>有态度</Text>
        </Text>
      </View>
    );
  }
});

//样式
var Styles = StyleSheet.create({
  container: {
    marginTop: 25,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "red",
    alignItems: "center"
  },
  //字体设置的公共部分
  font: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  font_1: {
    color: "#cd1d1c",
  },
  font_2: {
    color: "white",
    backgroundColor: "red",
  },
});

//导出
module.exports = TextHeaderView;
