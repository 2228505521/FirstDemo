import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS,
  TouchableOpacity,
  ListView,
} from 'react-native';

/*
  展示电影列表

  逻辑：未获得数据时，显示等待页面;
  获得数据时，显示电影列表页面

  需要给state添加一个属性，记录下载状态

 */

var REQUEST_URL = "https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample"

var MoviewList = React.createClass({

  getInitialState: function () {

    var ds = new ListView.DataSource({
      rowHasChanged:(oldRow,newRow) => oldRow!==newRow
    });

    return {
      loaded: false,//数据是否下载成功的标识
      dataSource: ds
    }
  },

  //等待加载页面
  renderLoadingView: function () {
    return (
      <View style={loadingStyle.container}>
        <Text style={loadingStyle.text}>loading..</Text>
      </View>
    )
  },

  //发起请求
  getData:function () {
    fetch(REQUEST_URL)
    .then((response) => {
      return response.json()
    })
    .then((responseData) => {
      //刷新组件，重新渲染组件，展示ListView
      //得到新的数据，并赋值dataSource
      this.setState({
        loaded: true,
        dataSource: this.state.dataSource.cloneWithRows(responseData.movies)
      });
    })
    .catch((error) => {
      alert(error)
    })
  },

  //组件挂载完成，调用数据请求
  componentDidMount: function () {
    //组件挂载后，开始下载数据
    this.getData();
  },

  //处理ListView
  _renderRow: function (movie) {
    return (
      <View style={ListViewStyle.container}>
        <Image
        style={ListViewStyle.thumnail}
        source={{uri:movie.poster.thumbnail}}
        />
        <View style={ListViewStyle.textContainer}>
          <Text style={ListViewStyle.title}>{movie.title}</Text>
          <Text style={ListViewStyle.year}>{movie.year}</Text>
        </View>
      </View>
    )
  },
  _renderHeader: function () {
    return (
      <View style={ListViewStyle.header}>
        <Text style={ListViewStyle.header_text}>电影列表</Text>
        <View style={ListViewStyle.header_separator}></View>
      </View>
    )
  },
  _renderSeparator: function (sectionID: number, rowID:number) {
    var style = {
      height: 1,
      backgroundColor: "#cccccc"
    };
    return (
      <View style={style}></View>
    )
  },

  render: function () {

    // 如果未请求到数据，提示等待加载页面
    if(!this.state.loaded) {
      return this.renderLoadingView()
    }
    return (
      //返回电影列表
      <ListView
        style={ListViewStyle.listView}
        dataSource={this.state.dataSource}
        initialListSize={10}
        renderHeader={this._renderHeader}
        renderSeparator={this._renderSeparator}
        renderRow={this._renderRow}
      />
    )
  }
});

var loadingStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    backgroundColor: "cyan",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
  },
});

var ListViewStyle = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    backgroundColor: "#f5f5f5"
  },
  thumnail: {
    width: 53,
    height: 81,
    backgroundColor: "gray"
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    marginTop: 3,
    fontSize: 18,
    textAlign: "center"
  },
  year: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 13,
    textAlign: "right",
    color: "red"
  },

  header: {
    height: 44,
    backgroundColor: "#f5f5f5",
  },
  header_text: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  header_separator: {
    height: 1,
    backgroundColor: "red"
  },

  listView: {
    marginTop: 25,
    backgroundColor: "#f5f5f5"
  },
});

var Styles = StyleSheet.create({

});



module.exports = MoviewList;
