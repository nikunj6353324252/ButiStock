import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {qrDataAction} from '../Redux/action/DataAction';

const Scanner = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {setToken} = useSelector(state => state.authState);
  const {QrData} = useSelector(state => state.dataState);

  const onSuccess = ({data}) => {
    console.log(data);
    dispatch(qrDataAction(setToken, data));
    if (data) {
      navigation.navigate('ScanScreen');
    }
    setTimeout(() => {
      navigation.navigate('ScanScreen', {
        data: data,
      });
    }, 1500);
  };

  return (
    <QRCodeScanner
      onRead={onSuccess}
      reactivate={true}
      flashMode={RNCamera.Constants.FlashMode.off}
    />
  );
};

export default Scanner;
