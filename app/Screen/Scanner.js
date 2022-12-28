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
  console.log('qrd', QrData.product_name);

  let i = 0;
  const onSuccess = ({data}) => {
    // setQrresult(data);
    i++;
    // console.log('data', data);
    dispatch(qrDataAction(setToken, data));
    console.log('qr', QrData?.product_name);

    navigation.navigate('ScanScreen', {
      data: {
        product: QrData?.response?.product_name,
      },
    });
  };

  return (
    <QRCodeScanner
      onRead={onSuccess}
      reactivate={true}
      flashMode={RNCamera.Constants.FlashMode.off}
      topContent={
        <Text style={{flex: 1, fontSize: 18, padding: 32, color: '#777'}}>
          {qrresult}
        </Text>
      }
    />
  );
};

export default Scanner;
