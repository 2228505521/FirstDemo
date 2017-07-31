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
  View
} from 'react-native';

//view组件学习
/*
  view和div类似
 */

var FirstDemo = React.createClass({
  render: function() {
    return (
      <View style={[styles.container,styles.flex]}>
        <View style={styles.item}>
          <View style={[styles.flex,styles.center]}>
            <Text>酒店</Text>
          </View>
          <View style={[styles.flex,styles.lineLeftRight]}>
            <View style={[styles.flex,styles.center,styles.lineTopBottom]}>
              <Text>海外酒店</Text>
            </View>
            <View style={[styles.flex,styles.center]}>
              <Text>特价酒店</Text>
            </View>
          </View>
          <View style={styles.flex}>
            <View style={[styles.flex,styles.center,styles.lineTopBottom]}>
              <Text>团购</Text>
            </View>
            <View style={[styles.flex,styles.center]}>
              <Text>民宿.客栈</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: "#f2f2f2",
  },
  flex: {
    flex: 1,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },

  //外层item
  item: {
    flexDirection: "row",
    backgroundColor: "green",
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    height: 80,
    borderRadius: 5,
  },

  //内层item
  //设置白线
  lineLeftRight: {
    borderColor: "white",
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  lineTopBottom: {
    borderColor: "white",
    borderBottomWidth: 1,
  },

});









AppRegistry.registerComponent('FirstDemo', () => FirstDemo);
