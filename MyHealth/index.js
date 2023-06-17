/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import { registerRootComponent } from 'expo';
import {name as appName} from './app.json';

import Navigation from './src/screens/Navigation';

if(Platform.OS == "ios"){
    registerRootComponent(Navigation)
}else{ 
    AppRegistry.registerComponent(appName, () => Navigation);
}