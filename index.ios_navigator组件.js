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
  Image
} from 'react-native';

//Navigator导航器
/*
  在ReacNative中，有两个实现导航功能的组件：navigator和navigatorios
  navigator支持安卓和ios，navigatorios支持ios
  navigatorios比navigator具有更多的属性和方法，在UI方面可以尽心更多的设置，例如：backButtonIcon、backButtonTitle、onLeftButtonPress等等，比较方便，如果想实现更能多的自定义设置，建议使用navigator
 */

//实现导航功能
// var FirstDemo = require("./myNavigation")

//实现导航功能，并且进行传至
var FirstDemo = require("./passValueNavigation")









AppRegistry.registerComponent('FirstDemo', () => FirstDemo);
