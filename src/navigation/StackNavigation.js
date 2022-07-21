import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '@screens/LoginScreen';
import RegisterProfile from '@screens/OnboardingScreen/ProfileScreen';
import SignUpScreen from '@screens/OnboardingScreen/SignupScreen';
import ForgotPassword from '@screens/OnboardingScreen/ForgotPassword';


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
    <Stack.Screen name="RegisterProfile" component={RegisterProfile} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

    </Stack.Navigator>
    </NavigationContainer>
  )
}
