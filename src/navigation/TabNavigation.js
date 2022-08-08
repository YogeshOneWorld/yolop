import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/HomeScreen';
import AuctionScreen from '@screens/AuctionScreen';
import {NAVIGATION_SCREENS} from '@utils/navigationScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={NAVIGATION_SCREENS.HOMESCREEN}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={AuctionScreen} />
    </Tab.Navigator>
  );
};
export default TabNavigation;
