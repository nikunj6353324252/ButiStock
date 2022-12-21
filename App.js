import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './app/Screen/HomeScreen';
import LoginScreen from './app/Screen/LoginScreen';
import QrScanScreen from './app/Screen/QrScanScreen';
import ReportScreen from './app/Screen/ReportScreen';
import CustomeHeader from './app/Components/CustomHeader';
import Scanner from './app/Screen/Scanner';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
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
        <Stack.Screen name="Login" component={LoginScreen} />
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
    </NavigationContainer>
  );
};

export default App;
