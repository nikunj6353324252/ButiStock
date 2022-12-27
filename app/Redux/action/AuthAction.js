import {USER_LOGIN, AUTH_LOADING, USER_LOGOUT, USER_LOGGEDIN} from './Types';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authLoadingAction =
  (loading = false) =>
  dispatch => {
    dispatch({
      type: AUTH_LOADING,
      payload: loading,
    });
  };

export const authLogOutAction = () => async dispatch => {
  try {
    await AsyncStorage.removeItem('userToken');
  } catch (error) {
    console.log(error);
  }

  dispatch({
    type: USER_LOGOUT,
  });
};

export const userLoginAction =
  (userName = '', userPassword = '') =>
  dispatch => {
    dispatch(authLoadingAction(true));
    var myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'Bearer thsJ4[pR3=bM5^gJ0]pS6.gI2$hV5*uSwq',
    );
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      username: userName,
      password: userPassword,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      'https://nt.dhyatiktok.com/qr_stock_api/register/login',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        const userInfo = result;
        console.log('userInfo', userInfo.token);
        dispatch(authLoadingAction());
        if (userInfo.status == true) {
          if (userInfo && userInfo.token) {
            (async () => {
              await AsyncStorage.setItem('userToken', userInfo.token);
            })();

            (async () => {
              const token = await AsyncStorage.getItem('userToken');
              dispatch(userLoggedInAction(token));
            })();
            dispatch({
              type: USER_LOGIN,
              payload: userInfo.token,
            });

            Toast.show({
              text1: 'User Login Successfully',
              visibilityTime: 3000,
              autoHide: true,
              position: 'top',
              type: 'success',
            });
          }
        } else {
          Toast.show({
            text1: 'User Login failed.',
            visibilityTime: 3000,
            autoHide: true,
            position: 'top',
            type: 'error',
          });
        }
      })
      .catch(error => {
        dispatch(authLoadingAction());

        Toast.show({
          text1: 'Server Response Failed',
          visibilityTime: 3000,
          autoHide: true,
          position: 'top',
          type: 'error',
        });
      });
  };

export const userLoggedInAction =
  (userToken = '') =>
  async dispatch => {
    dispatch({
      type: USER_LOGGEDIN,
      payload: userToken,
    });
  };
