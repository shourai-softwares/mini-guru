import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { ThemeContext, getTheme } from 'react-native-material-ui';
import { uiTheme } from '../constants';
import CameraScreen from './CameraScreen';
import HomeScreen from './HomeScreen';
import RegisterScreen from './RegisterScreen';

const StackNavigation = createStackNavigator({
  Camera: {
    screen: CameraScreen,
  },
  Home: {
    screen: HomeScreen,
  },
  Register: {
    screen: RegisterScreen,
  },
}, {
  initialRouteName: 'Home',
});

// eslint-disable-next-line react/display-name
export default () => (
  <ThemeContext.Provider value={getTheme(uiTheme)}>
    <StackNavigation />
  </ThemeContext.Provider>
);
