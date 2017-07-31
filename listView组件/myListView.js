import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} from 'react-native';

/*
  使用listView.DataSourse给他传递一个普通的数据数组

  ListView实现： row/section组件定义、设置数据

  设置ListView数据源：state
  将DataSource对象设置为state属性,ListView会根据数据源进行渲染
 */

//原始数据
var contents = [
  "课程1","课程2","课程3","课程4","课程5","课程6","课程7"
];

var MyListView = React.createClass({
  getInitialState: function () {
    //创建一个dataSource对象
    var ds = new ListView.DataSource({
      //通过判断决定渲染哪些行组件，避免全部渲染，提高渲染效率
      rowHasChanged: (oldRow,newRow) => oldRow !== newRow
    });

    return {
      //设置dataSource时，不直接使用提供的原始数据，使用cloneWithRows对数据源进行复制，使用复制后的数据源实例化listview。优势：当原始数据发生变化时，ListView的dataSource不会发生变化。
      dataSource: ds.cloneWithRows(contents)
    };
  },

  _renderRow: function (rowData) {
    //渲染row 参数rowData是每行要显示的数据对象
    return (
      <View style={Styles.row}>
        <Text style={Styles.contents}>{rowData}</Text>
      </View>
    )
  },

  render: function () {
    return (
      <ListView style={Styles.container}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}//此时会读取数据源中的数据传给_renderRow中的rowData参数
      />
    )
  }
});

var Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  row: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    height: 100,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  contents: {
    fontSize: 15,
    color: "red",
    alignItems: "center",
    justifyContent: "center"
  },
});












module.exports = MyListView;
