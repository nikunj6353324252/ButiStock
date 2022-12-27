import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

const CustomeHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: '#2C3539'}}>
      <View
        style={{
          flexDirection: 'row',
          width: scale(350),
          height: verticalScale(65),
          alignItems: 'center',
          backgroundColor: '#87CEEB',
          borderBottomLeftRadius: verticalScale(15),
          borderBottomRightRadius: verticalScale(15),
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: scale(2),
          },
          shadowOpacity: scale(0.25),
          shadowRadius: scale(4),
          elevation: scale(6),
        }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons
            name="menu-sharp"
            size={scale(28)}
            color="white"
            style={{marginLeft: scale(10)}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomeHeader;
