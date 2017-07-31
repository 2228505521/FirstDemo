import React, { Component } from 'react';
import {Navigator} from 'react-native-deprecated-custom-components';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

/*
  导航器同构路由对象（route）来分辨不同的场景。每个路由对象都对应一个页面组件，开发者设置什么，导航器显示什么，所以route是导航器中重要的一个对象。

  三步操作实现导航功能：
  1.设置路由对象（告诉导航器我要显示哪个页面）
  创建路有对象，对象的内容自定义，但是必须包含该场景需要展示的页面组件。
  2.场景渲染配置（告诉导航器我要什么样的页面跳转效果）
  3.渲染场景（告诉导航器如何渲染页面）
  利用第一步设置的路由对象进行渲染场景
 */

// 定义第一个页面FirstPage，一个button，点击进入下一级页面
var FirstPage = React.createClass({
  //按钮onPress时间处理方法
  pressPush: function () {
    //退出下一级页面
    var nextRoute = {
      component: SecondPage
    }
    this.props.navigator.push(
      nextRoute
    )
  },

  render: function () {
    return (
      <View style={[Styles.flex, {backgroundColor:"yellow"}]}>
        <TouchableOpacity onPress={this.pressPush} style={Styles.btn}>
          <Text>跳转到下级页面</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

// 定义第二个页面
// SecondPage 一个按钮，点击返回上一级页面

var SecondPage = React.createClass({

  pressPop: function () {
    this.props.navigator.pop()
  },

  render: function () {
    return (
      <View style={[Styles.flex, {backgroundColor:"blue"}]}>
        <TouchableOpacity onPress={this.pressPop} style={Styles.btn}>
          <Text>返回上一级页面</Text>
        </TouchableOpacity>
      </View>
    );
  }
});


var MyNavigator = React.createClass({
  render: function () {
    var rootRoute = {
      component: FirstPage
    };

    return (
      <Navigator
        /*
          第一步：设置属性initialRoute
          这个指定了默认的页面，也就是启动app之后会看到界面的第一屏。
          这个对象的属性是自定义的，这个对象的内容会在renderScene方法中处理。
          备注：必须包含的属性，即component，表示需要渲染的页面组件。
         */
        initialRoute={rootRoute}
        /*
          第二步：设置configureScene场景渲染配置
         */
        configureScene={(route) => {
          return Navigator.SceneConfigs.PushFromRight
        }}
        /*
          第三步：设置renderScene渲染场景
          参数：route（第一步创建并设置给导航器的路由对象），navigator（导航器对象）
          实现：给需要显示的组件设置属性
         */
        renderScene={(route, navigator) => {
          //从route对象中获取页面组件
          var Component = route.component;
          return (
            <Component
              navigator={navigator}
              route={route}
            />
          );
        }}
      />
    );
  }
});

var Styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    width: 350,
    height: 30,
    borderColor: "red",
    borderWidth: 4,
    justifyContent: "center",
    alignItems: "center"
  },
});












module.exports = MyNavigator;
