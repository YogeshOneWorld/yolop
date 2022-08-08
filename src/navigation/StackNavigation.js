import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '@screens/LoginScreen';
import RegisterProfile from '@screens/OnboardingScreen/ProfileScreen';
import SignUpScreen from '@screens/OnboardingScreen/SignupScreen';
import ForgotPassword from '@screens/OnboardingScreen/ForgotPassword';
import OtpScreen from '@screens/OnboardingScreen/OtpScreen';
import CreatePassword from '@screens/OnboardingScreen/CreatePassword';
import {NAVIGATION_SCREENS} from '@utils/navigationScreen';
import NotificationScreen from '@screens/NotificationScreen';
import TabNavigation from './TabNavigation';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

export default function StackNavigation({navigationRef}) {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={NAVIGATION_SCREENS.LOGIN}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={NAVIGATION_SCREENS.LOGIN} component={LoginScreen} />
        <Stack.Screen
          name={NAVIGATION_SCREENS.SIGNUP}
          component={SignUpScreen}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.REGISTRATION}
          component={RegisterProfile}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.FORGOT_PASSWORD}
          component={ForgotPassword}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.OTP_SCREEN}
          component={OtpScreen}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.CREATE_PASSWORD}
          component={CreatePassword}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.TABNAVIGATOR}
          component={TabNavigation}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.DRAWERSCREEN}
          component={DrawerNavigation}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.NOTIFICATION}
          component={NotificationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
