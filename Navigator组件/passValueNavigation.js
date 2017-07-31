import React, { Component } from 'react';
import {Navigator} from 'react-native-deprecated-custom-components';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

//从前一个页面向后一个页面传值
//输入页面
var InputPage = React.createClass({
  //记录输入框的变量
  getInitialState: function () {
    return {
      content: " "
    }
  },
  getInputContent: function (inputText) {
    this.setState({
      content: inputText
    });
  },
  pushNextPage: function () {
    //推出下一级页面，并且传值
    var route = {
      component: DetailPage,
      passProps: {
        //将输入框的内容传递给下一级页面
        showText: this.state.content
      },
    };
    this.props.navigator.push(route)
  },
  render: function () {
    return (
      <View style={InputStyle.container}>
        <TextInput
          style={InputStyle.input}
          placeholder="请输入内容"
          onChangeText={this.getInputContent}
        />
        <TouchableOpacity style={InputStyle.btn} onPress={this.pushNextPage}>
          <Text >进入下一页</Text>
        </TouchableOpacity>
      </View>
    )
  }
});

//详情页面，显示文本和返回按钮

var DetailPage = React.createClass({

  popInputPage: function () {
    this.props.navigator.pop()
  },

  render: function () {
    return (
      <View style={DetailStyle.container}>
        <Text style={DetailStyle.detailText}>{this.props.showText}</Text>
        <TouchableOpacity style={DetailStyle.btn} onPress={this.popInputPage}>
          <Text style={{color:"blue"}}>返回上一页</Text>
        </TouchableOpacity>
      </View>
    )
  }
});

var PassValueNavigator = React.createClass({
  render: function () {
    var rootRoute = {
      component: InputPage,
      //存储需要传值的内容
      passProps: {

      }
    };
    return (
      <View style={{flex: 1}}>
        <Navigator
          initialRoute={rootRoute}
          configureScene={(route)=>{
            return Navigator.SceneConfigs.PushFromRight
          }}
          renderScene={(route, navigator)=>{
            var Component = route.component;
            return (
              <Component
                navigator={navigator}
                route={route}
                //传值方法,通过...把passProps中的所有值全部传给下一页面
                {...route.passProps}
              />
            )
          }}
        />
      </View>
    )
  }
});

var InputStyle = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffffff"
    },
    input: {
      height: 45,
      marginLeft: 25,
      marginRight: 25,
      borderWidth: 1,
      borderColor: "#f5f5f5",
    },
    btn: {
      marginTop: 20,
      height: 30,
      width: 100,
    }
});

var DetailStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  detailText: {
    marginLeft: 25,
    marginRight: 25,
    padding: 25,
    backgroundColor: "yellow",

  },
  btn: {
    marginTop: 20,
    height: 30,
    width: 100,
  }
});








module.exports = PassValueNavigator;
