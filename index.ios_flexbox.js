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
  ScrollView
} from 'react-native';


//定义组件
var FlexBox = React.createClass({
  render: function(){
    return (
      <View style={styles.container}>
        <ScrollView style={{backgroundColor:"#0e1b12"}}>
          <View style={styles.topContainer}>
            <View style={styles.topView1}></View>
            <View style={styles.topView2}></View>
            <View style={styles.topView3}></View>
          </View>
          <View style={styles.secondContainer}>
            <View style={styles.secView1}></View>
            <View style={styles.secView2}>
              <View style={styles.secView2_1}></View>
              <View style={styles.secView2_2}></View>
            </View>
          </View>
          <View style={styles.thirContainer}>
            <View style={styles.thirView_1}></View>
            <View style={styles.thirView_2}></View>
            <View style={styles.thirView_3}></View>
          </View>
          <View style={styles.fourContainer}>
            <View style={styles.fourView1}>
              <View style={styles.fourView2}>
                <Text style={styles.text}>FlexBox</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
});

//flexbox盒模型
//学习实例w3c——flexbox——弹性盒子

var styles = StyleSheet.create({
//flex属性
/*
  给一个组件指定flex，并且它的值是一个数字。flex：1表示组件可以撑满父组件所有剩余空间，如果同时存在多个并列的子组件，此时子组件均分父组件的空间。
  如果flex的值不为1，则并列子组件的空间按照flex值的比例显示，值越大空间就越大。
 */
container: {
  flex: 1,
  backgroundColor: "#ee423d"
},
topContainer: {
  height: 80,
  flexDirection: 'row'
},
topView1: {
  backgroundColor: "#063c73",
  flex: 1
},
topView2: {
  backgroundColor: "#d29b20",
  flex: 1,
},
topView3: {
  backgroundColor: "#d2d120",
  flex: 1,
},

secondContainer: {
  height: 80,
  flexDirection: "row",
},
secView1: {
  flex: 1,
  backgroundColor: "#78c648"
},
secView2: {
  flex:1,
  backgroundColor: "#2fb540",
},
secView2_1: {
  flex: 1,
  backgroundColor: "#46a482"
},
secView2_2: {
  flex: 1,
  backgroundColor: "#46a4a2"
},

thirContainer: {
  backgroundColor: "#290eff",
  height: 120
},
thirView_1: {
  flex: 1,
  backgroundColor: "#943ed7",
  margin: 10
},
thirView_2: {
  flex: 1,
  backgroundColor: "#943ed7",
  margin: 10
},
thirView_3: {
  flex: 1,
  backgroundColor: "#943ed7",
  margin: 10
},

fourContainer: {
  height: 100,
  marginLeft: 10,
  marginRight: 10,
  marginBottom: 10,
  backgroundColor: "#943ed7",
},
fourView1: {
  margin: 10,
  flex: 1,
  backgroundColor: "#822155",

},
fourView2: {
  margin: 10,
  flex: 1,
  backgroundColor: "#3ed769",
  justifyContent: "center",
  alignItems: 'center'
},
text: {
  fontSize: 15,
  color: "#c81de4",
  textAlign: 'center'
},

});

module.exports = FlexBox;
