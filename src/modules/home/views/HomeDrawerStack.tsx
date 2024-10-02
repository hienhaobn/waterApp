import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import HomeScreen from './HomeScreen';
import {HomeDrawerParamsList} from 'navigation/typings';

const Drawer = createDrawerNavigator<HomeDrawerParamsList>();

const HomeDrawerStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default HomeDrawerStack;
