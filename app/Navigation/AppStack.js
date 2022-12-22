import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screen/HomeScreen';
import QrScanScreen from '../Screen/QrScanScreen';
import ReportScreen from '../Screen/ReportScreen';
import Scanner from '../Screen/Scanner';
import CustomeHeader from '../Components/CustomHeader';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          header: () => <CustomeHeader />,
        }}
      />

      <Stack.Screen
        name="ScanScreen"
        component={QrScanScreen}
        options={{
          headerShown: true,
          header: () => <CustomeHeader />,
        }}
      />
      <Stack.Screen
        name="Report"
        component={ReportScreen}
        options={{
          headerShown: true,
          header: () => <CustomeHeader />,
        }}
      />
      <Stack.Screen name="Scan" component={Scanner} />
    </Stack.Navigator>
  );
};

export default AppStack;
