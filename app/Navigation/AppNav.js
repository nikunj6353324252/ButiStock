import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

const AppNav = () => {
  const dispatch = useDispatch();
  const {authLoading, userToken} = useSelector(state => state.authState);

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <Spinner
        visible={authLoading}
        textContent={'Loading...'}
        textStyle={{color: '#fff'}}
        overlayColor="rgba(0,0,0, 0.5)"
      />
      <NavigationContainer>
        {userToken ? (
          <AppStack />
        ) : (
          <>
            <AuthStack />
          </>
        )}
      </NavigationContainer>
    </View>
  );
};

export default AppNav;
