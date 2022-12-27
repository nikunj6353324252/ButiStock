import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../Screen/HomeScreen';
import QrScanScreen from '../Screen/QrScanScreen';
import ReportScreen from '../Screen/ReportScreen';
import Scanner from '../Screen/Scanner';
import CustomeHeader from '../Components/CustomHeader';
import {scale} from 'react-native-size-matters';
import CustomDrawer from '../Components/CustomDrawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
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

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveTintColor: '#F2A1B2',
        drawerInactiveTintColor: '#333',
        drawerStyle: {width: scale(270)},
        drawerLabelStyle: {
          fontSize: scale(13),
        },
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={HomeStack} />
    </Drawer.Navigator>
  );
};

export default AppStack;
