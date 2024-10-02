import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootNavigatorParamList} from './typings';
import {navigationRef} from './utils';
import LaunchScreen from '@modules/main/views/LaunchScreen';
import MainScreen from '@modules/main/views/MainScreen';
import {StatusBar} from 'react-native';
import {useMyTheme} from '@modules/main/src/providers/ThemeProvider';
import Colors from '@modules/themes/colors';

const RootStack = createNativeStackNavigator<RootNavigatorParamList>();

function RootNavigation() {
  const {Navigator, Screen} = RootStack;
  const {theme} = useMyTheme();
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        backgroundColor={Colors[theme]?.bgColor}
        barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
        translucent
      />
      <Navigator initialRouteName="Launch" screenOptions={{headerShown: false}}>
        {/* init data */}
        <Screen name="Launch" component={LaunchScreen} />
        <Screen name="Main" component={MainScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
