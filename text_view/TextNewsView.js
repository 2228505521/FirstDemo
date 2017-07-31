import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

//组件
var TextNewsView = React.createClass({
  show: function (title) {
    alert(title);
  },

  render: function () {

    //定义数组，用于存储Text的显示内容
    var newsArray = [];
    //遍历存储信息数组，从外部传入的
    for (var i in this.props.news) {
      var text = (
        <Text
          onPress={this.show.bind(this, this.props.news[i])}
          numberOfLines={2}
          key={i}
          style={Styles.news_item}
          >
          {this.props.news[i]}
        </Text>
      );
      newsArray.push(text);
    }
    return (
      <View style={Styles.flex}>
        {/*今日要闻*/}
        <Text style={Styles.news_title}>今日要闻</Text>
        {/*正文内容*/}
        {newsArray}
      </View>
    );
  }
});

//样式
var Styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  news_title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#cd1d1c",
    marginLeft: 10,
    marginTop: 15,
  },
  news_item: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 15,
    lineHeight: 20,
  }
});

//导入
module.exports = TextNewsView;
