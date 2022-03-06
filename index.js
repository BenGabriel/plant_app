/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import PushNotification from 'react-native-push-notification';
import 'react-native-gesture-handler';

PushNotification.configure({
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
  },

  requestPermissions: Platform.OS === 'ios'
});

AppRegistry.registerComponent(appName, () => App);
