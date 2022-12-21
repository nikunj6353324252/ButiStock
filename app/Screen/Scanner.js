import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {useNavigation} from '@react-navigation/native';

const Scanner = () => {
  const navigation = useNavigation();
  const [qrresult, setQrresult] = useState([]);

  let i = 0;
  const onSuccess = ({data}) => {
    setQrresult(data);
    i++;
    if (i === 1) {
      setQrresult(data);
      if (qrresult) {
        navigation.navigate('ScanScreen', {
          data: {
            result: qrresult,
          },
        });
      }
    }
  };

  return (
    <QRCodeScanner
      onRead={onSuccess}
      reactivate={true}
      flashMode={RNCamera.Constants.FlashMode.off}
      topContent={<Text style={styles.centerText}>{qrresult}</Text>}
    />
  );
};

export default Scanner;

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
