import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userLoggedInAction} from '../Redux/action/AuthAction';

const AppNav = () => {
  const dispatch = useDispatch();
  const {authLoading, setToken} = useSelector(state => state.authState);

  useEffect(() => {
    (async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      try {
        dispatch(userLoggedInAction(userToken));
      } catch (e) {
        console.log(e);
      }
    })();
  }, [dispatch]);

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <Spinner
        visible={authLoading}
        textContent={'Loading...'}
        textStyle={{color: '#fff'}}
        overlayColor="rgba(0,0,0, 0.5)"
      />
      <NavigationContainer>
        {setToken ? (
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
