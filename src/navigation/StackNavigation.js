import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '@screens/LoginScreen';
import RegisterProfile from '@screens/OnboardingScreen/ProfileScreen';
import SignUpScreen from '@screens/OnboardingScreen/SignupScreen';
import ForgotPassword from '@screens/OnboardingScreen/ForgotPassword';
import OtpScreen from '@screens/OnboardingScreen/OtpScreen';
import CreatePassword from '@screens/OnboardingScreen/CreatePassword';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="RegisterProfile" component={RegisterProfile} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="CreatePassword" component={CreatePassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
