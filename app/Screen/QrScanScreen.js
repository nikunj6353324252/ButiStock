import {View, Text} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

const QrScanScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2C3539',
      }}>
      <Text style={{fontSize: scale(20), color: 'white'}}>QrScanScreen</Text>
    </View>
  );
};

export default QrScanScreen;
