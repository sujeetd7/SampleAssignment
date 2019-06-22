/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { Component } from 'react';
 import {
   Platform,
   StyleSheet,
   Text,
   View
 } from 'react-native';
 import { createStackNavigator,createAppContainer } from 'react-navigation';
 import AddParty from './AddParty/index';
 import SearchParty from './SearchParty/index';
 
 const AppNavigator = createStackNavigator({
   AddParty: { screen: AddParty },
   SearchParty: { screen: SearchParty }
 });
 
  class App extends Component {
   render() {
    //  return (
    //    <AppNavigator />
    //  );
   }
 }

 export default createAppContainer(AppNavigator);
