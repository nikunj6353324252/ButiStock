import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './app/Redux/store';
import AppNav from './app/Navigation/AppNav';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

const App = () => {
  return (
    <Provider store={store}>
      <AppNav />
      <Toast />
    </Provider>
  );
};

export default App;
