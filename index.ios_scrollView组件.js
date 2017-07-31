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

//scrollView组件

//练习1：实现基本功能
// var FirstDemo = require("./myScrollView");

//练习2：电影列表
var FirstDemo = require("./movieScrollView")






AppRegistry.registerComponent('FirstDemo', () => FirstDemo);
