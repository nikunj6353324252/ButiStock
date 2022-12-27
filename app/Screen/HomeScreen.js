import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {scale, verticalScale} from 'react-native-size-matters';

const {height} = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor: '#2C3539'}}>
      <StatusBar backgroundColor={'#87CEEB'} barStyle="light-content" />
      <View
        style={{
          height: height / 2,
          backgroundColor: '',
          marginHorizontal: 20,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Scan')}
          style={{
            backgroundColor: '#474c54',
            marginTop: 10,
            padding: 13,
            paddingVertical: verticalScale(30),
            borderRadius: 7,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{fontSize: scale(30), color: 'white', fontWeight: 'bold'}}>
            Qr Scan
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: height / 2,
          backgroundColor: '',
          marginHorizontal: 20,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Report')}
          style={{
            backgroundColor: '#474c54',
            marginTop: 30,
            marginBottom: verticalScale(150),
            padding: 13,
            paddingVertical: verticalScale(30),
            borderRadius: 7,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{fontSize: scale(30), color: 'white', fontWeight: 'bold'}}>
            Report
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
