

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import DonateScreen from './app/roots/DonateScreen';
import MainScreen from './app/roots/MainScreen';
import {StackNavigator} from 'react-navigation';


const sample = StackNavigator({
  Home: { screen: MainScreen },
  Donate: {screen: DonateScreen},
});



AppRegistry.registerComponent('sample', () => sample);


