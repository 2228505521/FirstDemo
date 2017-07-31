import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} from 'react-native';

var movieData = require("./data.json");
var movies = movieData.movies;
var MovieListView = React.createClass({

  getInitialState: function () {
    var ds = new ListView.DataSource({
      rowHasChanged: (oldRow,newRow) => oldRow!==newRow
    });
    return {
      dataSource: ds.cloneWithRows(movies)
    };
  },

  _renderRow: function (movie) {
    return (
      <View style={Styles.flex}>
        <Image
          source={{uri:movie.posters.thumbnail}}
          style={Styles.thumbnail}
        ></Image>
        <View style={Styles.rightContainer}>
          <Text style={Styles.title}>{movie.title}</Text>
          <Text style={Styles.year}>{movie.year}</Text>
        </View>
      </View>
    )
  },

  _renderHeader: function () {
    return (
      <View style={Styles.header}>
        <Text style={Styles.header_text}>Movies List</Text>
        <View style={Styles.header_line}></View>
      </View>
    );
  },

  //渲染分割线
  _renderSeparator: function (sectionID:number,rowID:number) {//顺序不能反
    return (
      <View
        style={Styles.separator}
        key={rowID}
        >
        </View>
    );
  },

  render: function () {
    return (
      <ListView
        style={Styles.listView}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderHeader={this._renderHeader}
        renderSeparator={this._renderSeparator}
        initialListSize={10} //提高渲染效率，预先渲染10个
        >
      </ListView>
    );
  }
});

var Styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "center"
  },
  ListView: {
    marginTop: 25,
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  row: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    backgroundColor: "#f5f5f5"
  },
  thumbnail: {
    width: 53,
    height: 81,
    backgroundColor: "gray",
    alignItems: "center",
    marginLeft: 20,
    marginTop: 20
  },
  rightContainer: {
    marginLeft: 10,
    flex: 1
  },
  title: {
    fontSize: 18,
    marginTop: 5,
    marginBottom: 5,
    textAlign: "center"
  },

  //header
  header: {
    height: 44,
    backgroundColor: "#f5f5f5"
  },
  header_text: {
    flex: 1,
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 44
  },
  header_line: {
    height: 1,
    backgroundColor: "#cccccc",
  },

  //分割线
  separator: {
    height: 1,
    backgroundColor: "#cccccc"
  },
});








module.exports = MovieListView;
