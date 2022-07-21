import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../component/screen/LoginScreen';
import SignUpScreen from '../component/screen/SignupScreen';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'
       screenOptions={{
        headerShown: false
      }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})