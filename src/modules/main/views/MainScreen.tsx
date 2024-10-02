import NotificationScreen from '@modules/notification/views/NotificationScreen';
import ScanQRScreen from 'modules/scanQR/views/ScanQRScreen';
import SearchScreen from '@modules/search/views/SearchScreen';
import SettingsScreen from '@modules/setting/views/SettingsScreen';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {MainTabParamList} from '@navigation/typings';
import React from 'react';
import MyTabBar from '../src/components/MyTab';
import HomeDrawerStack from 'modules/home/views/HomeDrawerStack';

const Tab = createBottomTabNavigator<MainTabParamList>();

function MainScreen() {
  const renderTabBar = (props: BottomTabBarProps) => {
    return <MyTabBar {...props} />;
  };
  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeDrawerStack} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="QR" component={ScanQRScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default MainScreen;
