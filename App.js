
import { Text,Navigator,TouchableHighlight,StyleSheet,View } from 'react-native';
import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import Arts from './Arts';
const RouteApp = StackNavigator({
    Arts: { screen : Arts},
});

export default RouteApp;
