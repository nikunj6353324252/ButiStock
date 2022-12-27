import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {scale, verticalScale} from 'react-native-size-matters';
import {authLogOutAction} from '../Redux/action/AuthAction';
import {userLoggedInAction} from '../Redux/action/AuthAction';
import {useDispatch} from 'react-redux';

const CustomDrawer = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          fontSize: scale(15),
          fontWeight: 'bold',
          paddingLeft: scale(10),
          paddingTop: verticalScale(10),
          color: '#87CEEB',
          textTransform: 'uppercase',
        }}>
        Welcom
      </Text>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: ''}}>
        <View style={{flex: 1}}>
          <View
            style={{
              borderBottomWidth: scale(0.3),
              borderBottomColor: 'grey',
              marginHorizontal: scale(6),
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontSize: scale(15),
                  margin: scale(5),
                  color: 'black',
                  paddingVertical: verticalScale(2),
                  fontWeight: '500',
                }}>
                Home
              </Text>
              <AntDesign
                name="right"
                size={scale(15)}
                color="#87CEEB"
                style={{
                  marginTop: verticalScale(8),
                  paddingRight: scale(3),
                  paddingVertical: verticalScale(2),
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </DrawerContentScrollView>

      <View
        style={{
          padding: scale(10),
          borderTopWidth: scale(1),
          borderTopColor: '#ccc',
        }}>
        <TouchableOpacity
          onPress={() => {
            dispatch(authLogOutAction());
            dispatch(userLoggedInAction(null));
          }}
          style={{paddingVertical: verticalScale(5)}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: scale(13),
                marginLeft: scale(5),
                color: 'black',
                fontWeight: '500',
              }}>
              log Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
