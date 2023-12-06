import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image, StatusBar } from 'react-native';

// Import your screen components here
import LoginScreen from './src/components/LoginScreen';
import SignupScreen from './src/components/SignupScreen';
import ForgotPassword from './src/components/ForgotPassword';
import Homepage from './src/components/Homepage'; 
import Settings from './src/components/Settings';
import User from './src/components/User';
import Menu from './src/components/Menu';
import Notification from './src/components/Notification';
import QrCode from './src/components/QrCode';
import ParkingLot from './src/components/ParkingLot';
import BookSlot from './src/components/BookSlot';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="signup"
          component={SignupScreen}
        />
        <Stack.Screen
          name="forgotpassword"
          component={ForgotPassword}
        />
          <Stack.Screen
          name="homepage"
          component={Homepage}
        />
        <Stack.Screen
          name="settings"
          component={Settings}
        />
          <Stack.Screen
          name="user"
          component={User}
        />
          <Stack.Screen
          name="menu"
          component={Menu}
        />
          <Stack.Screen
          name="notification"
          component={Notification}
        />

<Stack.Screen
          name="qrcode"
          component={QrCode}
        />
        
<Stack.Screen
          name="parkinglot"
          component={ParkingLot}
        />

<Stack.Screen
          name="bookslot"
          component={BookSlot}
        />
      </Stack.Navigator>

      
    </NavigationContainer>

    
  );
};




export default App;
