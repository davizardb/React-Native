import React from 'react'
import { Provider } from 'react-redux'
import {AppRegistry} from 'react-native';
// import App from './src/App';
import Splash from './src/screens/Splash'
import {name as appName} from './app.json';



import storeConfig from './src/store/storeConfig'

import axios from 'axios'
axios.defaults.baseURL = 'https://lambe-52e60-default-rtdb.firebaseio.com/'

const store = storeConfig()
const Redux = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)

AppRegistry.registerComponent(appName, () => Splash)