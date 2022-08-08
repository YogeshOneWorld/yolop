import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginScreen from '@screens/LoginScreen';
import NotificationScreen from '@screens/NotificationScreen';
import {NAVIGATION_SCREENS} from '@utils/navigationScreen';
import {WIDTH} from '@utils/constant';
import HomeScreen from '@screens/HomeScreen';
import TabNavigation from './TabNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      //   initialRouteName={NAVIGATION_SCREENS.LOGIN}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerType: 'slide',
        drawerWidth: WIDTH.w0,
        drawerStyle: {
          backgroundColor: '#fff',
          width: WIDTH.w300,
        },
      }}>
      <Drawer.Screen
        name={NAVIGATION_SCREENS.NOTIFICATION}
        component={TabNavigation}
      />
      <Drawer.Screen name={NAVIGATION_SCREENS.LOGIN} component={LoginScreen} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
