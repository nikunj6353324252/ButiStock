import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {scale, verticalScale} from 'react-native-size-matters';
import {userLoginAction} from '../Redux/action/AuthAction';
import {useDispatch, useSelector} from 'react-redux';
import * as yup from 'yup';
import {Formik} from 'formik';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const userSignIn = (userName, password) => {
    console.log(userName, password);
    if (userName && password) {
      dispatch(userLoginAction(userName, password));
    } else {
      Toast.show({
        text1: 'you forgot to enter something',
        visibilityTime: 3000,
        autoHide: true,
        position: 'top',
        type: 'error',
      });
    }
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#2C3539'}}>
      <StatusBar backgroundColor={'#2C3539'} barStyle="light-content" />
      <View
        style={{
          backgroundColor: '#87CEEB',
          height: height / 3,
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomLeftRadius: scale(15),
          borderBottomRightRadius: scale(15),
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

        <Formik
          initialValues={{
            userName: '',
            password: '',
          }}
          onSubmit={values => Alert.alert(JSON.stringify(values))}
          validationSchema={yup.object().shape({
            userName: yup
              .string()
              .min(2)
              .required('Please, provide your userName!'),
            password: yup
              .string()
              .min(4)
              .max(10, 'Password should not excced 10 chars.')
              .required(),
          })}>
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
          }) => (
            <View style={{padding: scale(20), marginTop: verticalScale(30)}}>
              <TextInput
                placeholder="userName"
                placeholderTextColor={'white'}
                value={values.mobileNo}
                onChangeText={handleChange('userName')}
                onBlur={() => setFieldTouched('userName')}
                style={{
                  borderWidth: scale(1),
                  borderRadius: scale(5),
                  padding: scale(9),
                  borderColor: 'white',
                  color: 'white',
                  backgroundColor: 'rgba(255,255,255,0.3)',
                }}
              />

              {touched.userName && errors.userName && (
                <Text style={{fontSize: 15, color: 'red'}}>
                  {errors.userName}
                </Text>
              )}

              <TextInput
                placeholder="Password"
                placeholderTextColor={'white'}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                secureTextEntry={true}
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

              {touched.password && errors.password && (
                <Text style={{fontSize: 15, color: 'red'}}>
                  {errors.password}
                </Text>
              )}

              <TouchableOpacity
                disabled={!isValid}
                onPress={() => {
                  userSignIn(values.userName, values.password);
                }}
                style={{
                  backgroundColor: isValid ? '#87CEEB' : 'grey',
                  marginTop: scale(50),
                  padding: scale(12),
                  borderRadius: scale(5),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: scale(15),
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
