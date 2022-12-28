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
  const [qrresult, setQrresult] = useState([]);
  const {setToken} = useSelector(state => state.authState);
  const {QrData} = useSelector(state => state.dataState);

  const productName = QrData.product_name;
  // console.log('abccd', productName);

  const onSuccess = ({data}) => {
    // dispatch(qrDataAction(setToken, data));
    // console.log('productName', productName);
    navigation.navigate('ScanScreen', {
      data: data,
    });
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
