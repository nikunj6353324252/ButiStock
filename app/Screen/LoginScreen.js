import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {scale, verticalScale} from 'react-native-size-matters';

const {height} = Dimensions.get('window');

const LoginScreen = () => {
  const navigation = useNavigation();
  const [number, setNumber] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#2C3539'} barStyle="light-content" />
      <View
        style={{
          backgroundColor: '#66b2ff',
          height: height / 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: scale(22), color: 'white', fontWeight: 'bold'}}>
          Hii , welcome to our app
        </Text>
      </View>

      <View style={{backgroundColor: '#282828', height: height}}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            textAlign: 'center',
            marginTop: 15,
            fontWeight: 'bold',
          }}>
          Login to your Account
        </Text>
        <View style={{padding: scale(20), marginTop: verticalScale(30)}}>
          <TextInput
            placeholder="mobile no"
            placeholderTextColor={'white'}
            onChangeText={setNumber}
            value={number}
            style={{
              borderWidth: scale(1),
              borderRadius: scale(5),
              padding: scale(9),
              borderColor: 'white',
              color: 'white',
              backgroundColor: 'rgba(255,255,255,0.3)',
            }}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor={'white'}
            onChangeText={setPassword}
            value={password}
            style={{
              borderWidth: scale(1),
              borderRadius: scale(5),
              padding: scale(9),
              borderColor: 'white',
              marginTop: scale(28),
              color: 'white',
              backgroundColor: 'rgba(255,255,255,0.3)',
            }}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{
              backgroundColor: '#66b2ff',
              marginTop: scale(50),
              padding: scale(12),
              borderRadius: scale(5),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: scale(15), color: 'white', fontWeight: 'bold'}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
