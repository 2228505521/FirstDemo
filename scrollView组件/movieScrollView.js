import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

//从文件中读取数据，执行require相当于执行了json.path方法
var movieData = require("./data.json");
//获取所有movies数据，根据数据源看
var movies = movieData.movies;

var MovieScrollView = React.createClass({

  render: function () {

    //创建电影列表组件
    //遍历movies数组，每当获取movie对象，就创建一个组件。
    var moviesRows = [];

    for (var i in movies) {
      //获取movie对象
      var movie = movies[i];
      //创建组件，显示图片(movie.posters.thumbnail)，名称(movie.title)，时间（movie.year）
      var row = (
        <View
          key={i}
          style={Styles.container}
          >
          <Image
            style={Styles.thumbnail}
            source={{uri:movie.posters.thumbnail}}
          />
          <View style={Styles.rightContainer}>
            <Text style={Styles.title}>{movie.title}</Text>
            <Text style={Styles.year}>{movie.year}</Text>
          </View>
        </View>
      );

      moviesRows.push(row);
    }

    return (
      <View style={Styles.flex}>
        <ScrollView style={Styles.scrollView}>
          {
            //添加数组（所有子组件）
            moviesRows
          }
        </ScrollView>
      </View>
    );
  }
});

var Styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  scrollView: {
    flex: 1,
    marginTop:25,
    backgroundColor: "#f5fcff"
  },

  container: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    backgroundColor: "#f5f5f5"
  },
  thumbnail: {
    width: 53,
    height: 81,
    backgroundColor: "gray",
  },
  rightContainer: {
    marginLeft: 10,
    flex: 1
  },
  title: {
    fontSize: 18,
    marginTop: 3,
    marginBottom: 3,
    textAlign: "center"
  },
  year: {
    fontSize: 14,
    marginTop: 3,
    marginBottom: 3,
    textAlign: "right"
  },
});










module.exports = MovieScrollView;
