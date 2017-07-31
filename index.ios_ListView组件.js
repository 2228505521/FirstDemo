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

//listView组件
//练习1：listView基本练习
// var FirstDemo = require("./myListView")

//练习2：电影列表
var FirstDemo = require("./movieListView")



AppRegistry.registerComponent('FirstDemo', () => FirstDemo);
